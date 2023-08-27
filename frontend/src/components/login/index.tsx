import { createContext, useCallback, useContext, useState } from "react";
import { IIsLogged } from "../interfaces/IIsLogged";

interface ILoginProviderData {

}

const Context = createContext({} as ILoginProviderData);

export function LoginProvider({children}:any)
{
    const [Logged, setLogged] = useState<IIsLogged>('not-verifyed');

    const verifyLogin = useCallback(async () => {

    },[])

    return <Context.Provider
        value={{

        }}
    >
        {children}
    </Context.Provider>
}

export function useLoginProvider()
{
    return useContext(Context);
}