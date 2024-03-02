import { useEffect, useState } from "react"
import Candidato from "./Candidato";

const Listado = () => {
// Declaracion del estado     
    const [candidatos, setCandidatos] = useState([]);

    useEffect(() => {
// Se realiza una consulta a la API para obtener los datos de usuario
        fetch("https://randomuser.me/api/?results=6")
        .then((response) => response.json())
        .then((datos) => setCandidatos(datos.results))
// UseEffect sera ejecutado una vez al montar el componente ya que las dependencias estan vacias    
    },[])
// funcion que se encontrara en el boton ocultar que se encuentra en Candidato.jsx
    const buscarUno = (indice) =>{
        fetch("https://randomuser.me/api/?results=1")
        .then((response) => response.json())
        .then((datos) => {
            const provisional = [ ...candidatos]
            provisional[indice]= {...datos.results[0]}
            setCandidatos(provisional)
        })
    }
  return (
    <>
    <div className="presentacion">
    {candidatos.map((valor, index)=>
    <Candidato valor={valor} index={index} onBuscarUno={buscarUno}/>
    )}
    </div>
    </>
    
  )
}

export default Listado