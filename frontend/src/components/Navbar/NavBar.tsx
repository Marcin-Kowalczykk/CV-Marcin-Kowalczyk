import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SVGComet from './SVGComet/SVGComet'
import { itemVariants, menuVariants, NAV_ITEMS } from './constants'
import { NavContainer, HamburgerButton, HamburgerLine, Menu, MenuItem } from './Navbar.styles'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHamburgerHovered, setIsHamburgerHovered] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavigation = (path: string) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <NavContainer>
      <HamburgerButton
        onClick={toggleMenu}
        aria-label="Open navigation menu"
        data-no-audio
        onMouseEnter={() => setIsHamburgerHovered(true)}
        onMouseLeave={() => setIsHamburgerHovered(false)}
      >
        <SVGComet color={isHamburgerHovered ? '#00d4ff' : '#fff'} />
        <HamburgerLine isHovered={isHamburgerHovered} />
        <HamburgerLine isHovered={isHamburgerHovered} />
        <HamburgerLine isHovered={isHamburgerHovered} />
      </HamburgerButton>
      <AnimatePresence>
        {isOpen && (
          <Menu
            isOpen={isOpen}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {NAV_ITEMS.map(({ path, label }) => (
              <MenuItem
                key={path}
                variants={itemVariants}
                onClick={() => handleNavigation(path)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
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
