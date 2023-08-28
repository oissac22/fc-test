import { HeadHTML } from '../../components';
import { Filter } from './Filter';
import { NavigatePage } from './NavigatePage';
import { NewUser } from './NewUser';
import { ProviderListUsers } from './ProviderListUsers';
import { TableList } from './TableList';

export function Home() {
    return (
        <>
            <HeadHTML titleValue='Início' />
            <p>Lista de usuário</p>
            <ProviderListUsers>
                <Filter />
                <NavigatePage />
                <TableList />
                <NewUser />
                <NavigatePage />
            </ProviderListUsers>
        </>
    );
}