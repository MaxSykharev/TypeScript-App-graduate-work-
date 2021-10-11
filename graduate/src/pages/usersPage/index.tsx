import React, { useEffect, useState} from "react";
import { List, Avatar} from 'antd';
import { resolve } from "dns";

// Interface IUsers {
//     id: Number;
//     name: String;
//     email: String
// };

export const UsersList = () => {
  const [user, setUser] = useState<any>(null);
    const getRequest =  () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => console.log(res.json()))
      .catch(err => console.log(err))
    }
  useEffect(() => {
    getRequest()
  }, []);
 
    return (
      <List
      itemLayout="horizontal"
      // dataSource={res}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">пав</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
    )
      }

