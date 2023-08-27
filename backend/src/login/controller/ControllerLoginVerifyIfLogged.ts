import { IController, IControllerProps, TControllerExec } from "../../interfaces/Controller";
import { IServiceLogin } from "../../interfaces/IServiceLogin";

export class ControllerLoginVerifyIfLogged implements IController {

    constructor(
        private readonly service: IServiceLogin
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { key = '' } = props.headers || {};
        const { new_refresh_token } = await this.service.verifyLoginActived(key) || {};
        props.headers.key = new_refresh_token || key;
        return {
            status:200,
            next: true,
            headers: new_refresh_token ? { "x-access-key":new_refresh_token } : null
        }
    }

}
