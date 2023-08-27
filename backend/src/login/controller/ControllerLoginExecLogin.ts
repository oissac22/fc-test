import { IController, IControllerProps, TControllerExec } from "../../interfaces/Controller";
import { IServiceLogin } from "../../interfaces/IServiceLogin";


export class ControllerLoginExecLogin implements IController {

    constructor(
        private readonly service: IServiceLogin
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { login = '', password = '' } = props.body || {};
        const result = await this.service.login(login, password);
        return {
            status: 200,
            cookies: { key: result.token }
        };
    }

}
