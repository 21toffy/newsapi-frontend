import React from 'react';
// import { Form, Input, Button, Spin } from 'antd';
import Icon from '@ant-design/icons';
import Toggle from "../../components/Toggle/Toggle";


import { Form, Input, Button, Checkbox, Spin } from 'antd';

import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/auth';
import props from 'prop-types';



// const FormItem = Form.Item;
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

class NormalLoginForm extends React.Component {
    // componentDidMount() {
    //     this.props.onTryAutoSignup();
    //   }

         onFinish = values => {
            console.log('Success:', values);
        };

         onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

         handleSubmit = (e) => {
            e.preventDefault();
            props.form.validateFields((err, values) => {
            if (!err) {
                props.onAuth(values.email, values.password);
                props.history.push('/');
            }
            });
        }

        render(){
            let errorMessage = null;
            if (props.error) {
                errorMessage = (
                    <p>{props.error.message}</p>
                );
            }
    return (
        <Toggle {...props}>
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
          onSubmit={this.handleSubmit}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
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
        </Toggle>
      );
    
  }
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



