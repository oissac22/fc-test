import { IApi } from "@/components/interfaces/IApi";
import { API_URI } from '@/config';

const KEY_STORAGE_NAME = 'HNgsVIOtKh';

export class HTTPException extends Error {
    constructor(
        message:string,
        readonly status: number,
        readonly responseData:any
    ){
        super(message)
    }
}

interface IFetchProps {
    url:string,
    data?:any,
    method?: 'GET' | 'DELETE' | 'POST' | 'PUT',
    headers?: HeadersInit
}

function adjustURL(url:string)
{
    if (/^https?:\/\//.test(url))
        return url;
    return API_URI.replace(/\/$/,'') + '/' + url.replace(/^\//,'');
}

async function fetchExec(props:IFetchProps)
{
    const cursor = await fetch(adjustURL(props.url), {
        method: props.method || 'GET',
        body: typeof props.data === 'object' ? JSON.stringify(props.data) : props.data,
        headers: {
            "Content-Type": "application/json",
            ...(props.headers || {})
        },
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    })
    console.log('cursor :>> ', cursor);
    let data:any;
    try {
        data = await cursor.json();
    } catch {
        data = await cursor.text()
    }
    if(cursor.status >= 400)
        throw new HTTPException(data, cursor.status, data)
    return {
        status: cursor.status,
        data: data,
        headers: cursor.headers
    }
}

export class ApiFetch implements IApi {
    protected keyValue:string = '';
    private started:boolean = false;

    private get key()
    {
        if (!this.started)
        {
            this.keyValue = localStorage.getItem(KEY_STORAGE_NAME) || '';
            this.started = true;
        }
        return this.keyValue;
    }

    private set key(value:string)
    {
        this.keyValue = value;
        localStorage.setItem(KEY_STORAGE_NAME, value);
    }

    private adjustKey(headers:any)
    {
        const newtoken = headers?.['x-access-key'] || '';
        if (newtoken)
            this.key = newtoken;
    }

    setKey(key:string)
    {
        this.key = key;
    }

    async get(url: string, props: any = {})
    {
        const dataResult = await fetchExec({
            url: url ,
            headers: {key:this.key}
        })
        this.adjustKey(dataResult.headers);
        return dataResult.data;
    }

    async delete(url: string, props: any = {})
    {
        const dataResult = await fetchExec({
            url: url ,
            headers: {key:this.key},
            method: 'DELETE'
        })
        this.adjustKey(dataResult.headers);
        return dataResult.data;
    }

    async post(url: string, data: any, props: any = {})
    {
        const dataResult= await fetchExec({
            url: url ,
            headers: {key:this.key},
            method: 'POST',
            data
        })
        this.adjustKey(dataResult.headers);
        return dataResult.data;
    }

    async put(url: string, data: any, props: any = {})
    {
        const dataResult= await fetchExec({
            url: url ,
            headers: {key:this.key},
            method: 'PUT',
            data
        })
        this.adjustKey(dataResult.headers);
        return dataResult.data;
    }
    
}