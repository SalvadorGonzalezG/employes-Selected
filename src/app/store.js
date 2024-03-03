import {configureStore} from '@reduxjs/toolkit'
import {departamentosSlice, miSlice} from '../features/miSlice/miSlice'
//
export const store = configureStore({
    reducer:{
        //almacenar todo lo refente a los trabajadores.
        misTrabajadores: miSlice.reducer,
        misDepartamentos: departamentosSlice.reducer,
    }
})