

export class SQLQueryDeleteById {
    constructor(
        private readonly id:string,
        private readonly table: string
    ) { }

    get sql(): string {
        return `delete from ${this.table} where id=?`;
    }

    get propsValues(): (string | number)[] {
        return [this.id];
    }
}
