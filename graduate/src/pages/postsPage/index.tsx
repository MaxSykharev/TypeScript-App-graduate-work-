
import React, { useEffect, useState} from "react";


export const Posts = () => {

    const [post, setPost] = useState<any>(null);
    const getRequest =  () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('error', error))
    }
  useEffect(() => {
    getRequest()
  }, []);
    return (
        <div>
            Posts
        </div>
    )
}