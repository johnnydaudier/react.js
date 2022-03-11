import { useEffect } from "react";

import { useState } from "react";
import { products } from "./getFetch";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer () {
    const [oneProduct, setOneProduct] = useState();
    
    useEffect(()=> {
        fetch(products)
        .then((resp)=> resp)
        .then((resp)=>{    
            const p = products.find(prod => prod.id===3);
            setOneProduct(p); 
            console.log(p)  ;                   
        })
        
        
        .catch(err => console.log('err'))
    }, [])

    return (        
        <>
            <ItemDetail item={oneProduct}      />       
        </>
        
    )

}


export default ItemDetailContainer;