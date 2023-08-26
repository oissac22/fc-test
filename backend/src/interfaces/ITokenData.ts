export interface ITokenData {
    newToken(data: any, key:string, expiresIn:string | number):string;
    validateToken(token: string, key:string):null | unknown;
    getDataToken(token:string):unknown;
}