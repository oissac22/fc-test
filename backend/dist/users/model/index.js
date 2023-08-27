"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelUsers = void 0;
const ModelUsers_Delete_1 = require("./ModelUsers_Delete");
const ModelUsers_Insert_1 = require("./ModelUsers_Insert");
const ModelUsers_ListUsers_1 = require("./ModelUsers_ListUsers");
const ModelUsers_Update_1 = require("./ModelUsers_Update");
const ModelUsers_dataUserById_1 = require("./ModelUsers_dataUserById");
const ModelUsers_dataUserByPassword_1 = require("./ModelUsers_dataUserByPassword");
class ModelUsers {
    database;
    constructor(database) {
        this.database = database;
    }
    insertUser(data) {
        return new ModelUsers_Insert_1.ModelUsers_Insert(data, this.database).result();
    }
    updateUser(id, data) {
        return new ModelUsers_Update_1.ModelUsers_Update(id, data, this.database).result();
    }
    deleteUser(id) {
        return new ModelUsers_Delete_1.ModelUsers_Delete(id, this.database).result();
    }
    listUsers(props) {
        return new ModelUsers_ListUsers_1.ModelUsers_ListUsers(props, this.database).result();
    }
    detailUser(id) {
        return new ModelUsers_dataUserById_1.ModelUsers_dataUserById(id, this.database).result();
    }
    userByPassword(login, password) {
        return new ModelUsers_dataUserByPassword_1.ModelUsers_dataUserByPassword(login, password, this.database).result();
    }
}
exports.ModelUsers = ModelUsers;
