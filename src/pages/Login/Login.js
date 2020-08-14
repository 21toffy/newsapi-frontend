import React from 'react';
// import { Form, Input, Button, Spin } from 'antd';
import Icon from '@ant-design/icons';

import { Form, Input, Button, Checkbox, Spin } from 'antd';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/auth';
import props from 'prop-types';



const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;







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

const NormalLoginForm = () => {

        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const  handleSubmit = (e) => {
            e.preventDefault();
            props.form.validateFields((err, values) => {
            if (!err) {
                props.onAuth(values.email, values.password);
                props.history.push('/');
            }
            });
        }

        let errorMessage = null;
        if (props.error) {
            errorMessage = (
                <p>{props.error.message}</p>
            );
        }
  return (
    <div>
    {errorMessage}
    {
        props.loading ?

        <Spin indicator={antIcon} />

        :

    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
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
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    }
    </div>
  );
};




const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.authLogin(email, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);



