import { IController, IControllerProps, TControllerExec } from '../../interfaces/Controller';
import { IServicesUsers } from "../../interfaces/IServicesUsers";



export class ControllerUserDataByPassword implements IController {

    constructor(
        private readonly service: IServicesUsers
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { login = '', password = '' } = props.body || {};
        const result = this.service.userByPassword(login, password);
        return {
            status: 200,
            data: result
        };
    }

}
