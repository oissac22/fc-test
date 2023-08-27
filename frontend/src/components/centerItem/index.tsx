import style from './style.module.css'

interface ICenterItemProps {
    children: any
}

export function CenterItem({children}:ICenterItemProps)
{
    return <div className={style.container}>
        <div className={style.panel}>
            {children}
        </div>
    </div>
}