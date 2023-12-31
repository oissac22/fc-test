import { FormEvent, useCallback, useRef, useState } from "react";
import { CenterItem } from "../centerItem";
import { useLoginProvider } from "./LoginProvider";
import style from './style.module.css';
import { Api } from "../../entities/api";
import { TData, TDataKeys } from "./BlockPage";
import { useNavigate } from "react-router-dom";


export function GetPassword() {
    const navigate = useNavigate();

    const { logged } = useLoginProvider();
    const data = useRef<TData>({ login: '', password: '' });
    const [loadding, setLoadding] = useState<boolean>(false);

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        if (loadding)
            return;
        setLoadding(true);
        e.preventDefault();
        Api.post('/api/v1/login', data.current)
            .then((data) => {
                Api.key = data.key;
                document.location.reload();
            }).catch((err) => {
                if (err.response?.status !== 401)
                    window.alert(err.response?.data?.error || err.response?.data || err.message);
            }).finally(() => {
                setLoadding(false);
            });
    }, [loadding]);

    const onChange = useCallback((name: TDataKeys) => {
        return (e: any) => {
            data.current[name] = e.target.value;
        };
    }, []);

    const handleRecoverPassword = useCallback(() => {
        navigate('/recover')
    }, [navigate])

    if (logged !== 'no')
        return null;

    const buttonConfirmCaption = loadding ? 'Enviando...' : 'Acessar';

    return <CenterItem>
        <form className={style.password} onSubmit={handleSubmit}>
            <input placeholder="LOGIN" autoFocus required pattern="\w{2,}" title="deve ter ao menos dois caracteres" onChange={onChange('login')} />
            <input placeholder="SENHA" type="password" required pattern="\w{6,}" title="deve ter ao menos 6 caracteres" onChange={onChange('password')} />
            <button title="acessar o sistema">
                {buttonConfirmCaption}
            </button>
            <button className="a" title="Clique aqui se estiver esquecido sua senha" type="button" onClick={handleRecoverPassword}>
                Esqueci a senha
            </button>
        </form>
    </CenterItem>;
}
