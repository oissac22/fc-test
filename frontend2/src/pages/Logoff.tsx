import { useEffect } from "react";
import { CenterItem } from "../components/centerItem";
import { Api } from "../entities/api";
import { useLoginProvider } from "../components/login/LoginProvider";
import { useNavigate } from 'react-router-dom'

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
                window.alert(err.response?.data || err.message)
            });
    },[])

    return <CenterItem>
        Saindo...
    </CenterItem>
}