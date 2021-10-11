import React,  { useEffect, useState} from "react";
import { List, Avatar} from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';


interface IUsers {
    id: Number;
    name: String;
    email: String
};
console.log();

export const UsersList = () => {
  const { user } = useContext(UserContext);
  const [userList, setUserList] = useState<IUsers>();
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
      <List
      itemLayout="horizontal"
      // dataSource={}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design"></a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
    )
      }

