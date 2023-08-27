"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordCrip_1 = require("./passwordCrip");
describe('entities test', () => {
    it('passwordCrip function', () => {
        const sut = (0, passwordCrip_1.passwordCrip)('123456');
        expect(sut).toBe('*crip:123456');
    });
});
