import { useContext } from "react";
import { shoppingCart } from "../context/Context";
export default function ShowBasketItem(props) {
    const  {id,name,price,numberItems} = props;
    const {incrementItem,decrementItem,removeFromBasket} = useContext(shoppingCart)


  
    return(
      <div className=" show_basket_items ">
        <li className="collection-item list_type" id={id}>
            {name} x {numberItems} = ${price * numberItems} 
            <span className="secondary-content ">
            
              <button className="btn"  onClick={()=> incrementItem(id)}>
                <i className="material-icons ">exposure_plus_1</i>
                
              </button>
              <button className="btn" >
                  <i className="material-icons " onClick={()=> removeFromBasket(id)}> delete_forever</i>
              </button>
              <button className="btn" onClick={()=> decrementItem(id)}>
                <i className="material-icons " >exposure_minus_1</i>
              </button>
            </span>
            
        </li>
       
      </div>
      
        )
}