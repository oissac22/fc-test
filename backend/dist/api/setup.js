"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
_1.Api.use((0, cors_1.default)({
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true
}));
_1.Api.use(express_1.default.json({ inflate: false }));
