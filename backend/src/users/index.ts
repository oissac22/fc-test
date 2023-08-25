import { Api } from "../api";
import { Database } from "../databasesql";
import { ControllerUserDeleteById, ControllerUserInsertData, ControllerUserUpdateData, ControllerUsersList } from "./controller";
import { ControllerUsersDataById } from './controller/ControllerUsersDataById';
import { ModelUsers } from "./model";
import { ServiceUsers } from "./service";

const model = new ModelUsers(Database)
const service = new ServiceUsers(model)

Api.get('/api/v1/users', new ControllerUsersList(service))
Api.get('/api/v1/users/:id', new ControllerUsersDataById(service))
Api.post('/api/v1/users', new ControllerUserInsertData(service))
Api.put('/api/v1/users/:id', new ControllerUserUpdateData(service))
Api.delete('/api/v1/users/:id', new ControllerUserDeleteById(service))