import { createContext,useReducer } from "react";
import { reducerContext } from "../reducer";
export const shoppingCart  = createContext()


const initialState = {
    goods : [],
    isLoading : false,
    order : [],
    isShowBasket : false,
}
// const value = "hello"
export default function ContextProvider({children}) {
    
    const [value , dispatch] = useReducer(reducerContext,initialState)
    
    
    value.addToBasket = (item) => {
        dispatch({type: "ADD_TO_BASKET", payload: item} )
    }

    value.incrementItem = (itemId) => {
        dispatch ({type : 'INCREMENT_ITEM',payload : {id : itemId}})
    }

    value.decrementItem = (itemId) => {
        dispatch ({type : 'DECREMENT_ITEM',payload : {id : itemId}})
    }

    value.removeFromBasket = (itemId) => {
        dispatch ({type : 'REMOVE_ITEM',payload : {id : itemId}})
    }

    value.handleShowBasket = () => {
        dispatch({type : 'SHOW_BASKET'})
    }

    value.setData = (data) => {
        dispatch({type : 'SET_DATA',payload : data})
    }
    return(
        <div>
            <shoppingCart.Provider value ={value} >
                {children}
            </shoppingCart.Provider>
        </div>
    )
}
