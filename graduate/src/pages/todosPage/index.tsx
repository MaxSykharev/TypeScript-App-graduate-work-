import React,  { useEffect, useState } from "react";


export const Todos = () => {
    const [todo, setTodo] = useState<any>(null);
    const getRequest =  () => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('error', error))
    }
  useEffect(() => {
    getRequest()
  }, []);
    return (
        <div>
            Todos
        </div>
    )
}