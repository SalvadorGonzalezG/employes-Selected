import {createSlice} from '@reduxjs/toolkit'


// porciones de mi estado para poder acceder a ellas de una manera más rapida.
export const miSlice = createSlice({
    name: 'misTrabajaores', // nombre del slice
    initialState: {
    trabajadores: [],
    },
    reducers:{
        agregarUnValor: (state, action) =>{
            state.trabajadores = [...state.trabajadores, action.payload]
        }
    }
})
export const departamentosSlice = createSlice({
    name: 'misDepartamentos',
    initialState: [],
    reducers:{

    }
})

export const {agregarUnValor} = miSlice.actions