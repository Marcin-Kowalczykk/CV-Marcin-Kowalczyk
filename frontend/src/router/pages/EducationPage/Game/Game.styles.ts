import styled from 'styled-components'
import { motion } from 'framer-motion'
import { animated } from 'react-spring'
import { GAME_MARGIN } from '../constants'

export const GameFont = styled.div`
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.5px;
`

export const GameArea = styled.div<{ gameHeight: number; gameWidth: number }>`
  position: relative;
  width: ${({ gameWidth }) => gameWidth}px;
  height: ${({ gameHeight }) => gameHeight}px;
  background: rgba(34, 34, 34, 0.9);
  border-radius: 8px;
  box-shadow: 0 8px 32px #0008;
  overflow: hidden;
  margin: ${GAME_MARGIN}px auto;
  padding: 0;
  display: block;
  outline: none;
  backdrop-filter: blur(5px);
`

export const WinCornerMessage = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  color: #fff;
  font-size: 1.1rem;
  padding: 18px 32px;
  z-index: 20;
  text-align: right;
  min-width: 260px;
  text-shadow: 0 2px 8px #000a;
  white-space: pre-line;
`

export const TypewriterText = styled(motion.div)`
  display: block;
  margin-bottom: 4px;
  line-height: 1.2;
  font-weight: 400;
`

export const Cursor = styled(motion.span)`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: #fff;
  margin-left: 2px;
  vertical-align: middle;
  font-family: 'JetBrains Mono', monospace;
`

export const PlatformContainer = styled.div<{
  left: number
  top: number
  width: number
  platformHeight: number
}>`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  width: ${({ width }) => width}px;
  height: ${({ platformHeight }) => platformHeight}px;
  z-index: 2;
`

export const DescriptionBox = styled(motion.div)<{ left: number; top: number; width: number }>`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  padding-left: 25px;
  box-sizing: border-box;
  color: #fff;
  font-size: 12px;
  line-height: 1.35;
  z-index: 1;
  pointer-events: none;
  text-shadow: 0 2px 8px #000a;
  white-space: pre-line;

  @media (max-width: 1280px) {
    padding-left: 15px;
  }
`

export const ResetButton = styled(motion.button)`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  font-family: 'JetBrains Mono', monospace;
  cursor: pointer;
  padding: 2px 10px;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 8px;
  box-shadow: 0 2px 8px #000a;
  text-shadow:
    0 2px 8px #00ffb355,
    0 1px 2px #000a;
  transition:
    color 0.2s,
    box-shadow 0.2s,
    background 0.2s;
  outline: none;
  &:hover,
  &:focus {
    color: #00ffb3;
    background: rgba(0, 255, 128, 0.08);
    box-shadow:
      0 0 8px 2px #00ffb3cc,
      0 2px 8px #000a;
    text-shadow:
      0 0 8px #00ffb3cc,
      0 2px 8px #000a;
  }
`

export const AnimatedPlayerWrapper = styled(animated.div)<{ playerSize: number }>`
  position: absolute;
  width: ${({ playerSize }) => playerSize}px;
  height: ${({ playerSize }) => playerSize}px;
  z-index: 3;
`

export const SlideInTextLineStyled = styled(motion.span)<{
  fontWeight?: number
  fontSize?: number
  color?: string
}>`
  display: inline-block;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-size: ${({ fontSize }) => fontSize || 12}px;
  color: ${({ color }) => color || '#fff'};

  @media (max-width: 1280px) {
    margin-top: 5px;
    font-size: 10px;
  }
`
