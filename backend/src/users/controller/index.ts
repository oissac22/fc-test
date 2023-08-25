import { IController, IControllerProps, TControllerExec } from '../../interfaces/Controller';
import { IServicesUsers } from '../../interfaces/IModelUsers';

export * from './ControllerUsersList'

export class ControllerUsersDataById implements IController {

    constructor(
        private readonly service: IServicesUsers
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { params } = props;
        const result = await this.service.datailUser(Number(params?.id));
        return {
            status: 200,
            data: result
        };
    }

}