import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import CartIconComponent from './Components/CartIconComponent';
import ItemListContainer from './Components/ContainerComp/ItemListContainer';
import ItemCount from './Components/ContainerComp/ItemCount';



function App() {
 
  
  const hi = 'hola, mensaje de saludo ';
 
  
  
  return (
    <div>

      <NavBar />     
      
      <div >
      <ItemListContainer greeting={hi}/>
      </div>
      <div>
        <ItemCount stock = {10} initial = {7} />
      </div>
    </div>

    
    
    
  );
}

export default App;
