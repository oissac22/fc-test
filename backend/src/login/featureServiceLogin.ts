import { Database } from "../databasesql";
import { TokenDataJWT } from "../entities/tokenDataJwt";
import { ModelUsers } from "../users/model";
import { ServiceUsers } from "../users/service";
import { ModelLogin } from "./model";
import { ServiceLogin } from "./service";

const modelUsers = new ModelUsers(Database);
const userService = new ServiceUsers(modelUsers);
const token = new TokenDataJWT();
const model = new ModelLogin(Database);

export const featureServiceLogin = new ServiceLogin(userService, token, model);