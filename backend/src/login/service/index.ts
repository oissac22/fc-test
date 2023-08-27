import { IServicesUsersDataByPassword } from "../../interfaces/IServicesUsers";
import { IServiceLogin } from "../../interfaces/IServiceLogin";
import { ITokenData } from "../../interfaces/ITokenData";
import { IModelLogin } from "../../interfaces/IModelLogin";
import { ServiceLogin_Login } from "./ServiceLogin_Login";
import { ServiceLogin_Logoff } from "./ServiceLogin_Logoff";
import { ServiceLogin_LogoffEveryMachines } from "./ServiceLogin_LogoffEveryMachines";
import { ServiceLogin_VerifyLoginActived } from "./ServiceLogin_VerifyLoginActived";

export class ServiceLogin implements IServiceLogin {
    constructor(
        private readonly userService:IServicesUsersDataByPassword,
        private readonly token: ITokenData,
        private readonly model: IModelLogin
    ){}

    async login(login: string, password: string): Promise<{ token: string; }> {
        return new ServiceLogin_Login(login, password, this.userService, this.token, this.model).result();
    }

    logoff(token: string): Promise<void> {
        return new ServiceLogin_Logoff(token, this.model).result();
    }

    logoffEveryMachines(token: string): Promise<void> {
        return new ServiceLogin_LogoffEveryMachines(token, this.model).result();
    }

    verifyLoginActived(token: string): Promise<null | { new_refresh_token:string }> {
        return new ServiceLogin_VerifyLoginActived(token, this.token, this.model).result();
    }
}