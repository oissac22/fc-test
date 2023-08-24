import { IUsersDataList, IUsersListFilter } from "../../interfaces/IModelUsers";
import { ISQL } from "../../interfaces/ISQL";

const SQL = `SELECT id, name, email, phone
FROM users
LIMIT ?
OFFSET ?`;

const SQL_WITH_SQL = `SELECT id, name, email, phone
FROM users
WHERE id=? OR name LIKE ? OR email LIKE ? OR phone LIKE ? OR cpf LIKE ? OR mather LIKE ? OR status LIKE ?
LIMIT ?
OFFSET ?`;


export class ModelUsers_ListUsers {
    constructor(
        private readonly props: IUsersListFilter,
        private readonly database: ISQL
    ) { }

    async result(): Promise<IUsersDataList[]> {
        if (this.props.filter)
        {
            const { filter } = this.props;
            const filters = (new Array(7)).fill(filter);
            return await this.database.list(SQL_WITH_SQL, [...filters, this.props.limit, this.props.index]);
        }
        else
        {
            return await this.database.list(SQL, [this.props.limit, this.props.index]);
        }
    }
}
