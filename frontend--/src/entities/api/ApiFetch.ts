import { IApi } from "@/components/interfaces/IApi";
import { API_URI } from '@/config';

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
        credentials: "include",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    })
    let data:any;
    try {
        data = await cursor.json();
    } catch {
        try {
            data = await cursor.text()
        } catch {
            data = '';
        }
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

    async get(url: string)
    {
        const dataResult = await fetchExec({
            url: url ,
        })
        return dataResult.data;
    }

    async delete(url: string)
    {
        const dataResult = await fetchExec({
            url: url ,
            method: 'DELETE'
        })
        return dataResult.data;
    }

    async post(url: string, data: any)
    {
        const dataResult= await fetchExec({
            url: url ,
            method: 'POST',
            data
        })
        return dataResult.data;
    }

    async put(url: string, data: any)
    {
        const dataResult= await fetchExec({
            url: url ,
            method: 'PUT',
            data
        })
        return dataResult.data;
    }
    
}