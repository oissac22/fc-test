import { Api } from "../api";
import { Database } from "../databasesql";
import { ControllerUsersList } from "./controller";
import { ModelUsers } from "./model";
import { ServiceUsers } from "./service";


const model = new ModelUsers(Database)
const service = new ServiceUsers(model)

Api.get('/api/v1/users', new ControllerUsersList(service))