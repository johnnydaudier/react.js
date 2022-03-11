import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import CartIconComponent from './Components/CartIconComponent';
import ItemListContainer from './Containers/ItemListContainer';
import ItemCount from './Containers/ItemCount';
import ItemDetailContainer from './Containers/ItemDetailContainer';


function App() {
 
  
  const hi = 'Hola, este es un mensaje de saludo ';
 
  
  
  return (
    <div>

      <NavBar />     
      
      <div >
      <ItemListContainer greeting={hi}/>

      <ItemDetailContainer />


      </div>
      
    </div>

    
    
    
  );
}

export default App;
