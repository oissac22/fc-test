"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logs = void 0;
class Logs {
    log(...value) {
        console.log(...value);
    }
    error(...value) {
        console.error(...value);
    }
}
exports.Logs = Logs;
