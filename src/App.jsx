import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import CartIconComponent from './Components/CartIconComponent';
import ItemListContainer from './Components/ContainerComp/ItemListContainer';



function App() {
 
  const wh = {'width': 30, 'height': 30};
  const hi = 'hola, mensaje de saludo ';
  const bg = { backgroundColor: 'gray' };
  const color = { color: 'green' };
  const center = { textAlign: 'center' };
  return (
    <div
      style={ color}
      style={center}
    >

      <NavBar />
        
          
      
      <div
        style={bg, color}
      >
      <ItemListContainer greeting={hi}/>
      </div>
      

      
      

    </div>
    
    
  );
}

export default App;
