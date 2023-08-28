import { useCallback } from 'react';
import { IUsersDataList } from '../../interfaces/IModelUsers';
import { useNavigate } from 'react-router-dom';


export function ItemList({ user }: { user: IUsersDataList; }) {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate(`/user/edit/${user.id}`);
    }, [user.id]);

    return <tr onClick={handleClick}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
    </tr>;
}
