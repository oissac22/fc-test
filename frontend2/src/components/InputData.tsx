import { useCallback, InputHTMLAttributes } from 'react';

interface IInputDataProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    data: { current:{[key:string]:any} }
}

export function InputData({ onChange, name, data, ...props }:IInputDataProps)
{
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange)
            onChange(e);
        if (data?.current)
            data.current[name] = e.target.value;
    },[onChange, name])

    return <input
        onChange={handleChange}
        defaultValue={data?.current ? data.current[name] : ''}
        {...props}
    />
}