import { Api } from "../api";
import { EventRequest } from "../api/EventRequest";
import { Database } from "../databasesql";
import { TokenDataJWT } from "../entities/tokenDataJwt";
import { ModelUsers } from "../users/model";
import { ServiceUsers } from "../users/service";
import { ControllerLoginLogoff } from "./controller";
import { ControllerLoginExecLogin } from "./controller/ControllerLoginExecLogin";
import { ModelLogin } from "./model";
import { ServiceLogin } from "./service";

const modelUsers = new ModelUsers(Database);
const userService = new ServiceUsers(modelUsers)

const token = new TokenDataJWT();
const model = new ModelLogin(Database);
const service = new ServiceLogin(userService, token, model)

new EventRequest().addEvent('beforerequest', (data) => {
    const { method, url, headers } = data;
    if (
        (url.indexOf("/api/v1/login") === 0)
        && (method.toLowerCase() !== 'post')
    ) {
        service.verifyLoginActived(headers?.key)
    }
})

Api.post('/api/v1/login', new ControllerLoginExecLogin(service));

Api.delete('/api/v1/login/:token', new ControllerLoginLogoff(service))