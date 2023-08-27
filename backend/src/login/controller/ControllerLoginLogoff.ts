import { IController, IControllerProps, TControllerExec } from "../../interfaces/Controller";
import { IServiceLogin } from "../../interfaces/IServiceLogin";

export class ControllerLoginLogoff implements IController {

    constructor(
        private readonly service: IServiceLogin
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { token } = props.params || {};
        await this.service.logoff(token)
        return {
            status:200,
            data: ''
        }
    }

}
