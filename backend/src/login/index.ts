import { Api } from "../api";
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

Api.post('/api/v1/login', new ControllerLoginExecLogin(service))
Api.delete('/api/v1/login/:token', new ControllerLoginLogoff(service))