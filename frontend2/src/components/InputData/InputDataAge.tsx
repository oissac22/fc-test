import { IInputDataProps } from '../../interfaces/IInputDataProps';
import { InputData } from './InputData';


export function InputDataAge({ style, placeholder, title, ...props }: IInputDataProps) {
    return <InputData
        placeholder={placeholder || 'NASCIMENTO'}
        style={{ width: 120, ...style }}
        pattern='\d{11}'
        type='date'
        {...props} />;
}
