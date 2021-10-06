import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";
import List from "./List";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const UsersPage:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useHistory();

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <List items={users} renderItem={(user: IUser)=>
            <UserItem key={user.id}
                      user={user}
                      onClick={(user)=>history.push('/users/'+user.id)}
            />}
        />
    );
};

export default UsersPage;