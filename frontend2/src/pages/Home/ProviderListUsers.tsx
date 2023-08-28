import { createContext, useContext, useState, useCallback } from "react"
import { IUsersDataList, IUsersListFilter, IUsersListFilterNoLimit } from "../../interfaces/IModelUsers";
import { Api } from "../../entities/api";

const LIMIT = 10;

interface IProviderListUsersProps {
    listUsers: IUsersDataList[],
    load: (props: IUsersListFilter) => void,
    page: number
}

const Context = createContext({} as IProviderListUsersProps);

export function ProviderListUsers({children}:any)
{
    const [listUsers, setListUsers] = useState<IUsersDataList[]>([]);
    const [loadding, setLoadding] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);

    const load = useCallback((props:IUsersListFilterNoLimit) => {
        if (loadding)
            return;
        setPage(props.index / LIMIT);
        setLoadding(true);
        Api.get(`/api/v1/users?index=${props.index}&limit=${LIMIT}&filter=${props.filter || ''}`)
            .then((result) => {
                setListUsers(result)
            }).catch((err) => {
                window.alert(err.response?.data?.error || err.response?.data || err.message);
            }).finally(() => {
                setLoadding(false);
            });
    },[loadding])

    return <Context.Provider
        value={{
            listUsers,
            load,
            page
        }}
    >
        {children}
    </Context.Provider>
}

export function useProviderListUsers()
{
    return useContext(Context);
}