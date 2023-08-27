import Head from "next/head"

interface IHeadHTMLProps {
    titleValue?:string
}

export function HeadHTML({ titleValue }:IHeadHTMLProps)
{
    const realTitle = `Usuários${ titleValue ? ` - ${titleValue}` : '' }`;
    return <Head>
        <title>
            {realTitle}
        </title>
        <meta name="description" content="Administrador de usuários" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
}