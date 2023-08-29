import { useEffect, useRef, useCallback, useState } from 'react';
import { useProviderEditUser } from './ProviderEditUser';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import { InputData } from '../../components/InputData/InputData';
import { IUsersDataInsert } from '../../interfaces/IModelUsers';
import style from './style.module.css'
import { Api } from '../../entities/api';
import { InputDataAge, InputDataCPF, InputDataEmail, InputDataLogin, InputDataName, InputDataPassword, InputDataPhone } from '../../components/InputData';
import { SelectData } from '../../components/InputData/SelectData';

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

function updateUser(id:number | string, user:TDataWrite)
{
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

function deleteUser(id:number | string, navigate: NavigateFunction)
{
    Api.delete(`/api/v1/users/${id}`)
        .then(() => {
            window.alert("Usuário deletado com sucesso");
            navigate('/');
        }).catch((err) => {
            if (err.response?.status === 401)
                return;
            window.alert(err.response?.data?.error || err.response?.data || err.message);
        })
}

export function EditUserForm({  }:IEditUserFormProps)
{
    const {id} = useParams();
    const navigate = useNavigate();
    const { userData, loadData } = useProviderEditUser();
    const [refresh, setRefresh] = useState<number>(0);

    const { dateInsert, dateUpdate, status, ...dataInsertDefault } = userData;

    const data = useRef<TDataWrite>({ login:'', password:'', status:'active', passwordConfirm:'', ...dataInsertDefault});

    const required = !(id && id !== "_")

    useEffect(() => {
        const idNumber = Number(id || 0);
        if (idNumber)
            loadData(idNumber);
    }, [id])
    
    useEffect(() => {
        const { dateInsert, dateUpdate, ...dataInsertDefault } = userData;
        data.current = { login:'', password:'', passwordConfirm:'', ...dataInsertDefault};
        setRefresh(Math.random());
    },[userData])

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataWrite = {...data.current};
        if ( !adjustDataBeforeSubmit(dataWrite) )
            return;
        if (required) {
            insertUser(dataWrite, navigate);
        } else {
            updateUser(id, dataWrite);
        }
    },[required, id])

    const handleDelete = useCallback(() => {
        if (!confirm(`Deseja deletar este usuário?`))
            return;
        deleteUser(id || '', navigate)
    },[id, navigate])

    const title = required ? `Novo Usuário` : `Editar Usuário`;

    return <form onSubmit={handleSubmit} className={style.form}>
        <p>
            {title}
        </p>
        <InputDataName data={data} name="name" required={required} autoFocus />
        <InputDataEmail data={data} name="email" required={required} />
        <InputDataPhone data={data} name="phone" required={required} />
        <InputDataCPF data={data} name="cpf" required={required} />
        <InputDataAge data={data} name="age" required={required} />
        <InputData data={data} name="mather" style={{width:250}} />
        <SelectData
            data={data}
            name="status"
            style={{width:100}}
            required={required}
            itens={[["active", "Ativo"], ["inactive", "Inativo"], ["block", "Bloqueado"]]}
        />
        <InputDataLogin data={data} name="login" required={required} />
        <InputDataPassword data={data} name="password" required={required} />
        <InputDataPassword data={data} name="passwordConfirm" required={required} title="a confirmação de deve conter ao menos 6 digitos" />
        <div className={style.formButtons}>
            <button>Salvar</button>
            {
                required ? null :
                <button className='r' type='button' onClick={handleDelete}>Deletar</button>
            }
        </div>
    </form>
}

