import 'dotenv/config'
import { PORT } from './config';
import { Api } from "./api";
import { ControllerNotFound } from "./not-found";
import { ControllerTestError } from "./test-error";
import { controllerToExpressCallback } from './entities/controllerToExpressCallback';

Api.get('/test-error', controllerToExpressCallback((new ControllerTestError())))

import './login'
import './users'

Api.use(controllerToExpressCallback(new ControllerNotFound()))

Api.listen(PORT, () => {
    console.log(`RUN IN http://localhost:${PORT}`)
});