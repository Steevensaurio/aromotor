import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table from './components/Table/Table'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Este es elñ inicio</div>} />
        <Route path="/login" element={<div>inison de sesion</div>} />
        <Route path="/estadoCuenta" element={<Table/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
