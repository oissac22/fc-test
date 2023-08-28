import { IInputDataProps } from '../../interfaces/IInputDataProps';
import { InputData } from './InputData';



export function InputDataEmail({ style, placeholder, title, ...props }: IInputDataProps) {
    return <InputData
        placeholder={placeholder || 'NOME'}
        style={{ width: 250, ...style }}
        pattern='\S+@\S+\.\S+'
        title={title || 'Digite um e-mail válido'}
        type='email'
        {...props} />;
}
