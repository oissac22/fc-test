import { ILogs } from "../interfaces/ILogs";

export class Logs implements ILogs {

    log(v1:any, ...value: any[]): void {
        console.log(v1, ...value)
    }

    error(v1:any, ...value: any[]): void {
        console.error(v1, ...value)
    }

}