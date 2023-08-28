import { useEffect } from 'react';
import { useProviderListUsers } from './ProviderListUsers';
import style from './style.module.css';
import { ItemList } from './ItemList';

const MAX_LIST = 10;

export function TableList() {
    const { listUsers, load } = useProviderListUsers();

    useEffect(() => {
        load({ index: 0, limit: MAX_LIST });
    }, []);

    return <div className={style.listContainer}>
        <table className={style.list}>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>E-mail</th>
            </thead>
            <tbody>
                {listUsers.map(user => {
                    return <ItemList user={user} key={user.id} />;
                })}
            </tbody>
        </table>
    </div>;
}
