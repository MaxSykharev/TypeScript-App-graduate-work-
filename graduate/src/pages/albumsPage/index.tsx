import React, { useState, useEffect, useContext, createContext } from "react";
import { getRequest } from "../../utils";
import './styles.scss'
import { UserContext } from "../../context/userContext";
import { ALBUMS_ENDPOINT } from "../../constants/endpoints";
import { Link } from "react-router-dom";

export  interface IAlbum {
    id: number,
    userId:number,
    title:string,
    album: []
}

export const Albums = () => {      
    const { users } = useContext(UserContext); 
    const [albums, setAlbums] = useState<any>([]); 
    const getAlbums = () => {
        getRequest(ALBUMS_ENDPOINT)
        .then(res => setAlbums(res.data))
        .catch(error => console.log('error', error))
        }
    useEffect(() => {
        getAlbums()    
        // eslint-disable-next-line react-hooks/exhaustive-deps
        console.log(albums);      
     }, []);
    return (
<div className='album-list'> 
    <table className='header-table'> 
        <tr>
            <th>Username</th>
            <th>Album</th>
            <th>action</th>
        </tr>
    </table>
    {albums?.map((album: IAlbum) => (
        <div key = {album.id}>            
            <table>                 
                <tr>                      
                {users.map(user => {
                    if(user.id === album.userId)
                        return (<td key={album.id}>
                        {user.name}
                    </td>)
                })}                                   
                <td>
                    {album.title}
                </td>
                <td className='btn-show'> 
                    <Link to={`/albums/album/${album.id}`}>
                        <button>show photos</button>
                    </Link>
                </td>
                </tr>
            </table>
        </div>         
    ))}
</div>
    )
}