import ItemCount from "./ItemCount";
function Item(prod) {
    return (
        <div key={prod.id}class="col-md-4">
            <div class="card w-100 mt-5">
                <img src={prod.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{`${prod.name}`}</h5>
                    <p>$ {prod.price}</p>
                    <p class="card-text">{prod.description}</p>
                    <a href="#" class="btn btn-primary">Detalles</a>
                </div>
            </div>
            <ItemCount initial={1} stock={7}/>
        </div>

    )
}

export default  Item;