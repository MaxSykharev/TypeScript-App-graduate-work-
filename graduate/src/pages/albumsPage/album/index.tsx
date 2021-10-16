import React, { useEffect, useState } from "react";
import {  PHOTOS_ENDPOINT } from "../../../constants/endpoints";
import { getRequest } from "../../../utils";

    interface IPhoto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
    photos: {},
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
    }, []);

    console.log(photos)

    return (      
      <div>
          Album
            {photos?.map((photo: IPhoto) => {
            <div>
                {photo.albumId}
           </div>
            })}
       </div>
    )
}