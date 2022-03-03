import Item from "./Item";

import { products } from "./getFetch";
import ItemCount from "./ItemCount";


function ItemList(){
    return  products.map( (prod) => 
    <div>
        <Item prod={prod}/>         
    </div>
    );   
    
}

export default ItemList;