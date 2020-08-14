import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import props from 'prop-types';


const Layout = ({children}) => {
    return (
        <>
        <Header {...props}/>
            {children}
        <Footer />
        </>
    );
}

export default Layout;