import { IController } from "./Controller";

export interface IApi {
    setup(): void;
    use(...props:any):void;
    use(controller:IController):void;
    all(url:string, controller:IController):any;
    get(url:string, controller:IController):any;
    delete(url:string, controller:IController):any;
    post(url:string, controller:IController):any;
    put(url:string, controller:IController):any;
    run(): void;
}