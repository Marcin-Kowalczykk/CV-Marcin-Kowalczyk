import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './router/routes'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { StyledToastContainer } from './App.styles'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={React.createElement(element)} />
          ))}
        </Routes>
      </BrowserRouter>
      <StyledToastContainer position="bottom-right" />
    </>
  )
}

export default App
