import React, { useContext, useEffect, useState } from "react";
import { IUser, UserContext } from '../../context/userContext';
import { getRequest } from "../../utils";
import './styles.scss'
import { Input, Popover } from 'antd';
import { TODOS_ENDPOINT } from "../../constants/endpoints";
import { Checkbox } from 'antd';

interface ITodos {
  userId: number,
  id: number,
  title: string,
  username: string,
  completed: boolean,
  userName: string,
};

export const Todos = () => {
  const { users } = useContext(UserContext);
  const [name, setName] = useState<string>('');
  const [descr, setDescr] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodos[]>([]);
  const getTodos = () => {
    getRequest(TODOS_ENDPOINT)
      .then((res: any) => setTodos(res.data))
      .catch(error => console.log('error', error))
  }
  function handleChange(value: any) {
    setCheck(value === 'completed' ? false : true);
  }
  function onChange(e: any) {
    console.log(` ${e.target.checked}`);
  }

  useEffect(() => {
    const items = todos.map((item: any) => ({ ...item, userName: `${users.find((user) => user.id === item.userId)?.name}` }))
    setTodos(items);
    console.log(items);
  }, [users.length]);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = () => {
    const renderSearchItems = todos.filter(todo => todo.title.includes(descr) && todo.completed === check && todo.userName.includes(name));
    setTodos(renderSearchItems)
  }
  return (
    <div className='container'>
      <Input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
      <Input value={descr} onChange={e => setDescr(e.target.value)} placeholder="title" />
      <button onClick={onSearch}>применить фильтры</button>
      <Checkbox value='completed' onChange={handleChange} />
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