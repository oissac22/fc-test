import { useEffect } from "react";
import { useLoginProvider } from "./LoginProvider"
import { CenterItem } from "../centerItem";

export function LoginStart()
{
    const { logged, verifyLogin } = useLoginProvider();

    useEffect(() => {
        if (logged === 'not-verifyed')
            verifyLogin();
    },[logged, verifyLogin])

    if(logged !== 'not-verifyed')
        return null;

    return <CenterItem>
        Iniciando...
    </CenterItem>
}