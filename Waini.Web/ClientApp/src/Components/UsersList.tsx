import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../Actions/userActions';
import { RootState } from '../Reducers/rootReducer';
import { AppDispatch } from '../Stores/store';

const UserList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.user.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = (id: number) => {
        dispatch(deleteUser(id));
    };

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.name}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
