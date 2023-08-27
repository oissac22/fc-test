import { useEffect, useCallback } from "react";
import { useLoginProvider } from "./LoginProvider"
import { CenterItem } from "../centerItem";

export function LoginStart()
{
    const { logged, verifyLogin } = useLoginProvider();

    useEffect(() => {
        if (logged === 'not-verifyed')
            verifyLogin();
    },[logged])

    if(logged !== 'not-verifyed')
        return null;

    return <CenterItem>
        Iniciando...
    </CenterItem>
}