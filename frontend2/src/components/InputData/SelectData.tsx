import { useCallback } from 'react';
import { ISelectDataProps } from '../../interfaces/ISelectDataProps';


export function SelectData({ onChange, name, data, itens, ...props }: ISelectDataProps) {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange)
            onChange(e);
        if (data?.current)
            data.current[name] = e.target.value;
    }, [onChange, name]);

    const startValue = data?.current ? data.current[name] : ''

    if (itens)
        return <select
        onChange={handleChange}
        {...props}
    >
        {
            itens.map((item, idx) => {
                const data = typeof item === 'string' ?
                    [item, item] :
                    item;
                return <option value={data[0]} selected={data[0] === startValue} key={idx}>
                    {data[1]}
                </option>
            })
        }
    </select>

    return <select
        onChange={handleChange}
        {...props}
    />;
}
