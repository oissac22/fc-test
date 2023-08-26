import jwt from 'jsonwebtoken';
import { ITokenData } from "../interfaces/ITokenData";

export class TokenDataJWT implements ITokenData {
    newToken(data: any, key:string, expiresIn:string | number): string {
        return jwt.sign(data, key, { expiresIn });
    }

    validateToken(token: string, key: string): any {
        return jwt.verify(token, key);
    }

    getDataToken(token: string): any {
        return jwt.decode(token);
    }
}