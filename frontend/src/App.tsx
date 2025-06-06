import { HashRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './router/routes'
import React, { useEffect, useState } from 'react'
import { StyledInProgress, StyledToastContainer } from './App.styles'
import NavBar from './components/Navbar/NavBar'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      <HashRouter>
        {!isMobile && <NavBar />}
        {isMobile && (
          <StyledInProgress>
            In progress... for other routes works only on desktops
          </StyledInProgress>
        )}
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
