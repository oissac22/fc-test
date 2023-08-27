import { IController, IControllerProps, TControllerExec } from '../../interfaces/Controller';
import { IServicesUsersDetail } from '../../interfaces/IServicesUsers';


export class ControllerUsersDataById implements IController {

    constructor(
        private readonly service: IServicesUsersDetail
    ) { }

    async exec(props: IControllerProps): Promise<TControllerExec> {
        const { params } = props;
        const result = await this.service.detailUser(Number(params?.id || 0));
        return {
            status: 200,
            data: result
        };
    }

}
