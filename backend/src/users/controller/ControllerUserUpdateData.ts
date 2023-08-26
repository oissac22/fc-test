import { IController, IControllerProps, TControllerExec } from '../../interfaces/Controller';
import { IServicesUsers } from "../../interfaces/IServicesUsers";



export class ControllerUserUpdateData implements IController {

    constructor(
        private readonly service: IServicesUsers
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { body, params } = props;
        const { id = '' } = params;
        const { age, cpf, email, login, mather, name, password, phone, status } = body || {};
        const ageAdjust = age ? new Date(age) : undefined
        const result = await this.service.updateUser(
            Number(id) || 0,
            { age:ageAdjust, cpf, email, login, mather, name, password, phone, status }
        );
        return {
            status: 200,
            data: result
        };
    }

}
