import React from "react";
import './App.css';
import logo from "./IMG/Logos-Antares-01.png"
import crear from "./IMG/crear.png"
import registro from "./IMG/registro.png"
import perfil from "./IMG/usuario.png"
import menu from "./IMG/menu.png"
import correo from "./IMG/correo.png"
import { Link } from "react-router-dom/cjs/react-router-dom";


function Prueba() {
  return (
       <div className="App">
        <header className="headerApp">
          <div>
            <img src={perfil} height={"40px"} width={"40px"} />
          </div>
          <img src={logo}/>
          <div>
            <img src={menu} height={"40px"} width={"40px"} />
          </div>
        </header>
        <div className="divMain">
          <main>
              <Link className="Link" to="./Number" ><div><img src={crear} height={"100px"} width={"100px"}/></div></Link>
              <Link className="Link" to="./Number"><div><img src={registro} height={"100px"} width={"100px"} /></div></Link>
              <Link className="Link" to="./Number"><div><img src={correo} height={"100px"} width={"100px"} /></div></Link>
            </main>
        </div>
      </div>
    
 
  );
}

export default Prueba;