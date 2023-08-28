import { HeadHTML } from "../components";
import { CenterItem } from "../components/centerItem";

export function About()
{
    return <CenterItem>
        <HeadHTML titleValue='Sobre' />
        <p>Sobre</p>
        <div>
            Um exemplo de segunda página representando o SOBRE.
        </div>
    </CenterItem>
}