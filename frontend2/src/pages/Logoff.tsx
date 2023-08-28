import { useEffect } from "react";
import { CenterItem } from "../components/centerItem";
import { Api } from "../entities/api";
import { useLoginProvider } from "../components/login/LoginProvider";
import { useNavigate } from 'react-router-dom'
import { HeadHTML } from "../components";

export function Logoff()
{
    const { verifyLogin } = useLoginProvider();
    const navigate = useNavigate();

    useEffect(() => {
        Api.delete('/api/v1/login')
            .then(() => {
                Api.key = '';
                verifyLogin();
                navigate('/');
            }).catch((err) => {
                if(err.response?.status !== 401)
                    window.alert(err.response?.data?.error ||err.response?.data || err.message)
            });
    },[])

    return <CenterItem>
        <HeadHTML titleValue='Saindo...' />
        Saindo...
    </CenterItem>
}