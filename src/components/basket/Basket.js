import'./basket.css'


export default function  Basket(props) {
    const {quantity = 0,handleShowBasket= Function.prototype} = props
    return (
        <div className="basket blue darken-4 white-text" onClick={handleShowBasket}>
            <i className=" material-icons">add_shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
        )
}