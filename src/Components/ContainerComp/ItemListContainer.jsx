import { useState, useEffect } from "react";





function ItemListContainer({greeting}) {
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(Date)
    // let c = 0;
    const handleCount = ()=> {
        setCount(count+1);
        setDate (Date())
    }
    



    
    return (
        <div>
             <label>{'Cantidad total clicks: '+count}</label><br/>
             <label>click numero  {count} a las { date } </label><br/>
             <button onClick={ handleCount }>Add 1</button>
             <p>{greeting}</p>
        </div>
    )

}


export default  ItemListContainer;