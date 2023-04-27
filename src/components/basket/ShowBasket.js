import { useContext } from "react"
import { shoppingCart } from "../context/Context"
import ShowBasketItem from "./ShowBasketItem"
import './basket.css'

export default function ShowBasket() {

    const {order,handleShowBasket} = useContext(shoppingCart)

    // const{removeFromBasket =Function.prototype,incrementItem,decrementItem} = props
    const totalPrice = order.reduce((sum, item) =>{
        return sum + item.price * item.numberItems
        
    },0)

    return (
        <div className="basket_background">
            <div className="show_basket">
                <div className="collection">
                    <li className="collection-item active list_type">Basket</li>
                    {order.length ? (order.map(item => {
                        return(
                            <ShowBasketItem  key={item.id} {...item}/>
                            )
                    })) : (<li>Basket is emmpty</li>) }
                    <li className="collection-item active list_type">Total price: ${totalPrice}
                    <button className="icons_send">
                        <i className=" material-icons">send</i>
                    </button>
                    </li>
                
                    
                    <span onClick={handleShowBasket}><i className="material-icons close_tag">clear</i></span>


                </div>
                
            </div>

        </div>
        )
}