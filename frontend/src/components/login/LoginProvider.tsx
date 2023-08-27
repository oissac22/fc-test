import { createContext, useCallback, useContext, useState } from "react";
import { IIsLogged } from "../interfaces/IIsLogged";
import { Api } from "@/entities/api";
import { IUsersDataNoPassword } from "../interfaces/IModelUsers";

interface ILoginProviderData {
    logged: IIsLogged,
    verifyLogin: () => Promise<void>
}

const Context = createContext({} as ILoginProviderData);

export function LoginProvider({children}:any)
{
    const [logged, setLogged] = useState<IIsLogged>('not-verifyed');
    const [userData, setUserData] = useState<IUsersDataNoPassword | null>(null);
    const [error, setError] = useState<string>('');

    const verifyLogin = useCallback(async () => {
        Api.get('/api/v1/login')
            .then((userData) => {
                setUserData(userData);
                return setLogged('yes');
            }).catch((err) => {
                if (err.response?.status === 401)
                    return setLogged('no');
                setError(err.response?.data.error || err.response?.data || err.message)
            });
    },[])

    return <Context.Provider
        value={{
            logged, verifyLogin
        }}
    >
        {children}
    </Context.Provider>
}

export function useLoginProvider()
{
    return useContext(Context);
}