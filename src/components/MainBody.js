import React,{useState, useEffect} from "react";
import "./styles/mainbody.css"
import { API_KEY,API_URL } from "./Config/config";
import GameList from "./ItemList/GameList";
import IsLoading from "./Isloading/IsLoading";
import Basket from "./basket/Basket";
import ShowBasket from "./basket/ShowBasket";
import {toast} from "react-toastify"


function MainBody() {

    const [goods,setData] = useState([])
    const[isLoading,setLoading] = useState(false),
        [order,setOrder] = useState([]),
        [isShowBasket, setShowBasket] = useState(false);
    

    useEffect(() =>{
        fetch(API_URL,{
            headers: {
                Authorization:API_KEY
            }
        }).then(response => response.json())
        .then(data => {
            data.featured && setData(data.featured)
            setLoading(true)
        })
       
    },[]);

    // add new item
    const addToBasket = (item) => {
        const indexItem = order.findIndex(indexItem => indexItem.id === item.id)

        if(indexItem < 0) {
            const newItem = {
                ...item,
                numberItems : 1,
            }
            setOrder([...order,newItem])
        }else {
            const newOrder = order.map((orderItem , index) => {
                if(index === indexItem) {
                    return {
                        ...orderItem,
                        numberItems : orderItem.numberItems + 1
                    }
                }else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
        toast.success("Item added successfully")
    }
    // removing item
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(item => item.id !== itemId)
    setOrder(newOrder)
    toast.error("item removed successfully")
  }

    //   opening basket
   const handleShowBasket =( ) => {
        setShowBasket(!isShowBasket)
   }

    // inc item
    const incrementItem = (itemId) => {
        const newOrder = order.map(item =>{
            if(item.id === itemId){
                const newNumberItems = item.numberItems + 1
                return{
                    ...item,
                    numberItems: newNumberItems
                }
            }else{
                return item
            }

        })
        setOrder(newOrder)
    }
    
    // dec item
    const decrementItem = (itemId) => {
        const newOrder = order.map(item =>{
            if(item.id === itemId){
                const newNumberItems = item.numberItems - 1
                return{
                    ...item,
                    numberItems: newNumberItems >= 0 ? newNumberItems : 0,
                }
            }else{
                return item
            }

        })
        setOrder(newOrder)
    }

    return (
        <div className="main_body container">
            <Basket quantity ={order.length } handleShowBasket={handleShowBasket}/>
            
            {isLoading ? 
            <GameList goods ={goods}  addToBasket = {addToBasket}/>  :
            <IsLoading/>
            }
            {isShowBasket && 
            <ShowBasket 
            order = {order} 
            handleShowBasket={handleShowBasket} 
            removeFromBasket={removeFromBasket} 
            incrementItem={incrementItem} 
            decrementItem={decrementItem} 
            />}
        </div>
        )
}

export default MainBody;