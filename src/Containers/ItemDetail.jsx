function ItemDetail(item) {
    return (
        <div key={item.id}className="col-md-4">
            
            <div className="card w-100 mt-5">
                <img src={item.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p>$ {item.price}</p>
                    <p className="card-text">{item.description}</p>
                    
                </div>
            </div>
        </div>

    )
}


export default ItemDetail;