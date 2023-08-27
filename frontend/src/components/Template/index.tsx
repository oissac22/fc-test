import Link from "next/link"
import style from './style.module.css'

interface ITemplateProps {
    children:any
}

export function Template({ children }:ITemplateProps)
{
    return <div className={style.container}>
        <Menu />
        <div className={style.areaPanel}>
            <div className={style.area}>
                {children}
            </div>
        </div>
    </div>
}

function Menu()
{
    return <div className={style.menuPanel}>
        <div className={style.menu}>
            <Link href="/">HOME</Link>
            <Link href="/about">SOBRE</Link>
        </div>
    </div>
}