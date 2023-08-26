import { IController, IControllerProps, TControllerExec } from "../../interfaces/Controller";
import { IServicesUsers } from "../../interfaces/IServicesUsers";

export class ControllerUserDeleteById implements IController {

    constructor(
        private readonly service: IServicesUsers
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec>
    {
        const { id = '0' } = props.params || {};
        await this.service.deleteUser(Number(id || 0));
        return {
            status: 200,
            data: '',
        }
    }

}