import { useEffect, useState } from "react"
import Candidato from "./Candidato";
import { useDispatch } from "react-redux";
import {agregarUnValor} from '../features/miSlice/miSlice';

const Listado = () => {
// Declaracion del estado     
    const [candidatos, setCandidatos] = useState([]);
// funcion dispatch
  const dispatch = useDispatch()
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
// crear un array que vaya a candidatos y lo copie
            const provisional = [ ...candidatos]
// puedo ir a provicional acceder a cualquiera de sus indices, el objeto que habia lo elimina. obtiene todos los valores de los datos y de ellos obtener el primero.
            provisional[indice]= {...datos.results[0]}
// una vez se a modificado provicional actualiza el estado mediante provisional
            setCandidatos(provisional)
        })
    }

    const guardarUno = (valor) => {
      dispatch(agregarUnValor(valor))
    }
  return (
    <>
    <div className="presentacion">
    {candidatos.map((valor, index)=>
    <Candidato valor={valor} onGuardarUno={guardarUno} index={index} onBuscarUno={buscarUno}/>
    )}
    </div>
    </>
    
  )
}

export default Listado