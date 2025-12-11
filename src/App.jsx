import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Este es elñ inicio</div>} />
        <Route path="/login" element={<div>inison de sesion</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
