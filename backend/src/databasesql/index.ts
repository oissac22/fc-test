import { ISQL } from "../interfaces/ISQL";
import { SQLite } from "./sqlite3";

export const Database:ISQL = new SQLite();


export * from './SQLQueryInsert';