"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenDataJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenDataJWT {
    newToken(data, key, expiresIn) {
        return jsonwebtoken_1.default.sign(data, key, { expiresIn });
    }
    validateToken(token, key) {
        return jsonwebtoken_1.default.verify(token, key);
    }
    getDataToken(token) {
        return jsonwebtoken_1.default.decode(token);
    }
}
exports.TokenDataJWT = TokenDataJWT;
