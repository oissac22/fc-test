import { useCallback } from 'react';
import { IInputDataProps } from '../../interfaces/IInputDataProps';


export function InputData({ onChange, name, data, ...props }: IInputDataProps) {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange)
            onChange(e);
        if (data?.current)
            data.current[name] = e.target.value;
    }, [onChange, name]);

    return <input
        onChange={handleChange}
        defaultValue={data?.current ? data.current[name] : ''}
        {...props} />;
}
