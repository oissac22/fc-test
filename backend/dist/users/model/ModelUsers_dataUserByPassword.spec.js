"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ModelUsers_dataUserByPassword_1 = require("./ModelUsers_dataUserByPassword");
const entities = __importStar(require("../../entities/passwordCrip"));
jest.spyOn(entities, 'passwordCrip').mockImplementation(text => `*crip:${text}`);
const { passwordCrip } = entities;
const FAKE_LIST = [{
        "age": "1984-09-08",
        "cpf": "10020030040",
        "dateInsert": "2023-08-24 01:17:33",
        "dateUpdate": "2023-08-24 01:17:33",
        "email": "cassio@test.com",
        "id": 1,
        "login": "cassio",
        "mather": "Catia",
        "name": "Cássio",
        "phone": "81900000001",
        "status": "active"
    }];
describe("ModelUsers_dataUserByPassword class", () => {
    it("get user data", async () => {
        const { model, database } = newModelUsers_dataUserByPassword('test', '123456');
        const sut = await model.result();
        expect(sut).toEqual(FAKE_LIST[0]);
        expect(database._query).toBe(`SELECT *\nFROM users\nWHERE login=? AND password=?`);
        expect(database._props).toEqual(['test', passwordCrip('123456')]);
    });
    it("invalid login", async () => {
        const { model } = newModelUsers_dataUserByPassword('invalid_login', '123456');
        await expect(() => model.result())
            .rejects
            .toThrow('Login ou senha inválida');
    });
    it("invalid password", async () => {
        const { model } = newModelUsers_dataUserByPassword('test', 'invalid_password');
        await expect(() => model.result())
            .rejects
            .toThrow('Login ou senha inválida');
    });
});
function newModelUsers_dataUserByPassword(login, password) {
    const database = new FakeDatabase();
    const model = new ModelUsers_dataUserByPassword_1.ModelUsers_dataUserByPassword(login, password, database);
    return { model, database };
}
class FakeDatabase {
    _query = null;
    _props = null;
    async list(query, props) {
        this._query = query;
        this._props = props;
        if (props?.[0] === 'invalid_login' || /invalid_password/.test(props?.[1] + ''))
            return [];
        return FAKE_LIST;
    }
    exec(query, props) {
        throw new Error("Method not implemented.");
    }
}
