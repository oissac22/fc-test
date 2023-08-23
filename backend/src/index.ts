import { Api } from "./api";
import { ControllerNotFound } from "./not-found";

Api.setup();

Api.use(new ControllerNotFound())

Api.run();