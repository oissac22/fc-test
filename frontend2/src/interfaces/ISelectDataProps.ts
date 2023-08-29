import {SelectHTMLAttributes} from 'react'

export interface ISelectDataProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    data: { current: { [key: string]: any; }; };
    itens?: (string | [string, string])[]
}
