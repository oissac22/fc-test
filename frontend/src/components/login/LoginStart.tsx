import { useEffect } from "react";
import { useLoginProvider } from "./LoginProvider"

export function LoginStart()
{
    const { logged, verifyLogin } = useLoginProvider();

    useEffect(() => {
        if (logged === 'not-verifyed')
            verifyLogin();
    },[logged, verifyLogin])

    if(logged !== 'not-verifyed')
        return null;

    return <div>
        Iniciando...
    </div>
}