import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { fetchAll } from '../actions/user';

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const userList = useSelector(state => {
    return state.users;
  })

  const dataSource = userList.map(u => {
    const { id, name,
      age,
      gender,
      email,
      pNumber } = u;
    return {
      key: id,
      name,
      age,
      gender,
      email,
      pNumber
    }
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'pNumber',
      key: 'pNumber',
    },
  ];

  return (
    <Table size='small' dataSource={dataSource} columns={columns} />
  );
}

export default UserList;