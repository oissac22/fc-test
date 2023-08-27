import { ITokenData } from "../../interfaces/ITokenData";
import { IModelLogin } from "../../interfaces/IModelLogin";
import { IServicesUsersDetail } from "../../interfaces/IServicesUsers";
import { IUsersDataNoPassword } from "../../interfaces/IModelUsers";



export class ServiceLogin_Data {
    constructor(
        private refresh_token: string,
        private readonly model: IModelLogin,
        private readonly userService: IServicesUsersDetail
    ) { }

    async result(): Promise<IUsersDataNoPassword> {
        const { user_id } = await this.model.getLogin(this.refresh_token);
        const user = await this.userService.detailUser(user_id);
        return user;
    }
}
