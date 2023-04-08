import './items.css'
export default function GameItem({id,name,description,price,image,buyStaff}) {

    return (
         <div className="row game_items" id={id}>
            <div className="col  m12">
            <div className="card item_card">
                <div className="card-image">
                <img className="item_img" src={image} alt={name}/>
                
                <a href='an' className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                <span className="card-title card_title">{name}</span>
                <p>{description}</p>
                </div>
                <div className="card_footer">
                    <span className="item_price">{price}$</span>
                    
                    <button className="item_btn" onClick={() => buyStaff({id,name,price})}>buy</button>
                </div>
            </div>
            </div>
        </div>
    )
}