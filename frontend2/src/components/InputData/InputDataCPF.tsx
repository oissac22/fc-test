import { IInputDataProps } from '../../interfaces/IInputDataProps';
import { InputData } from './InputData';


export function InputDataCPF({ style, placeholder, title, ...props }: IInputDataProps) {
    return <InputData
        placeholder={placeholder || 'CPF'}
        style={{ width: 100, ...style }}
        pattern='\d{11}'
        title={title || 'Digite um cpf válido, apenas número'}
        type='tel'
        {...props}
    />;
}
