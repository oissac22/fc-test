"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustPhoneDDIOnlyNumber = void 0;
function adjustPhoneDDIOnlyNumber(phoneOnlyNumber) {
    if (phoneOnlyNumber.length <= 11)
        return '55' + phoneOnlyNumber;
    return phoneOnlyNumber;
}
exports.adjustPhoneDDIOnlyNumber = adjustPhoneDDIOnlyNumber;
