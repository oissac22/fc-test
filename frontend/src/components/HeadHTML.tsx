import Head from "next/head"

interface IHeadHTMLProps {
    title?:string
}

export function HeadHTML({ title }:IHeadHTMLProps)
{
    return <Head>
        <title>
            Usuários{ title ? ` - ${title}` : '' }
        </title>
        <meta name="description" content="Administrador de usuários" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
}