import { PATH_ROOT } from "../config";
import { IController, TControllerExec } from "../interfaces/Controller";

export class ControllerNotFound implements IController {

    async exec(): Promise<TControllerExec> {
        return {
            file: PATH_ROOT + '/html/not-found.html',
            status: 404
        }
    }

}