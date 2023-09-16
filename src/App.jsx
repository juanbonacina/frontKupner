import './App.css';
import {BrowserRouter , Switch, Route } from "react-router-dom";
import createNumber from './CreateNumber';
import Prueaba from './Prueba1';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Prueaba}/>
      <Route path='/Number' component={createNumber} />
    </Switch>  
    </BrowserRouter>
    
  
  );
}

export default App;
