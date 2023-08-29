import { IController, IControllerProps, TControllerExec } from '../../interfaces/Controller';
import { IServicesUsers, IServicesUsersDataByPassword, IServicesUsersUpdatePassword } from "../../interfaces/IServicesUsers";



export class ControllerUserUpdatePassword implements IController {

    constructor(
        private readonly service: IServicesUsersUpdatePassword
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { body } = props;
        const { cpf, login, password } = body || {};
        const result = await this.service.updatePasswordUser(
            { cpf, login, password }
        );
        return {
            status: 200,
            data: result
        };
    }

}
