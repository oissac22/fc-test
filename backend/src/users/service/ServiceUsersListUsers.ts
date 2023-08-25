import { IModelUsers, IUsersListFilter } from "../../interfaces/IModelUsers";
import { MAX_LIMIT } from ".";


export class ServiceUsersListUsers {

    constructor(
        private readonly props: IUsersListFilter,
        private readonly modelUsers: IModelUsers
    ) { }

    private verifyProps() {
        if (this.props.index < 0)
            this.props.index = 0;
        if (this.props.limit < 1)
            this.props.limit = 1;
        if (this.props.limit > MAX_LIMIT)
            this.props.limit = MAX_LIMIT;
    }

    result() {
        this.verifyProps();
        return this.modelUsers.listUsers(this.props);
    }

}
