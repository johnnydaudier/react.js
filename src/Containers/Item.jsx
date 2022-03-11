import ItemCount from "./ItemCount";
function Item({prod}) {
    return (
        <div key={prod.id}className="col-md-4">
            <div className="card w-100 mt-5">
                <img src={prod.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{`${prod.name}`}</h5>
                    <p>$ {prod.price}</p>
                    <p className="card-text">{prod.description}</p>
                    <a href="#" className="btn btn-primary">Detalles</a>
                </div>
            </div>
            <ItemCount initial={1} stock={7}/>
        </div>

    )
}

export default  Item;