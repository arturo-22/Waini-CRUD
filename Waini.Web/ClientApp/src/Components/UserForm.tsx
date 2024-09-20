import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addUser, updateUser } from '../Actions/userActions';
import { AppDispatch, RootState } from '../Stores/store';
import { User } from '../Common/UserCommon';

const UserForm: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users.users);
    const [name, setName] = useState('');

    useEffect(() => {
        if (id) {
            const user = users.find(user => user.id === Number(id));
            if (user) {
                setName(user.name);
            }
        }
    }, [id, users]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            dispatch(updateUser({ id: Number(id), name } as User));
        } else {
            dispatch(addUser({ name } as User));
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <button type="submit">{id ? 'Update' : 'Add'} User</button>
        </form>
    );
};

export default UserForm;
