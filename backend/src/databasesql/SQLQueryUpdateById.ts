

export class SQLQueryUpdateById {
    constructor(
        private readonly id:string,
        private readonly table: string,
        private readonly attrs: { [key: string]: string | number; }
    ) { }

    private get validAttrs() {
        let props: { [key: string]: string | number; } = {};
        Object.entries(this.attrs).map(([key, value]) => {
            if (value !== '' && value !== null && value !== undefined) {
                props[key] = value;
            }
        });
        return {...props};
    }

    get sql(): string {
        const keys = Object.keys(this.validAttrs);
        return `update ${this.table} set ${keys.map(key => `${key}=?`).join(',')} where id=?`;
    }

    get propsValues(): (string | number)[] {
        const values = Object.values(this.validAttrs);
        return [...values, this.id];
    }
}
