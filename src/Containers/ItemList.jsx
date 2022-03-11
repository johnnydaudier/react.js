import Item from "./Item";

import { products } from "./getFetch";
import ItemCount from "./ItemCount";


function ItemList({prod}){
    return  products.map( (produ) => 
    <div>
        <Item prod={produ}/>         
    </div>
    );   
    
}

export default ItemList; 