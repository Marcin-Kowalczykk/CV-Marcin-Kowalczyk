import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

export const subtlePulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const NavContainer = styled.nav`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  margin: 0;
  padding: 0;
  background: none;
`

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  gap: 6px;
  border-radius: 50%;
  animation: ${subtlePulse} 2s infinite;
  transition: all 0.2s;
  position: relative;
  z-index: 1;

  &:hover {
    transform: scale(1.2);
  }
`

export const HamburgerLine = styled(motion.span)<{ isHovered: boolean }>`
  width: 26px;
  height: 4px;
  background-color: ${({ isHovered }) => (isHovered ? '#00d4ff' : '#fff')};
  border-radius: 10px;
  transition: background-color 0.2s;
  display: block;
`

export const Menu = styled(motion.div)<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  /* No background, no shadow */
  background: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  min-width: 150px;
  margin-top: 8px;
  z-index: 10;
`

export const MenuItem = styled(motion.div)`
  padding: 18px 32px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.35rem;
  color: #fff;
  background: none;
  border: none;
  text-align: left;
  transition: color 0.2s;
  &:hover {
    color: #00d4ff;
    background: none;
  }
`
