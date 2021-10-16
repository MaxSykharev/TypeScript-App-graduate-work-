import React,  { useContext} from "react";
import { UserContext } from '../../context/userContext';
import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './styles.scss'

export const Users = () => {
  const { users } = useContext(UserContext);
    return (
     <div className='users-list'>{users.map(user => 
      <div className='user-card' key={user.id}>
            <Card title='' bordered={false}>
                <div className="user-info">
                  <span> 
                       <p>{user.id}</p>
                       <Avatar icon={<UserOutlined />} />
                    </span>
     
                <p>{user.name}</p>
           
                <p>{user.email}</p>
                </div>
            </Card>
      </div>)}
    </div> 
    )
      }

