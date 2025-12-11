import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext'
import EstadoCuenta from './pages/EstadoCuenta'
import MainWrapper from './layouts/MainWrapper'
import PrivateRoute from './layouts/PrivateRoute'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <MainWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <SearchProvider>
                  <EstadoCuenta />
                </SearchProvider>
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login/>} />
          <Route 
            path="/estadoCuenta" 
            element={
              <SearchProvider>
                <EstadoCuenta/>
              </SearchProvider>
            } />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  )
}

export default App
