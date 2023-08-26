import { IModelLogin } from "../../interfaces/IModelLogin";

export class ServiceLogin_Logoff {
    constructor(
        private readonly token: string,
        private readonly model: IModelLogin
    ) { }

    async result() {
        await this.model.deleteLogin(this.token);
    }
}
