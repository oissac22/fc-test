"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_SHORT_TIME_EXPIRE = exports.TOKEN_LONG_TIME_EXPIRE = exports.KEY_LOGIN_SHORT_TIME = exports.KEY_LOGIN_LONG_TIME = exports.AUTHORIZATION_MOBILE = exports.AUTHORIZATION_WEB = exports.PATH_DATABASE = exports.PATH_HTML = exports.PATH_ROOT = exports.PORT = void 0;
const path_1 = __importDefault(require("path"));
exports.PORT = Number(process.env.PORT || "4444");
exports.PATH_ROOT = path_1.default.join(__dirname, '..');
exports.PATH_HTML = path_1.default.join(exports.PATH_ROOT, 'html');
exports.PATH_DATABASE = path_1.default.join(exports.PATH_ROOT, 'database');
exports.AUTHORIZATION_WEB = process.env.AUTHORIZATION_WEB || "TZjlUKjhSpSV4axgGec6bvLuUlPnBgl7";
exports.AUTHORIZATION_MOBILE = process.env.AUTHORIZATION_MOBILE || "JanHWrsUCHqlW4McUsFJDg147J5QZ0W1";
exports.KEY_LOGIN_LONG_TIME = process.env.KEY_LOGIN_LONG_TIME || "8yH31AWWXSEtNtEJodQyfcYLak9RdeRP";
exports.KEY_LOGIN_SHORT_TIME = process.env.KEY_LOGIN_SHORT_TIME || "xTgUU76yksorNKlHFQcCxBKUyEZCchUX";
exports.TOKEN_LONG_TIME_EXPIRE = process.env.TOKEN_LONG_TIME_EXPIRE || '30d';
exports.TOKEN_SHORT_TIME_EXPIRE = process.env.TOKEN_LONG_TIME_EXPIRE || '1m';
