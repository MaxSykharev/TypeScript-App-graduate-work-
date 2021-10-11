import React, { useState, useEffect } from "react";
import { Table } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export const Albums = () => {
    const [album, setAlbum] = useState<any>(null);
    const getRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => console.log(res.json()))
        .catch(err => console.log(err))
        }
    useEffect(() => {
        getRequest()
      }, []);
    return (
        <Table
      className="components-table-demo-nested"
    //   columns={columns}
    //   expandable={{ expandedRowRender }}
    //   dataSource={data}
    />
    )
}