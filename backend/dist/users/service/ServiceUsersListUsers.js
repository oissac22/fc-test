"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUsersListUsers = void 0;
const _1 = require(".");
class ServiceUsersListUsers {
    props;
    modelUsers;
    constructor(props, modelUsers) {
        this.props = props;
        this.modelUsers = modelUsers;
    }
    verifyProps() {
        if (this.props.index < 0)
            this.props.index = 0;
        if (this.props.limit < 1)
            this.props.limit = 1;
        if (this.props.limit > _1.MAX_LIMIT)
            this.props.limit = _1.MAX_LIMIT;
    }
    result() {
        this.verifyProps();
        return this.modelUsers.listUsers(this.props);
    }
}
exports.ServiceUsersListUsers = ServiceUsersListUsers;
