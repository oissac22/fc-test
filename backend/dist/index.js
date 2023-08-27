"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("./config");
const api_1 = require("./api");
const not_found_1 = require("./not-found");
const test_error_1 = require("./test-error");
const controllerToExpressCallback_1 = require("./entities/controllerToExpressCallback");
api_1.Api.get('/test-error', (0, controllerToExpressCallback_1.controllerToExpressCallback)((new test_error_1.ControllerTestError())));
require("./login");
require("./users");
api_1.Api.use((0, controllerToExpressCallback_1.controllerToExpressCallback)(new not_found_1.ControllerNotFound()));
api_1.Api.listen(config_1.PORT, () => {
    console.log(`RUN IN http://localhost:${config_1.PORT}`);
});
