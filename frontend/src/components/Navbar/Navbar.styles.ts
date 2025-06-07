import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { NavbarVariant } from './model'

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
  z-index: 10000;
  margin: 0;
  padding: 0;
  background: none;
`

export const HamburgerButton = styled.button<{ variant?: NavbarVariant }>`
  background: ${({ variant }) => (variant === 'lightCircle' ? '#fff' : 'none')};
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
  color: ${({ variant }) => {
    if (variant === 'light') return 'gray'
    if (variant === 'green') return '#00ff41'
    if (variant === 'extraLight') return '#fff'
    if (variant === 'lightCircle') return '#181818'
    return '#fff'
  }};
  &:hover {
    transform: scale(1.2);
  }
`

export const HamburgerLine = styled(motion.span)<{
  isHovered: boolean
  variant?: NavbarVariant
}>`
  width: 26px;
  height: 4px;
  background-color: ${({ variant }) => {
    if (variant === 'light') return 'gray'
    if (variant === 'green') return '#009933'
    if (variant === 'extraLight') return '#fff'
    if (variant === 'lightCircle') return '#181818'
    return '#fff'
  }};
  border-radius: 10px;
  transition: background-color 0.2s;
  display: block;
`

export const Menu = styled(motion.div)<{ isOpen: boolean; variant?: NavbarVariant }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ variant }) =>
    variant === 'light' || variant === 'extraLight' || variant === 'lightCircle' ? '#fff' : 'none'};
  box-shadow: ${({ variant }) =>
    variant === 'light' || variant === 'extraLight' || variant === 'lightCircle'
      ? '0 2px 16px rgba(0,0,0,0.07)'
      : 'none'};
  border: ${({ variant }) =>
    variant === 'light' || variant === 'extraLight' || variant === 'lightCircle'
      ? '1px solid #e0e0e0'
      : 'none'};
  border-radius: ${({ variant }) =>
    variant === 'light' || variant === 'extraLight' || variant === 'lightCircle' ? '12px' : '0'};
  padding: 0;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  min-width: 150px;
  margin-top: 8px;
  z-index: 10;
`

export const MenuItem = styled(motion.div)<{ variant?: NavbarVariant }>`
  padding: 18px 32px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.35rem;
  color: ${({ variant }) => {
    if (variant === 'light' || variant === 'extraLight' || variant === 'lightCircle')
      return '#181818'
    if (variant === 'green') return '#fff'
    return '#fff'
  }};
  background: none;
  border: none;
  text-align: left;
  transition:
    color 0.2s,
    background 0.2s;
  &:hover {
    color: ${({ variant }) => {
      if (variant === 'light' || variant === 'extraLight' || variant === 'lightCircle')
        return '#00d4ff'
      if (variant === 'green') return '#00ff41'
      return '#00d4ff'
    }};
    background: none;
  }
  @media (max-width: 1280px) {
    font-size: 1.1rem;
    padding: 9px 16px;
  }
`
