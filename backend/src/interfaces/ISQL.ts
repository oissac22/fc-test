export interface ISQL {
    list(query:string, props?:string[]):Promise<any>;
    exec(query:string, props?:string[]):Promise<any>;
}