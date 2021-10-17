import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { ALBUMS_ENDPOINT, USERS_ENDPOINT } from '../constants/endpoints';
import { getRequest } from '../utils';

export interface IProps {
  children: JSX.Element;
};

export interface IUser {
    id: number,
    name: string,
    username: string,
    phone:number,
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

export interface IUserContext {
  users: IUser[];
};

export const UserContext = createContext<IUserContext>({
  users: [],
});

export const UserContextProvider = (props: IProps) => {
  const [users, setUsers] = useState<any>([]);
  const getUsers =  () => {
    getRequest(USERS_ENDPOINT)
    .then(res => setUsers(res.data))
    .catch(error => console.log('error', error))    
  }
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <UserContext.Provider value={{ users}}>
      {props.children}
    </UserContext.Provider>
  )
};


