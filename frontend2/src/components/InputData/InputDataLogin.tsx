import { IInputDataProps } from '../../interfaces/IInputDataProps';
import { InputData } from './InputData';


export function InputDataLogin({ style, placeholder, title, ...props }: IInputDataProps) {
    return <InputData
        placeholder={placeholder || 'LOGIN'}
        style={{ width: 120, ...style }}
        pattern='\w{2,}'
        title={title || 'O login deve conter ao menos 2 digitos'}
        {...props} />;
}
