export type TApiReturn<T=any> = T

export interface IApi<T=any> {
    get(url:string, props?:any):Promise<TApiReturn<T>>;
    delete(url:string, props?:any):Promise<TApiReturn<T>>;
    post(url:string, data:any, props?:any):Promise<TApiReturn<T>>;
    put(url:string, data:any, props?:any):Promise<TApiReturn<T>>;
}