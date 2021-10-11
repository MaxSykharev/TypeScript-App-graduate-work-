import React, { useState, useEffect } from "react";
import { Table } from 'antd';


export const Albums = () => {
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
       < Table />
    )
}