import { HTMLAttributes } from 'react'
import style from './style.module.css'

interface ICenterItemProps extends HTMLAttributes<HTMLDivElement>{
    children: any
}

export function CenterItem({children, className, ...props}:ICenterItemProps)
{
    return <div className={style.container}>
        <div className={style.panel + ` ${className || ''}`} {...props}>
            {children}
        </div>
    </div>
}