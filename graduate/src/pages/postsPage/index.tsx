import React, { useEffect, useState} from "react";
import { getRequest } from "../../utils";




export const Posts = () => {
  const [posts, setPosts] = useState<any>([]);
  const getUsers =  () => {
    getRequest('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPosts(res.data))
    .catch(error => console.log('error', error))    
  }
  useEffect(() => {
    getUsers();
  }, [])
  
    return (
        <div>
           
        </div>
    )
}


