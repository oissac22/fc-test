import { createContext, useContext, useState, useCallback } from "react"
import { IUsersDataList, IUsersListFilterNoLimit } from "../../interfaces/IModelUsers";
import { Api } from "../../entities/api";

const LIMIT = 2;

interface IProviderListUsersProps {
    listUsers: IUsersDataList[],
    load: (props: IUsersListFilterNoLimit) => void,
    page: number,
    maxLimit:number,
    loadding: boolean
}

const Context = createContext({} as IProviderListUsersProps);

export function ProviderListUsers({children}:any)
{
    const [listUsers, setListUsers] = useState<IUsersDataList[]>([]);
    const [loadding, setLoadding] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);

    const maxLimit = LIMIT;

    const load = useCallback((props:IUsersListFilterNoLimit) => {
        if (loadding)
            return;
        setPage(props.index / LIMIT);
        setLoadding(true);
        return Api.get(`/api/v1/users?index=${props.index}&limit=${LIMIT}&filter=${props.filter || ''}`)
            .then((result) => {
                setListUsers(result)
            }).catch((err) => {
                if(err.response?.status !== 401)
                    window.alert(err.response?.data?.error || err.response?.data || err.message);
            }).finally(() => {
                setLoadding(false);
            });
    },[loadding])

    return <Context.Provider
        value={{
            listUsers,
            load,
            page,
            maxLimit,
            loadding
        }}
    >
        {children}
    </Context.Provider>
}

export function useProviderListUsers()
{
    return useContext(Context);
}