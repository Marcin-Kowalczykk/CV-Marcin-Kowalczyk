import { HashRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './router/routes'
import React from 'react'
import NavBar from './components/Navbar/NavBar'
import 'react-toastify/dist/ReactToastify.css'
import { AppProvider } from './context/AppContext'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={React.createElement(element)} />
          ))}
        </Routes>
      </HashRouter>
      <ToastContainer position="bottom-right" />
    </AppProvider>
  )
}

export default App
