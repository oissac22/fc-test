import { useCallback } from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'

export function NewUser()
{
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate('/user/edit/_')
    },[navigate])

    return <div className={style.NewUser}>
        <button className='a' onClick={handleClick}>
            Adicionar usuário
        </button>
    </div>;
}
