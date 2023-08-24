import { IModelUsers, IUsersDataInsert } from "../../interfaces/IModelUsers";


export class SericeInsertUser {
    constructor(
        private readonly data: IUsersDataInsert,
        private readonly modelUsers: IModelUsers
    ) { }
    async result(): Promise<{ id: number; }> {
        const result = this.modelUsers.insertUser(this.data);
        return result;
    }
}
