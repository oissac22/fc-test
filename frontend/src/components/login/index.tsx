import { ChildrenShow } from "./ChildrenShow";
import { GetPassword } from "./GetPassword";
import { LoginProvider } from "./LoginProvider";
import { LoginStart } from "./LoginStart";

interface ILoginProps {
    children:any
}

export function Login({ children }:ILoginProps)
{
    return <LoginProvider>
        <LoginStart />
        <ChildrenShow children={{children}} />
        <GetPassword />
    </LoginProvider>
}

