import { HTTPException, HTTPStatus } from "../../entities/error";
import { ITokenData } from "../../interfaces/ITokenData";
import { KEY_LOGIN_LONG_TIME, KEY_LOGIN_SHORT_TIME, TOKEN_SHORT_TIME_EXPIRE } from "../../config";
import { IModelLogin } from "../../interfaces/IModelLogin";



export class ServiceLogin_VerifyLoginActived {
    constructor(
        private refresh_token: string,
        private readonly token: ITokenData,
        private readonly model: IModelLogin,
    ) { }

    private velidRefreshToken()
    {
        this.token.validateToken(this.refresh_token, KEY_LOGIN_SHORT_TIME);
        return null;
    }

    private async updateRefreshToken(): Promise<{ new_refresh_token: string }>
    {
        try {
            const loginData = await this.model.getLogin(this.refresh_token);
            const { token } = loginData;
            const {exp, iat,...data} = this.token.validateToken(token, KEY_LOGIN_LONG_TIME);
            const new_refresh_token = this.token.newToken(data, KEY_LOGIN_SHORT_TIME, TOKEN_SHORT_TIME_EXPIRE);
            const dateUpdate = new Date();
            this.model.updateLogin(this.refresh_token, { dateUpdate, refresh_token:new_refresh_token });
            this.refresh_token = new_refresh_token;
            return { new_refresh_token }
        } catch (e) {
            console.log(e)
            throw new HTTPException(`O login não existe ou expirou`, HTTPStatus.UNAUTHORIZED);
        }
    }

    async result(): Promise<null | { new_refresh_token: string }> {
        try {
            return this.velidRefreshToken();
        } catch (e) {
            return await this.updateRefreshToken();
        }
    }
}
