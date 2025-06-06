import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GuideContainer = styled.div`
  position: fixed;
  top: 32px;
  left: 32px;
  right: auto;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  pointer-events: none;
  max-width: 220px;

  p {
    margin: 8px 0 0 0;
    text-align: center;
    align-self: flex-start;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    border-radius: 6px;
    padding: 4px 10px;
    max-width: 180px;
    pointer-events: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  }

  @media screen and (max-width: 1280px) and (max-height: 700px) {
    top: 25px;
    left: 12px;
    transform: scale(0.8);
    transform-origin: top left;

    p {
      font-size: 12px;
    }
  }
`

export const ArrowKey = styled(motion.div)<{ active: boolean }>`
  width: 40px;
  height: 40px;
  background: ${({ active }) =>
    active
      ? 'linear-gradient(135deg, #00ffb3 0%, #00cc8f 100%)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'};
  border: 2px solid ${({ active }) => (active ? '#00ffb3' : 'rgba(255, 255, 255, 0.2)')};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ active }) =>
    active
      ? '0 0 16px 2px rgba(0, 255, 179, 0.5), 0 0 32px 8px rgba(0, 255, 179, 0.2)'
      : '0 2px 8px rgba(0, 0, 0, 0.2)'};
  transition: all 0.3s ease;
`

export const ArrowIcon = styled.span<{ direction: 'up' | 'down' | 'left' | 'right' }>`
  width: 0;
  height: 0;
  border-style: solid;
  ${({ direction }) => {
    switch (direction) {
      case 'up':
        return `
          border-width: 0 8px 12px 8px;
          border-color: transparent transparent currentColor transparent;
        `
      case 'down':
        return `
          border-width: 12px 8px 0 8px;
          border-color: currentColor transparent transparent transparent;
        `
      case 'left':
        return `
          border-width: 8px 12px 8px 0;
          border-color: transparent currentColor transparent transparent;
        `
      case 'right':
        return `
          border-width: 8px 0 8px 12px;
          border-color: transparent transparent transparent currentColor;
        `
    }
  }}
  color: #fff;
`
