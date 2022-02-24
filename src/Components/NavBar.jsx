import CartIconComponent from "./CartIconComponent";



function NavBar () {
    return (
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand"href="">PepeShop</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"href="">INICIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"href="">Ofertas</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" >Mas vendidos</a></li>
              <li><a className="dropdown-item" >Bajaron de precio</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item">Buscar por marcas</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link"href="">Mi cuenta</a>            
          </li>
          <li><a className="nav-link"href=""> {<CartIconComponent />} </a></li>
        </ul>
        <form className="d-flex">
        
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
        
    )
  }
  
  export default NavBar;
  