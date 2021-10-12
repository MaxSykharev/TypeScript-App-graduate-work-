import React,  { useEffect, useState} from "react";
import { List, Avatar} from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { getRequest } from "../../utils";



interface IUser {
    id: number;
    name: string;
    email: string
};

export const UsersList = () => {
  const { users } = useContext(UserContext);
    return (
      <div>

     <div>{users.map(user => 
      <div key={user.id}>
       <h1>{user.name}</h1>
       <h2>{user.email}</h2>
       <h3>{user.id}</h3>
      </div>)}
      </div>
     </div> 
    )
      }

