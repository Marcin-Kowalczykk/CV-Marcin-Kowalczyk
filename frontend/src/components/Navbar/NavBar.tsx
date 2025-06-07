import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SVGComet from './SVGComet/SVGComet'
import { itemVariants, menuVariants, menuVariantsLight, NAV_ITEMS } from './constants'
import { NavContainer, HamburgerButton, HamburgerLine, Menu, MenuItem } from './Navbar.styles'
import { getCometColor, getNavVariant } from './helpers'
import { useAppContext } from '../../context/AppContext'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHamburgerHovered, setIsHamburgerHovered] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { isMobile } = useAppContext()
  const navVariant = getNavVariant(location.pathname, isMobile)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavigation = (path: string) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <NavContainer ref={menuRef}>
      <HamburgerButton
        onClick={toggleMenu}
        aria-label="Open navigation menu"
        data-no-audio
        onMouseEnter={() => setIsHamburgerHovered(true)}
        onMouseLeave={() => setIsHamburgerHovered(false)}
        variant={navVariant}
      >
        <SVGComet color={getCometColor(navVariant, isHamburgerHovered)} />
        <HamburgerLine isHovered={isHamburgerHovered} variant={navVariant} />
        <HamburgerLine isHovered={isHamburgerHovered} variant={navVariant} />
        <HamburgerLine isHovered={isHamburgerHovered} variant={navVariant} />
      </HamburgerButton>
      <AnimatePresence>
        {isOpen && (
          <Menu
            isOpen={isOpen}
            variants={navVariant === 'light' ? menuVariantsLight : menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            variant={navVariant}
          >
            {NAV_ITEMS.map(({ path, label }) => (
              <MenuItem
                key={path}
                variants={itemVariants}
                onClick={() => handleNavigation(path)}
                whileHover={
                  navVariant === 'light' ? { scale: 1.08, background: 'none' } : { scale: 1.08 }
                }
                whileTap={{ scale: 0.97 }}
                variant={navVariant}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        )}
      </AnimatePresence>
    </NavContainer>
  )
}

export default NavBar
