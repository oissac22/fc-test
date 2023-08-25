import { IController, IControllerProps, TControllerExec } from '../../interfaces/Controller';
import { IServicesUsers } from '../../interfaces/IModelUsers';



export class ControllerUserInsertData implements IController {

    constructor(
        private readonly service: IServicesUsers
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { body } = props;
        const { age = '', cpf = '', email = '', login = '', mather = '', name = '', password = '', phone = '', status } = body || {};
        const result = await this.service.insertUser({ age:new Date(age), cpf, email, login, mather, name, password, phone, status });
        return {
            status: 200,
            data: result
        };
    }

}
