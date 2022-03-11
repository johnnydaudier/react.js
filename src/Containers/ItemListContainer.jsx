import getFetch, { products } from "./getFetch";
import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";
import ItemList from "./ItemList";

function ItemListContainer({greeting}) {
   
    
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        getFetch
        .then((response)=> {
            console.log(response);
            return response;
        })
        .then((response) => setProducts(response))
        .catch(err => console.log('Error cargando productos'))
        .finally( () => setLoad(true))
    },  []) 
    
    return (
        <>
            { !load  //ask false
            ? <h2>Esperando respuesta...</h2> //yes
            : <ItemList prods={products}  /> // no
            
        }  
      <p>{greeting}</p>          
        </>
    )

}


export default  ItemListContainer;






