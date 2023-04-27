import { useContext } from 'react'
import'./basket.css'
import { shoppingCart } from '../context/Context'


export default function  Basket(props) {
    const { handleShowBasket,order } = useContext(shoppingCart)



    // const {handleShowBasket= Function.prototype} = props
    return (
        <div className="basket blue darken-4 white-text" onClick={handleShowBasket}>
            <i className=" material-icons">add_shopping_cart</i>
            {order.length ? <span className="cart-quantity">{order.length}</span> : null}
        </div>
        )
}