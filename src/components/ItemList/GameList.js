import GameItem from "./GameItem"
import './items.css'

export default function GameList({goods = [],addToBasket}) {
    
    if(!goods.length){
            return (
                <h3>Nothing to display</h3>
            )
        }
       
    
    return (
        <div className="game_list">
            
           {goods.map(item => (
                <GameItem  {...item} key = {item.id} buyStaff={addToBasket}/>
            )) }

        </div>
    )
}