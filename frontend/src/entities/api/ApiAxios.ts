import Axios from 'axios';
import { IApi } from "@/components/interfaces/IApi";

const KEY_STORAGE_NAME = 'HNgsVIOtKh';

const AxiosApi = Axios.create({
    baseURL:'',
})

export class ApiAxios implements IApi {
    protected keyValue:string = '';

    constructor(){
        this.keyValue = localStorage.getItem(KEY_STORAGE_NAME) || '';
    }

    private get key()
    {
        return this.keyValue;
    }

    private set key(value:string)
    {
        this.keyValue = value;
        localStorage.setItem(KEY_STORAGE_NAME, value);
    }

    private adjustKey(headers:{[key:string]:any})
    {
        if (headers.newtoken)
            this.key = headers.newtoken;
    }

    setKey(key:string)
    {
        this.key = key;
    }

    async get(url: string, props: any = {}): Promise<any>
    {
        const result = await AxiosApi.get(url, {...props, key:this.key});
        this.adjustKey(result.headers);
        return result.data;
    }

    async delete(url: string, props: any = {}): Promise<any>
    {
        const result = await AxiosApi.delete(url, {...props, key:this.key});
        this.adjustKey(result.headers);
        return result.data;
    }

    async post(url: string, data: any, props: any = {}): Promise<any>
    {
        const result = await AxiosApi.post(url, data, {...props, key:this.key});
        this.adjustKey(result.headers);
        return result.data;
    }

    async put(url: string, data: any, props: any = {}): Promise<any>
    {
        const result = await AxiosApi.put(url, data, {...props, key:this.key});
        this.adjustKey(result.headers);
        return result.data;
    }
    
}