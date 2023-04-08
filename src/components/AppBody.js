import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import {ToastContainer} from 'react-toastify'


function AppBody () {
    return (
        <div className="app-body">
            <ToastContainer/>
            <Header/>
            
            <MainBody/>
            <Footer/>

        </div>
    )
}

export default AppBody