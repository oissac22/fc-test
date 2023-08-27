import { useLoginProvider } from "./LoginProvider"

export function GetPassword()
{
    const { logged } = useLoginProvider();

    if(logged !== 'no')
        return null;

    return <div>
        Password
    </div>
}