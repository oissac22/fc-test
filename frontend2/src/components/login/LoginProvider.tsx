import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { IIsLogged } from "../interfaces/IIsLogged";
import { Api } from "../../entities/api";
import { IUsersDataNoPassword } from "../interfaces/IModelUsers";

interface ILoginProviderData {
    logged: IIsLogged,
    verifyLogin: () => Promise<void>,
    userData: IUsersDataNoPassword | null,
    error: string
}

const Context = createContext({} as ILoginProviderData);

export function LoginProvider({children}:any)
{
    const [logged, setLogged] = useState<IIsLogged>('not-verifyed');
    const [userData, setUserData] = useState<IUsersDataNoPassword | null>(null);
    const [error, setError] = useState<string>('');
    const [loadding, setLoadding] = useState<boolean>(false);

    useEffect(() => {
        if(error)
            console.log('error :>> ', error);
    },[error])

    const verifyLogin = useCallback(async () => {
        if (loadding)
            return;
        setLoadding(true);
        setError('');
        Api.get('/api/v1/login')
            .then((data) => {
                setUserData(data);
                return setLogged('yes');
            }).catch((err) => {
                if (err.status === 401)
                    return setLogged('no');
                setError(err.message)
            }).finally(() => {
                setLoadding(false);
            });
    },[loadding])

    return <Context.Provider
        value={{
            logged, verifyLogin, userData, error
        }}
    >
        {children}
    </Context.Provider>
}

export function useLoginProvider()
{
    return useContext(Context);
}