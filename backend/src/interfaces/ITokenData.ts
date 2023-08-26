export interface ITokenData {
    newToken(data: any, key:string, expiresIn:string | number):string;
    validateToken(token: string, key:string):null | any;
    getDataToken(token:string):any;
}