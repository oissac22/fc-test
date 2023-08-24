import { SQLQueryInsert } from "../../databasesql";
import { passwordCrip } from "../../entities/passwordCrip";
import { IUsersDataInsert } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";


export class ModelUsers_Insert {
    constructor(
        private readonly data: IUsersDataInsert,
        private readonly database: ISQL
    ) {
        data.password = passwordCrip(data.password);
    }

    async result(): Promise<{ id: number; }> {
        const data = { ...this.data, age: this.data.age.toISOString() };
        const sqlObj = new SQLQueryInsert('users', data);
        const result = await this.database.exec(
            sqlObj.sql,
            sqlObj.propsValues
        );
        return result;
    }
}
