import { IApi } from "../../components/interfaces/IApi";
import { API_URI } from '../../../config';
import axios from 'axios';

const Api = axios.create({
    baseURL: API_URI
})

export class HTTPException extends Error {
    constructor(
        message:string,
        readonly status: number,
        readonly responseData:any
    ){
        super(message)
    }
}

export class ApiAxios implements IApi {

    get key()
    {
        return localStorage.getItem('HNgsVIOtKh') || '';
    }

    set key(value:string)
    {
        localStorage.setItem('HNgsVIOtKh', value);
    }

    private async refreshToken()
    {
        try {
            const dataResult = await Api.get('/api/v1/login/refresh', { headers: { key:this.key } });
            if (dataResult.data?.key)
                this.key = dataResult.data?.key;
        } catch {}
    }

    async get(url: string)
    {
        await this.refreshToken();
        const dataResult = await Api.get(url, { headers: { key:this.key } })
        return dataResult.data;
    }

    async delete(url: string)
    {
        await this.refreshToken();
        const dataResult = await Api.delete(url, { headers: { key:this.key } })
        return dataResult.data;
    }

    async post(url: string, data: any)
    {
        await this.refreshToken();
        const dataResult = await Api.post(url, data, { headers: { key:this.key } })
        return dataResult.data;
    }

    async put(url: string, data: any)
    {
        await this.refreshToken();
        const dataResult = await Api.put(url, data, { headers: { key:this.key } })
        return dataResult.data;
    }
    
}