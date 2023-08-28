import { HeadHTML } from '../../components';
import { Filter } from './Filter';
import { NavigatePage } from './NavigatePage';
import { NewUser } from './NewUser';
import { ProviderListUsers } from './ProviderListUsers';
import { TableList } from './TableList';
import style from './style.module.css'

export function Home() {
    return (
        <>
            <HeadHTML titleValue='Início' />
            <p>Lista de usuário</p>
            <ProviderListUsers>
                <Filter />
                <NavigatePage />
                <TableList />
                <div className={style.finalList}>
                    <NavigatePage />
                    <NewUser />
                </div>
            </ProviderListUsers>
        </>
    );
}