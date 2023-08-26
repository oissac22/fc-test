import { IModelLogin } from "../../interfaces/IModelLogin";

export class ServiceLogin_LogoffEveryMachines {
    constructor(
        private readonly token: string,
        private readonly model: IModelLogin
    ) { }

    async result() {
        const data = await this.model.getLogin(this.token);
        await this.model.deleteFullTokenUser(data.user_id);
    }
}
