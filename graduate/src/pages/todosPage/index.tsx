import React, { useContext, useEffect, useState } from "react";
import { IUser, UserContext } from '../../context/userContext';
import { getRequest } from "../../utils";
import './styles.scss'
// import '~antd/dist/antd.css';
import { Button, Dropdown, Input, Popover } from 'antd';
import { TODOS_ENDPOINT } from "../../constants/endpoints";
import { Checkbox } from 'antd';
import Select from "rc-select";


interface ITodos {
  userId: number,
  id: number,
  title: string,
  username: string,
  completed: boolean,
  userName: string,
};

export const Todos = () => {


  function onChange(e: any) {
    console.log(` ${e.target.checked}`);
  }

  const { users } = useContext(UserContext);

  const [todos, setTodos] = useState<any>();
  const getTodos = () => {
    getRequest(TODOS_ENDPOINT)
      .then(res => setTodos(res.data))
      .catch(error => console.log('error', error))
  }
  const [name, setName] = useState<string>('');
  const [descr, setDescr] = useState<string>('');
  const [check,setCheck] = useState<boolean>(false)

  const onSearch = () => {
    const renderSerchItems = todos.filter((todo: ITodos) => todo.title.includes(descr) && todo.completed);
    setTodos(renderSerchItems)
  }

  useEffect(() => {
    // const items = todos.map((todo: ITodos) => ({ ...todos, userName: `${users.find((user) => user.id === todo.userId)?.name}` }))
    // setTodos(items);
    
  }, [users.length]);
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='container'>
      <Input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
      <Input value={descr} onChange={e => setDescr(e.target.value)} placeholder="descr" />
      <button onClick={onSearch}>применить фильтры</button>
      <Checkbox value={check} onChange={e => setCheck(e.target.value)} />
      <div className='todo-list'>
        {todos?.map((todo: ITodos) => (
          <div key={todo.id} className="todo-cart">
            <Popover content=
              {users.map((user: IUser) => {
                if (user.id === todo.id)
                  return (
                    <div key={user.id}>
                      <p>{user.name}</p>
                      <p>{user.email}</p>
                      <p>{user.phone}</p>
                      <span>{user.address.street}</span>,
                      <span>{user.address.suite}</span>,
                      <span>{user.address.city}</span>
                    </div>
                  )
              })
              }
              title="about user" trigger="hover">
              {users.map(user => {
                if (user.id === todo.id)
                  return (<h3 key={user.id}>{user.username}</h3>)
              })}
            </Popover>
            <p>{todo.title}</p>
            <Checkbox
              defaultChecked={todo.completed}
              onChange={onChange}>
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  )

}