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
  return (
    <>
    <div className="presentacion">
    {candidatos.map((valor, index)=>
    <Candidato valor={valor}/>
    )}
    </div>
    </>
    
  )
}

export default Listado