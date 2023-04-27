import React,{ useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import {ToastContainer} from 'react-toastify'
import ContextProvider from "./context/Context";

function AppBody () {
    const[language,setLanguage] = useState(false)

    const langHandler = () => {
        
      return setLanguage(!language)
    }
   
    return (
        <div className="app-body">
            <ToastContainer/>
            <Header langHandler={langHandler} language={language}/>
            <ContextProvider>
                <MainBody language={language}/> 
            </ContextProvider>
            <Footer/>

        </div>
    )
}

export default AppBody