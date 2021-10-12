import React, { useState, useEffect } from "react";
import { Table } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

export const Albums = () => {
    // const { user } = useContext(UserContext);
     const [album, setAlbum] = useState<any>(null);
    const getRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log('error', error))
        }
   useEffect(() => {
       getRequest()
     }, []);
    return (
       <div>
           {}
       </div>
    )
}