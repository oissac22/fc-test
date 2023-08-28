import {InputHTMLAttributes} from 'react'

export interface IInputDataProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    data: { current: { [key: string]: any; }; };
}
