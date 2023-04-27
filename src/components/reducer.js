import {toast} from "react-toastify"
export  function reducerContext(state, {type, payload}) {
    switch(type) {
        case  "ADD_TO_BASKET" : {
        const indexItem = state.order.findIndex(indexItem => indexItem.id === payload.id)
        let newOrder = null;
        if(indexItem < 0) {
            const newItem = {
                ...payload,
                numberItems : 1,
            }

        
            newOrder = [...state.order,newItem]
        }else {
             newOrder = state.order.map((orderItem , index) => {
                if(index === indexItem) {
                    return {
                        ...orderItem,
                        numberItems : orderItem.numberItems + 1
                    }
                }else {
                    return orderItem
                }
            })
        
        }
        toast.success("Item added successfully")
   
        return {
            ...state,
            order : newOrder
        }

        }
        case "INCREMENT_ITEM" :
        {
            const newOrder = state.order.map(item => {
            if(item.id === payload.id){
                const newNumberItems = item.numberItems + 1
                return{
                    ...item,
                    numberItems: newNumberItems
                }
            }else{
                return item
            }

            })
            
            return {
                ...state,
                order : newOrder
            }

        };
        case "DECREMENT_ITEM" : 
        {
            return{
                ...state,
                order : state.order.map(item =>{
                    if(item.id === payload.id){
                        const newNumberItems = item.numberItems - 1
                        return{
                            ...item,
                            numberItems: newNumberItems >= 0 ? newNumberItems : 0,
                        }
                    }else{
                        return item
                    }

                })
            }
        }
        case "REMOVE_ITEM": 
        {
            toast.error("item removed successfully")
            return {
                ...state,
                order : state.order.filter(item => item.id !== payload.id)
            }
        }
        case "SHOW_BASKET" :
        {
            return {
                ...state,
                isShowBasket : !state.isShowBasket
            }
        }
        case "SET_DATA" :
            {

                return {
                    ...state,
                    goods : payload || [],
                    isLoading : true
                }
            }
        default: 
        return state
    }
}