import { Api } from "./api";
import cors from 'cors'

Api.use(cors({
    origin: '*'
}))