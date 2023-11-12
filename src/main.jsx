import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import './css/Spinner.css'
import { VacanteProvider } from './context/VacantesProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <VacanteProvider>
         <RouterProvider router={router}/>
      </VacanteProvider>
  </React.StrictMode>,
)
