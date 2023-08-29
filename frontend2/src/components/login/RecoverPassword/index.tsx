import { useCallback, useRef, useState } from 'react'
import { CenterItem } from "../../centerItem";
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';
import { InputDataCPF, InputDataLogin, InputDataPassword } from '../../InputData';
import { Api } from '../../../entities/api';

export type TDataRecoverPassword = {
    cpf: string,
    newLogin: string,
    newPassword: string,
    confirmPassword: string,
}

export type TDataRecoverPasswordSend = Omit<TDataRecoverPassword, "confirmPassword">;

export function RecoverPassword() {
    const navigate = useNavigate();
    const data = useRef<TDataRecoverPassword>({ confirmPassword: '', cpf: '', newPassword: '', newLogin: '' });

    const [loadding, setLoadding] = useState<boolean>(false);
    
    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loadding)
            return;
        const { confirmPassword, cpf, newPassword, newLogin } = data.current;
        if (newPassword !== confirmPassword)
            return alert(`A senha está diferente da confirmação de senha`);
        setLoadding(true);
        const dataSend = { cpf, login:newLogin, password:newPassword }
        Api.post(`/api/v1/users/recoverpassword`, dataSend)
            .then(() => {
                window.alert(`login e senha atualizados com sucesso`);
                navigate('/');
            }).catch((err) => {
                window.alert(err.response?.data?.error || err.response?.data || err.message);
            }).finally(() => {
                setLoadding(false);
            });
    },[navigate, loadding])

    const handleCancel = useCallback(() => {
        navigate('/')
    },[navigate])

    const titleButtonUpdate = loadding ? `Processando...` : `Alterar senha`;

    return <CenterItem>
        <p>Recuperar senha</p>
        <form onSubmit={handleSubmit} className={style.container}>
            <InputDataCPF data={data} name='cpf' placeholder='CPF' required autoFocus style={{width:'auto'}} />
            <InputDataLogin data={data} name='newLogin' placeholder='LOGIN' required style={{width:'auto'}} />
            <InputDataPassword data={data} name='newPassword' placeholder='SENHA' required style={{width:'auto'}} />
            <InputDataPassword data={data} name='confirmPassword' placeholder='NOVA SENHA' required style={{width:'auto'}} />
            <div className={style.buttons}>
                <button>
                    {titleButtonUpdate}
                </button>
                {
                    loadding ? null :
                    <button type='button' onClick={handleCancel}>
                        Cancelar
                    </button>
                }
            </div>
        </form>
    </CenterItem>;
}
