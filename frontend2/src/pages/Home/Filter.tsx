import { useCallback, useRef, useState } from 'react'
import { useProviderListUsers } from './ProviderListUsers';
import style from './style.module.css'

const TIME_SEARCH = 1000;

export function Filter()
{
    const { load, loadding } = useProviderListUsers();
    const time = useRef<NodeJS.Timeout>();

    const handleFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (time.current)
            clearTimeout(time.current);
        time.current = setTimeout(() => {
            load({ index:0, filter: e.target.value })
        }, TIME_SEARCH)
    },[load])

    const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        const target:any = e.target;
        if (e.key === 'Escape' && target.value)
        {
            load({ index:0, filter: '' });
            target.value = '';
        }
    },[load])

    return <div className={style.filter}>
        <input placeholder='PESQUISAR' autoFocus onChange={handleFilter} onKeyUp={handleKeyUp} disabled={loadding} />
    </div>;
}
