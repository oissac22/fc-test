import { useEffect, useRef, useCallback } from 'react';
import { useProviderEditUser } from './ProviderEditUser';
import { useParams } from 'react-router-dom';
import { InputData } from '../../components/InputData';
import { IUsersDataInsert, IUsersDataNoPassword } from '../../interfaces/IModelUsers';
import style from './style.module.css'

interface IEditUserFormProps {
}
export function EditUserForm({  }:IEditUserFormProps)
{
    const {id} = useParams();
    const { userData, loadData } = useProviderEditUser();

    const { dateInsert, dateUpdate, status, ...dataInsertDefault } = userData;

    const data = useRef<IUsersDataInsert>({ login:'', password:'', status:'active', ...dataInsertDefault});

    const required = !(id && id !== "_")

    useEffect(() => {
        const idNumber = Number(id || 0);
        if (idNumber)
            loadData(idNumber);
    }, [id])
    
    useEffect(() => {
        const { dateInsert, dateUpdate, status, ...dataInsertDefault } = userData;
        console.log('userData :>> ', userData);
        data.current = { login:'', password:'', status:'active', ...dataInsertDefault};
    },[userData])

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('data :>> ', data.current);
    },[])

    return <form onSubmit={handleSubmit} className={style.form}>
        <p>
            {
                id ? `Editar Usuário` : `Novo Usuário`
            }
        </p>
        <InputData data={data} name="name" placeholder='Nome' style={{width:250}} required={required} pattern='\S{2,}' title='Digite um nome válido' autoFocus />
        <InputData data={data} name="email" placeholder='E-mail' type='email' style={{width:250}} required={required} title='Digite um e-mail válido' pattern='\S+@\S+\.\S+' />
        <InputData data={data} name="phone" placeholder='Telefone' type='tel' style={{width:120}} required={required} pattern='\d{10,}' title='Digite um telefone válido' />
        <InputData data={data} name="cpf" placeholder='CPF' style={{width:100}} required={required}  pattern='\d{11}' title='Digite um cpf válido' />
        <InputData data={data} name="age" placeholder='Nascimento' type='date' style={{width:120}} required={required} />
        <InputData data={data} name="mather" placeholder='Mãe' style={{width:250}} />
        <InputData data={data} name="status" placeholder='Status' style={{width:100}} required={required}  />
        <InputData data={data} name="login" placeholder='Login'  style={{width:120}} required={required} pattern='\w{2,}' title="O login deve conter ao menos 2 digitos" />
        <InputData data={data} name="password" placeholder='Senha' type='password'  style={{width:150}} required={required} pattern='\w{6,}' title="a senha deve conter ao menos 6 digitos" />
        <InputData data={data} name="passwordConfirm" placeholder='Confirme a senha' type='password' style={{width:150}} required={required} pattern='\w{6,}' title="a confirmação de deve conter ao menos 6 digitos" />
        <div className={style.formButtons}>
            <button>Salvar</button>
            <button className='r' type='button'>Deletar</button>
        </div>
    </form>
}