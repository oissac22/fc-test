import { createContext, useCallback, useContext, useState } from "react";
import { IUsersDataNoPassword } from "../../interfaces/IModelUsers";
import { Api } from "../../entities/api";

const DEFAULT_DATA:IUsersDataNoPassword = {
    age: new Date(0),
    cpf: '',
    dateInsert: new Date(0),
    dateUpdate: new Date(0),
    email: '',
    id: 0,
    mather: '',
    name: '',
    phone: '',
    status: 'active'
}

interface IProviderEditUserProps {
    userData: IUsersDataNoPassword,
    loadData: (id: number) => void
}

const Context = createContext({} as IProviderEditUserProps);

export function ProviderEditUser( {children}: { children:any } )
{
    const [userData, setUserData] = useState<IUsersDataNoPassword>(DEFAULT_DATA);
    const [loadding, setLoadding] = useState<boolean>(false);

    const loadData = useCallback((id:number) => {
        if (loadding)
            return;
        setLoadding(true);
        Api.get(`/api/v1/users/${id}`)
            .then((result) => {
                setUserData(result);
            }).catch((err) => {
                if (err.response?.status === 401)
                    return;
                window.alert(err.response?.data?.error || err.response?.data || err.message);
            }).finally(() => {
                setLoadding(false);
            });
    }, [loadding])

    return <Context.Provider
        value={{
           loadData,
           userData
        }}
    >
        {children}
    </Context.Provider>
}

export function useProviderEditUser()
{
    return useContext(Context)
}