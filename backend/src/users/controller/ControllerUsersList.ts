import { IController, IControllerProps, TControllerExec } from "../../interfaces/Controller";
import { IServicesUsers } from "../../interfaces/IServicesUsers";


export class ControllerUsersList implements IController {

    constructor(
        private readonly service: IServicesUsers
    ) { }

    async exec({ query }: IControllerProps): Promise<TControllerExec> {
        const { index, limit, filter } = query;
        const result = await this.service.listUsers({
            index: Number(index || 0),
            limit: Number(limit || 1),
            filter: filter || ''
        });
        return {
            status: 200,
            data: result
        };
    }

}
