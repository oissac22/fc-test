import jwt from 'jsonwebtoken';
import { ITokenData } from "../interfaces/ITokenData";

export class TokenDataJWT implements ITokenData {
    newToken(data: any, key:string, expiresIn:string | number): string {
        return jwt.sign(data, key, { expiresIn });
    }

    validateToken(token: string, key: string): unknown {
        return jwt.verify(token, key);
    }

    getDataToken(token: string): unknown {
        return jwt.decode(token);
    }
}