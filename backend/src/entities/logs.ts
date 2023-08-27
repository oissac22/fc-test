import { ILogs } from "../interfaces/ILogs";

export class Logs implements ILogs {

    log(...value: any[]): void {
        console.log(...value)
    }

    error(...value: any[]): void {
        console.error(...value)
    }

}