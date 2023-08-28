import { HeadHTML } from '../../components';
import { ProviderListUsers } from './ProviderListUsers';
import { TableList } from './TableList';

export function Home() {
    return (
        <>
            <HeadHTML titleValue='Início' />
            <p>Lista de usuário</p>
            <ProviderListUsers>
                <TableList />
            </ProviderListUsers>
        </>
    );
}

