"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUsers = exports.MAX_LIMIT = void 0;
const ServiceInsertUser_1 = require("./ServiceInsertUser");
const ServiceUpdateUser_1 = require("./ServiceUpdateUser");
const ServiceUsersListUsers_1 = require("./ServiceUsersListUsers");
exports.MAX_LIMIT = 100;
class ServiceUsers {
    modelUsers;
    constructor(modelUsers) {
        this.modelUsers = modelUsers;
    }
    insertUser(data) {
        return new ServiceInsertUser_1.ServiceInsertUser(data, this.modelUsers).result();
    }
    updateUser(id, data) {
        return new ServiceUpdateUser_1.ServiceUpdateUser(id, data, this.modelUsers).result();
    }
    deleteUser(id) {
        return this.modelUsers.deleteUser(id);
    }
    listUsers(props) {
        return new ServiceUsersListUsers_1.ServiceUsersListUsers(props, this.modelUsers).result();
    }
    detailUser(id) {
        return this.modelUsers.detailUser(id);
    }
    userByPassword(login, password) {
        return this.modelUsers.userByPassword(login, password);
    }
}
exports.ServiceUsers = ServiceUsers;
