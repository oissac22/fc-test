

export class SQLQueryInsert {
    constructor(
        private readonly table: string,
        private readonly attrs: { [key: string]: string | number; }
    ) { }

    private get validAttrs() {
        let props: { [key: string]: string | number; } = {};
        Object.entries(this.attrs).map(([key, value]) => {
            if (value !== null && value !== undefined) {
                props[key] = value;
            }
        });
        return props;
    }

    get sql(): string {
        const keys = Object.keys(this.validAttrs);
        return `insert into ${this.table} (${keys.join(',')}) values (${keys.fill('?').join(',')})`;
    }

    get propsValues(): (string | number)[] {
        const values = Object.values(this.validAttrs);
        return values;
    }
}
