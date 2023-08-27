"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpfAdjustToInsert = void 0;
function cpfAdjustToInsert(cpf) {
    return cpf.replace(/\D+/g, '');
}
exports.cpfAdjustToInsert = cpfAdjustToInsert;
