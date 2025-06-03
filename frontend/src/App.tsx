import { HashRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './router/routes'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { StyledToastContainer } from './App.styles'
import NavBar from './components/Navbar/NavBar'

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={React.createElement(element)} />
          ))}
        </Routes>
      </HashRouter>
      <StyledToastContainer position="bottom-right" />
    </>
  )
}

export default App
