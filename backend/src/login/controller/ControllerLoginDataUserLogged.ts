import { IController, IControllerProps, TControllerExec } from "../../interfaces/Controller";
import { IServiceLogin } from "../../interfaces/IServiceLogin";

export class ControllerLoginDataUserLogged implements IController {

    constructor(
        private readonly service: IServiceLogin
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { key = '' } = props.headers || {};
        console.log('key :>> ', key);
        const user = await this.service.userDataByToken(key) || {};
        return {
            status:200,
            data: user
        }
    }

}
