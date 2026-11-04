import { useSelector } from "react-redux"
import Game from "./Game"


const ListGame = ({products}) =>{
    
    return(
            <div>
                <h1>Nos jeux</h1>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    {products.map((game) => (<Game key={game._id} game={game} />))}
                </div>
            </div>
)
}

export default ListGame