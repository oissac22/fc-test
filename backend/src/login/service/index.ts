import { IServicesUsers } from "../../interfaces/IServicesUsers";
import { IServiceLogin } from "../../interfaces/IServiceLogin";

export class ServiceLogin implements IServiceLogin {
    constructor(
        private readonly userService:IServicesUsers
    ){}

    login(login: string, password: string): Promise<{ token: string; }> {
        throw new Error("Method not implemented.");
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