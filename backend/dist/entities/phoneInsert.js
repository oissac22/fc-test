"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneAdjustToInsert = void 0;
function phoneAdjustToInsert(phone) {
    return phone.replace(/\D+/g, '');
}
exports.phoneAdjustToInsert = phoneAdjustToInsert;
