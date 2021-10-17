import React, { useEffect, useState } from "react";
import { PHOTOS_ENDPOINT } from "../../../constants/endpoints";
import { getRequest } from "../../../utils";
import '../album/styles.scss'

interface IPhoto {
    photos:[],
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
}

export const Album = () => {  
const [photos, setPhotos] = useState<any>(); 
const getPhotos = () => {
    getRequest(PHOTOS_ENDPOINT)
    .then(res => setPhotos(res.data))
    .catch(error => console.log('error', error))
    }
useEffect(() => {
    getPhotos()  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(photos);
    return (
        <div>
            <p>album</p>
            <div className='gallery'>
                {photos?.map((photo?:IPhoto) => { 
                    return (
                        <>
                            <img src={photo?.url} alt="photo" />
                        </>
                    ) 
                })}  
        </div>
    </div>
          )
            }