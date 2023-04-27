import React,{ useEffect, useContext} from "react";
import "./styles/mainbody.css"
import { API_KEY,API_URL } from "./Config/config";
import GameList from "./ItemList/GameList";
import IsLoading from "./Isloading/IsLoading";
import Basket from "./basket/Basket";
import ShowBasket from "./basket/ShowBasket";
// import {toast} from "react-toastify"
import { shoppingCart } from "./context/Context";



function MainBody({language}) {
    
    const {isShowBasket,isLoading, setData} =useContext(shoppingCart)



        
     
    

    useEffect(() =>{
        fetch(language ? `${API_URL} + lang=ru` : `${API_URL} + lang=en` ,{
            headers: {
                Authorization:API_KEY
            }
        }).then(response => response.json())
        .then(data => {
            setData(data.featured)
           
        })
       
    },[language]);


    return (
        <div className="main_body container">
            <Basket />
            {isLoading ? 
            <GameList   />  :
            <IsLoading/>
            }
            {isShowBasket && 
            <ShowBasket/>}
        </div>
        )
}

export default MainBody;