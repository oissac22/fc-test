export type TControllerExec = {
    status: number,
    data?: any,
    file?: any
}

export interface IControllerProps {
    params?:any,
    query?:any,
    body?:any,
    headers?:any,
    url?:string
}

export interface IController {
    exec(props:IControllerProps):Promise<TControllerExec>
}