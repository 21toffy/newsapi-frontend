import React from "react";
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";


import Footer from "../Footer/Footer";


const {  Sider } = Layout;

const DocumentationLayout = ({children}) => {
    return (
    <>
        <Layout>
            <Sider
            style={{ background: '#fff' }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
            }}
            onCollapse={(collapsed, type) => {
            }}
            >
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1', '2']}>
                <Menu.Item key="1">
                <Link to="/">
                    Home
                </Link>
                </Menu.Item>

                <Menu.Item key="2">
                <Link to="/dashboard">
                Dashboard
                </Link>

                </Menu.Item>

                <Menu.Item key="3">
                <Link to="/get-started">
                Get Started
                </Link>
                </Menu.Item>

                <Menu.Item key="4">
                <Link to="/documentation">
                    Documentation
                </Link>
                </Menu.Item>

                <Menu.Item key="5">
                <Link to="/Authentication">
                Authentication
                </Link>
                </Menu.Item>

                <Menu.Item key="6">
                <Link to="/Endpoints">
                Endpoints
                </Link>
                </Menu.Item>


                <Menu.Item key="7">
                <Link to="/errors">
                Errors
                </Link>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout style={{ background: '#fff' }}>
            <div style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                {children}

                </div>
            </div>
            </Layout>
  </Layout>
            <Footer/>
    </>

    );
}

export default DocumentationLayout;