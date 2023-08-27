import { IController, IControllerProps, TControllerExec } from "../../interfaces/Controller";
import { IServiceLogin } from "../../interfaces/IServiceLogin";

export class ControllerLoginLogoffEveryRegs implements IController {

    constructor(
        private readonly service: IServiceLogin
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { key } = props.headers || {};
        await this.service.logoffEveryMachines(key)
        return {
            status:200,
            data: ''
        }
    }

}
