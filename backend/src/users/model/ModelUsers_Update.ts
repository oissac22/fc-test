import { SQLQueryUpdateById } from "../../databasesql";
import { passwordCrip } from "../../entities/passwordCrip";
import { IUsersDataUpdate } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";


export class ModelUsers_Update {
    constructor(
        private readonly id: number,
        private readonly data: IUsersDataUpdate,
        private readonly database: ISQL
    ) {
        if (data.password)
            data.password = passwordCrip(data.password);
    }

    async result(): Promise<void> {
        const data = { ...this.data, age: this.data.age?.toISOString(), dateUpdate: (new Date()).toISOString() };
        const sqlObj = new SQLQueryUpdateById(this.id + '', 'users', data);
        await this.database.exec(
            sqlObj.sql,
            sqlObj.propsValues
        );
    }
}
