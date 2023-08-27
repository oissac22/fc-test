"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerNotFound = void 0;
const config_1 = require("../config");
class ControllerNotFound {
    async exec() {
        return {
            file: config_1.PATH_ROOT + '/html/not-found.html',
            status: 404
        };
    }
}
exports.ControllerNotFound = ControllerNotFound;
