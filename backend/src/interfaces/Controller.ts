export type TControllerExec = {
    status: number,
    data?: any,
    file?: any,
    next?: boolean,
    headers?: any,
    cookies?: {[key:string]:any}
}

export interface IControllerProps {
    params?:any,
    query?:any,
    body?:any,
    headers?:any,
    url?:string,
    cookies?: {[key:string]:any}
}

export interface IController {
    exec(props:IControllerProps):Promise<TControllerExec>
}