"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerTestError = void 0;
class ControllerTestError {
    async exec() {
        throw new Error("Test internal error");
    }
}
exports.ControllerTestError = ControllerTestError;
