import React, { useEffect, useState} from "react";
import { List } from 'antd';

// Interface IUsers {
//     id: Number;
//     name: String;
//     email: String
// };

export const UsersList = () => {
  const [user, setUser] = useState<any>(null);
    const getRequest =  () => {
      fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => setUser(res.json()))
  .catch(err => console.log(err))
  console.log(setUser);
  
    }
  useEffect(() => {
    getRequest()
  }, []);
 
    return (
        <div>
              <List
    itemLayout="horizontal"
    // dataSource = {}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<a href=""></a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
        </div>
    )
    }

