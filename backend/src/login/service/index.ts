import { IServicesUsersDataByPassword } from "../../interfaces/IServicesUsers";
import { IServiceLogin } from "../../interfaces/IServiceLogin";
import { ITokenData } from "../../interfaces/ITokenData";
import { IModelLogin } from "../../interfaces/IModelLogin";
import { ServiceLogin_Login } from "./ServiceLogin_Login";

export class ServiceLogin implements IServiceLogin {
    constructor(
        private readonly userService:IServicesUsersDataByPassword,
        private readonly token: ITokenData,
        private readonly model: IModelLogin
    ){}

    async login(login: string, password: string): Promise<{ token: string; }> {
        return new ServiceLogin_Login(login, password, this.userService, this.token, this.model).result();
    }

    logoff(login: string, password: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    logoffEveryMachines(login: string, password: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    verifyLoginActived(token: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}


