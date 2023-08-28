import { IInputDataProps } from '../../interfaces/IInputDataProps';
import { InputData } from './InputData';


export function InputDataPhone({ style, placeholder, title, ...props }: IInputDataProps) {
    return <InputData
        placeholder={placeholder || 'TELEFONE'}
        style={{ width: 120, ...style }}
        pattern='\d{10,}'
        title={title || 'Digite um telefone válido, apenas número'}
        type='tel'
        {...props} />;
}
