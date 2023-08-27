import { useEffect } from 'react'


interface IHeadHTMLProps {
    titleValue?:string
}

export function HeadHTML({ titleValue }:IHeadHTMLProps)
{
    useEffect(() => {
        const realTitle = `Usuários${ titleValue ? ` - ${titleValue}` : '' }`;
        document.title = realTitle;
    },[titleValue])

    return null;
}