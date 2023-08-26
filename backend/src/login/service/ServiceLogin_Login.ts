import { IServicesUsersDataByPassword } from "../../interfaces/IServicesUsers";
import { HTTPException, HTTPStatus } from "../../entities/error";
import { ITokenData } from "../../interfaces/ITokenData";
import { KEY_LOGIN_LONG_TIME, KEY_LOGIN_SHORT_TIME, TOKEN_LONG_TIME_EXPIRE, TOKEN_SHORT_TIME_EXPIRE } from "../../config";
import { IModelLogin } from "../../interfaces/IModelLogin";



export class ServiceLogin_Login {
    constructor(
        private readonly login: string,
        private readonly password: string,
        private readonly userService: IServicesUsersDataByPassword,
        private readonly token: ITokenData,
        private readonly model: IModelLogin
    ) { }

    async result() {
        const userData = await this.userService.userByPassword(this.login, this.password);
        const { id, name, status } = userData;
        if (status === 'block')
            throw new HTTPException(`Este usuário está bloqueado`, HTTPStatus.UNAUTHORIZED);
        if (status === 'inactive')
            throw new HTTPException(`Este usuário está inativo`, HTTPStatus.UNAUTHORIZED);
        const data = { id, name };
        const token = this.token.newToken(data, KEY_LOGIN_LONG_TIME, TOKEN_LONG_TIME_EXPIRE);
        const refresh_token = this.token.newToken(data, KEY_LOGIN_SHORT_TIME, TOKEN_SHORT_TIME_EXPIRE);
        await this.model.insertLogin({
            refresh_token,
            token,
            user_id: id
        });
        return { token: refresh_token };
    }
}
