import { useCallback, useRef } from 'react'
import { CenterItem } from "../../centerItem";
import { InputData } from '../../InputData/InputData';
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';
import { InputDataCPF, InputDataEmail, InputDataLogin, InputDataPassword } from '../../InputData';

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
    
    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { confirmPassword, cpf, newPassword, newLogin } = data.current;
        if (newPassword !== confirmPassword)
            return alert(`A senha está diferente da confirmação de senha`);
        const dataSend:TDataRecoverPasswordSend = { cpf, newLogin, newPassword }
        console.log('dataSend :>> ', dataSend);
    },[])

    const handleCancel = useCallback(() => {
        navigate('/')
    },[navigate])

    return <CenterItem>
        <p>Recuperar senha</p>
        <form onSubmit={handleSubmit} className={style.container}>
            <InputDataCPF data={data} name='cpf' placeholder='CPF' required autoFocus style={{width:'auto'}} />
            <InputDataLogin data={data} name='newLogin' placeholder='LOGIN' required style={{width:'auto'}} />
            <InputDataPassword data={data} name='newPassword' placeholder='SENHA' required style={{width:'auto'}} />
            <InputDataPassword data={data} name='confirmPassword' placeholder='NOVA SENHA' required style={{width:'auto'}} />
            <div className={style.buttons}>
                <button>
                    Alterar senha
                </button>
                <button type='button' onClick={handleCancel}>
                    Cancelar
                </button>
            </div>
        </form>
    </CenterItem>;
}
