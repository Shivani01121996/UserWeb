import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, notification } from 'antd';
import { login } from '../actions/user'
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [redirectToList, setRedirectToList] = useState(false);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(login(values)).then(res => {
      if (res.payload) {
        notification.success({
          description: 'Successfully Logged In.'
        })
        setRedirectToList(true);
      }
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  if (redirectToList) return <Redirect to={{ pathname: '/userList' }} />

  return (
    <Row>
      <Col span={10} offset={7} >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          style={{ marginTop: 300 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
                type: 'email'
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                pattern: /^[.A-Za-z0-9_\-#@]{6,20}$/,
                message: 'Password must be between 6-20 characters and can contain a-z,0-9,.-_#@',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
        </Button>
          </Form.Item>
        </Form>

      </Col>
    </Row >
  );
}

export default Login;