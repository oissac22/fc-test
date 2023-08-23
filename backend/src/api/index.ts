import { Logs } from '../entities/logs';
import { IApi } from '../interfaces/Api';
import { ApiExpress } from './apiExpress';


export const Api:IApi = new ApiExpress(new Logs());