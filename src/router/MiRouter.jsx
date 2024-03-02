import {Routes, Route} from 'react-router-dom'
import Listado from '../components/Listado'

const MiRouter = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Listado/>} />
            <Route path='/candidatos' element={<Listado/>} />
            <Route path='/gestion' element={<Listado/>} />
            
        </Routes>

  )
}

export default MiRouter