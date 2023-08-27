import Axios, { AxiosResponseHeaders } from 'axios';
import { IApi } from "@/components/interfaces/IApi";
import { API_URI } from '@/config';

const KEY_STORAGE_NAME = 'HNgsVIOtKh';

const AxiosApi = Axios.create({
    baseURL: API_URI,
})

export class ApiAxios implements IApi {
    protected keyValue:string = '';
    private started:boolean = false;

    constructor(){}

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

    async get(url: string, props: any = {}): Promise<any>
    {
        // const result = await AxiosApi.get(url, {...props, headers: {key:this.key}});
        const cursor = await fetch(API_URI + url, {
            headers: {...props, headers: {key:this.key}}
        });
        const data = await cursor.json();
        console.log('cursor.data :>> ', data);
        console.log('cursor.headers :>> ', cursor.headers);
        console.log('cursor.status :>> ', cursor.status);
        if (cursor.status >= 400)
            throw new HTTPException(data || 'Network Error', cursor.status, data);
        this.adjustKey(cursor.headers);
        return data;
    }

    async delete(url: string, props: any = {}): Promise<any>
    {
        const result = await AxiosApi.delete(url, {...props, headers: {key:this.key}});
        this.adjustKey(result.headers.newtoken);
        return result.data;
    }

    async post(url: string, data: any, props: any = {}): Promise<any>
    {
        const result = await AxiosApi.post(url, data, {...props, headers: {key:this.key}});
        this.adjustKey(result.headers.newtoken);
        return result.data;
    }

    async put(url: string, data: any, props: any = {}): Promise<any>
    {
        const result = await AxiosApi.put(url, data, {...props, headers: {key:this.key}});
        this.adjustKey(result.headers.newtoken);
        return result.data;
    }
    
}

export class HTTPException extends Error {
    constructor(
        message:string,
        readonly status: number,
        readonly responseData:any
    ){
        super(message)
    }
}