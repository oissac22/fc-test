import { Api } from "./api";
import { ControllerNotFound } from "./not-found";
import { ControllerTestError } from "./test-error";

Api.setup();

Api.get('/test-error', new ControllerTestError())

Api.use(new ControllerNotFound())

Api.run();