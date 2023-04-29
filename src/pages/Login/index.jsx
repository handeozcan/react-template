import React, { useState, useEffect } from 'react';
// import { useFormik } from 'formik';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../services/fetchUser';
import { AUTH_URL } from '../../services/config';

function Login() {
  const navigate = useNavigate();

  const token = localStorage.getItem('userToken');
  console.log(token, 'token');

  useEffect(() => {
    if (token !== null) {
      navigate('/');
    }
  }, [token]);
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLoginState({
      ...loginState,
      [e.target.name]: newValue,
    });
  };

  const handleSubmit = async () => {
    const response = await fetchUser(loginState, AUTH_URL.login);
    if (response.status === true) {
      localStorage.setItem('userToken', response.result.token);
      navigate('/');
    }

    console.log(response, 'response');
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input value={loginState.email} name="email" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password value={loginState.password} name="password" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
