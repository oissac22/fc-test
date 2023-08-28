import {useCallback} from 'react'
import { useProviderListUsers } from "./ProviderListUsers";
import style from './style.module.css'

export function NavigatePage()
{
    const { load, page, listUsers, maxLimit } = useProviderListUsers();

    if (page === 0 && listUsers.length < maxLimit)
        return null;

    const handlePreview = useCallback(() => {
        if (page <= 0)
            return null;
        load({
            index: (page - 1) * maxLimit
        })
    },[page, load, maxLimit])

    const handleNext = useCallback(() => {
        if (maxLimit > listUsers.length)
            return;
        load({
            index: (page + 1) * maxLimit
        })
    },[maxLimit, listUsers, load])

    return <div className={style.NavigatePage}>
        <button onClick={handlePreview}>&lt;</button>
        <div>Página {page + 1}</div>
        <button onClick={handleNext}>&gt;</button>
    </div>
}
