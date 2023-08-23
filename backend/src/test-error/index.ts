import { HTTPException, HTTPStatus } from "../entities/error";
import { IController, TControllerExec } from "../interfaces/Controller";

export class ControllerTestError implements IController {

    async exec(): Promise<TControllerExec> {
        throw new Error("Test internal error");
    }

}