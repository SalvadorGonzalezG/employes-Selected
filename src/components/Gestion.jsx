import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import Trabajador from "./Trabajador"

const Gestion = () => {
  // leer el estado de los trabajadores para mandarlo llamar cada uno de los elementos con un iterador
  const listaTrabajadores = useSelector(state => state.misTrabajadores.trabajadores)

  return (
    <>
      <h1> Trabajadores:</h1>
      <Link to='/candidatos'>Candidatos</Link>

      <div className="usuarios">
        {listaTrabajadores.map((valor, index) =>
          <Trabajador valor={valor} index={index} />
          )}
          
      </div>
    </>
  )
}

export default Gestion