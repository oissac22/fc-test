import { createContext, useCallback, useContext, useState } from "react";
import { IIsLogged } from "../interfaces/IIsLogged";

interface ILoginProviderData {
    logged: IIsLogged,
    verifyLogin: () => Promise<void>
}

const Context = createContext({} as ILoginProviderData);

export function LoginProvider({children}:any)
{
    const [logged, setLogged] = useState<IIsLogged>('not-verifyed');

    const verifyLogin = useCallback(async () => {

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