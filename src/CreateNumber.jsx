import React, { useState } from "react";
import axios from "axios";
import GenerateNumber from "./Funtions";
import "./CreateNumber.css";
import logo from "./IMG/Logos-Antares-01.png"
import { Link } from "react-router-dom/cjs/react-router-dom";
import alertaProject from "./alertas"

function CreateNumber(){
    // Definir los estados para los inputs
    const [cliente, setCliente] = useState("");
    const [area, setArea] = useState("");
    const [año, setAño] = useState("");
    const [unidad, setUnidad] = useState("");
    const [proyecto, setProyecto] = useState("");
    const [usuario, setUsuario] = useState("");

  
    function SendForm(e){
        e.preventDefault();
        const data = {
            cliente: cliente,
            area: area,
            año: año,
            unidad: unidad,
            proyecto: proyecto,
            usuario: usuario
        };
        axios.post("https://tu-api.com/proyectos", data) 
        .then(res => {
            console.log(res.data); 
        })
        .catch(err => {
            console.error(err);
        });
    }

    return(
       <div>
        <header>
            <img src={logo} height="150px"/>
        </header>
        <div className="divBodyForm">
            <form>
                <div className="div1">
                    <div>
                        <label htmlFor="cliente">Client</label>
                        <select id="cliente">
                            <option value=""></option>
                            <option value="Antares Tech Services Inc.">Antares Tech Services Inc.</option>
                            <option value="Buckeye Partners LLC">Buckeye Partners LLC</option>
                            <option value="Big River Steel">Big River Steel</option>
                            <option value="RDT Inc.">RDT Inc.</option>
                            <option value="Golden Aluminum">Golden Aluminum</option>
                        </select>
                    </div>

                    <div>
                        <label>Year</label>
                        <select id="año">
                            <option value=""></option>
                            <option value="23"> 23 </option>
                            <option value="24"> 24 </option>
                            <option value="25"> 25 </option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="unidad">Unit</label>
                        <select id="unidad">
                            <option value=""></option>
                            <option value="Electric">Electric</option>
                            <option value="Mechannic">Mechannic</option>
                            <option value="Engineering">Engineering</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="proyecto">Project</label>
                        <select id="proyecto">
                            <option value=""></option>
                            <option value="Capacitación">Capacitación</option>
                            <option value="Proyectos Internos">Proyectos Internos</option>
                            <option value="Proyectos Externos">Proyectos Externos</option>
                            <option value="Estudio/Analisis previo">Estudio/Analisis previo</option>
                        </select>
                    </div>    
                </div>
                <div className="div2">
                    <div>
                        <label>Description</label>
                        <input type="text-box"></input>

                    </div>
                    <div>
                        <label>User</label>
                        <select id="user">
                            <option value=""></option>
                            <option value="Capacitación">Pablo Lucero</option>
                            <option value="Proyectos Internos">Jonatan Grassi</option>
                            <option value="Proyectos Externos">Mariel Kleiner</option>
                            <option value="Estudio/Analisis previo">Angel Gambotto</option>
                        </select>
                    </div>
                </div>

            </form>

            <div className="divNB">
                <div className="divResultado">
                    <button onClick={()=> GenerateNumber()}>Generate Number</button>
                    <div id="resultado"></div> 
                </div>
                <div className="divBotones">
                   <Link className="LinkExit" to= "./"><button className="exit">Exit</button></Link> 
                    <button onClick={alertaProject}>Save Project</button>
                </div>
            </div>
           
        </div>
        

       </div>
    )
}

export default CreateNumber;
