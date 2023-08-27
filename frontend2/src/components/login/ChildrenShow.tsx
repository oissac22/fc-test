import { Template } from "../Template";
import { useLoginProvider } from "./LoginProvider";

interface IChildrenProps {
    children:any
}

export function ChildrenShow({children}:IChildrenProps) {
    const { logged } = useLoginProvider();

    if (logged !== "yes")
        return null;

    return <Template>
        {children}
    </Template>;
}
