import { IController, IControllerProps, TControllerExec } from "../../interfaces/Controller";
import { IServiceLogin } from "../../interfaces/IServiceLogin";

export class ControllerLoginLogoffEveryRegs implements IController {

    constructor(
        private readonly service: IServiceLogin
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { token } = props.params || {};
        await this.service.logoffEveryMachines(token)
        return {
            status:200,
            data: ''
        }
    }

}
