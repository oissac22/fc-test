import { IInputDataProps } from '../../interfaces/IInputDataProps';
import { InputData } from './InputData';

export function InputDataName({ style, placeholder, title, ...props }: IInputDataProps) {
    return <InputData
        placeholder={placeholder || 'NOME'}
        style={{ width: 250, ...style }}
        pattern='.*\S{2,}.*'
        title={title || 'Digite um nome válido'}
        {...props}
    />;
}