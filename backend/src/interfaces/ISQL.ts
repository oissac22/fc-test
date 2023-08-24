export interface ISQL {
    list(query:string, props?:(string | number)[]):Promise<any>;
    exec(query:string, props?:(string | number)[]):Promise<any>;
}