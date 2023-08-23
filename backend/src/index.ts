import { Api } from "./app";
import { PORT } from "./config";

Api.listen(PORT, () => console.log(`Run in ${PORT}`));