import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext'
import EstadoCuenta from './pages/EstadoCuenta'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Este es elñ inicio</div>} />
        <Route path="/login" element={<div>inison de sesion</div>} />
        <Route 
          path="/estadoCuenta" 
          element={
            <SearchProvider>
              <EstadoCuenta/>
            </SearchProvider>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
