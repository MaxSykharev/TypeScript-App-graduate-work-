import React from 'react';
import { createContext } from 'react';

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
  user: IUser | null;
};

export const UserContext = createContext<IUserContext>({
  user: null,
});

export const UserContextProvider = (props: IProps) => {
  const userInfo = localStorage.getItem('user');
  const user = userInfo !== null ? JSON.parse(userInfo) : null;
  return (
    <UserContext.Provider value={{ user: user }}>
      {props.children}
    </UserContext.Provider>
  )
};