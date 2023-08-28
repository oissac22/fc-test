import { IInputDataProps } from '../../interfaces/IInputDataProps';
import { InputData } from './InputData';


export function InputDataPassword({ style, placeholder, title, ...props }: IInputDataProps) {
    return <InputData
        placeholder={placeholder || 'SENHA'}
        style={{ width: 150, ...style }}
        pattern='\w{6,}'
        title={title || 'a senha deve conter ao menos 6 digitos'}
        type='password'
        {...props} />;
}
