import { Api } from "../api";
import { Database } from "../databasesql";
import { ControllerUsersDataById, ControllerUsersList } from "./controller";
import { ModelUsers } from "./model";
import { ServiceUsers } from "./service";


const model = new ModelUsers(Database)
const service = new ServiceUsers(model)

Api.get('/api/v1/users', new ControllerUsersList(service))
Api.get('/api/v1/users/:id', new ControllerUsersDataById(service))