import { useEffect, useRef, useCallback } from 'react';
import { useProviderEditUser } from './ProviderEditUser';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import { InputData } from '../../components/InputData';
import { IUsersDataInsert } from '../../interfaces/IModelUsers';
import style from './style.module.css'
import { Api } from '../../entities/api';

type TDataWrite = IUsersDataInsert & {passwordConfirm?:string};

interface IEditUserFormProps {
}

function adjustDataBeforeSubmit(data:TDataWrite)
{
    if (data.password !== data.passwordConfirm)
    {
        window.alert(`A senha esta diferente da confirmação de senha`);
        return false;
    }
    data.age = new Date(data.age);
    data.cpf = data.cpf.replace(/\D+/,'');
    data.email = data.email.trim();
    data.login = data.login.trim();
    data.mather = data.mather.trim();
    data.password = data.password.trim();
    data.phone = data.phone.trim();
    return true;
}

function updateUser(id:number, user:TDataWrite)
{
    console.log('user :>> ', user);
    Api.put(`/api/v1/users/${id}`, user)
        .then(() => {
            window.alert(`Usuário atualizado com sucesso`);
        }).catch((err) => {
            if (err.response?.status === 401)
                return;
            window.alert(err.response?.data?.error || err.response?.data || err.message);
        });
}

function insertUser(user:TDataWrite, navigate: NavigateFunction)
{
    Api.post(`/api/v1/users`, user)
        .then(result => {
            window.alert(`Usuário adicionado com sucesso`);
            navigate(`/user/edit/${result.id}`);
        }).catch((err) => {
            if (err.response?.status === 401)
                return;
            window.alert(err.response?.data?.error || err.response?.data || err.message);
        });
}

export function EditUserForm({  }:IEditUserFormProps)
{
    const {id} = useParams();
    const navigate = useNavigate();
    const { userData, loadData } = useProviderEditUser();

    const { dateInsert, dateUpdate, status, ...dataInsertDefault } = userData;

    const data = useRef<TDataWrite>({ login:'', password:'', status:'active', passwordConfirm:'', ...dataInsertDefault});

    const required = !(id && id !== "_")

    useEffect(() => {
        const idNumber = Number(id || 0);
        if (idNumber)
            loadData(idNumber);
    }, [id])
    
    useEffect(() => {
        const { dateInsert, dateUpdate, status, ...dataInsertDefault } = userData;
        data.current = { login:'', password:'', status:'active', passwordConfirm:'', ...dataInsertDefault};
    },[userData])

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataWrite = {...data.current};
        if ( !adjustDataBeforeSubmit(dataWrite) )
            return;
        if (required) {
            insertUser(dataWrite, navigate);
        } else {
            updateUser(Number(id), dataWrite);
        }
    },[required, id])

    const title = required ? `Novo Usuário` : `Editar Usuário`;

    return <form onSubmit={handleSubmit} className={style.form}>
        <p>
            {title}
        </p>
        <InputData data={data} name="name" placeholder='Nome' style={{width:250}} required={required} pattern='.*\S{2,}.*' title='Digite um nome válido' autoFocus />
        <InputData data={data} name="email" placeholder='E-mail' type='email' style={{width:250}} required={required} title='Digite um e-mail válido' pattern='\S+@\S+\.\S+' />
        <InputData data={data} name="phone" placeholder='Telefone' type='tel' style={{width:120}} required={required} pattern='\d{10,}' title='Digite um telefone válido, apenas número' />
        <InputData data={data} name="cpf" placeholder='CPF' style={{width:100}} required={required}  pattern='\d{11}' title='Digite um cpf válido, apenas número' />
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