import { useEffect } from 'react';
import { useProviderListUsers } from './ProviderListUsers';
import style from './style.module.css';
import { ItemList } from './ItemList';

export function TableList() {
    const { listUsers, load } = useProviderListUsers();

    useEffect(() => {
        load({ index: 0 });
    }, []);

    return <div className={style.listContainer}>
        <table className={style.list}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                {listUsers.map(user => {
                    return <ItemList user={user} key={user.id} />;
                })}
            </tbody>
        </table>
    </div>;
}
