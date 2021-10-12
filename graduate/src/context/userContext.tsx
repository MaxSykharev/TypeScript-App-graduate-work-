import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getRequest } from '../utils';

interface IProps {
  children: JSX.Element;
};

interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: number,
      geo: {
        lat: number,
        lng: number
}
    }
}

interface IUserContext {
  users: IUser[];
};

export const UserContext = createContext<IUserContext>({
  users: [],
});

export const UserContextProvider = (props: IProps) => {
  const [users, setUsers] = useState<any>([]);
  const getUsers =  () => {
    getRequest('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data))
    .catch(error => console.log('error', error))    
  }
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <UserContext.Provider value={{ users }}>
      {props.children}
    </UserContext.Provider>
  )
};