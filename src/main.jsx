import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MiRouter from './router/MiRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import {store} from './app/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
  <React.StrictMode>
  <BrowserRouter>
      <MiRouter />
    </BrowserRouter>
  </React.StrictMode>,
  </Provider>
  
)
