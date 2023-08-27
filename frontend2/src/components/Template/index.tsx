import { Link } from 'react-router-dom'
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
            <Link to="/">HOME</Link>
            <Link to="/about">SOBRE</Link>
        </div>
    </div>
}