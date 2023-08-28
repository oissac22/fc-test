import { ChildrenShow } from "./ChildrenShow";
import { BlockPage } from "./BlockPage";
import { LoginProvider } from "./LoginProvider";
import { LoginStart } from "./LoginStart";

interface ILoginProps {
    children:any
}

export function Login({ children }:ILoginProps)
{
    return <LoginProvider>
        <LoginStart />
        <ChildrenShow>{children}</ChildrenShow>
        <BlockPage />
    </LoginProvider>
}

