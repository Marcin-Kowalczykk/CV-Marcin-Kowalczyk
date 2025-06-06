import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'
import { animated } from 'react-spring'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  body {
    font-family: 'Press Start 2P', cursive;
    background: #000;
  }
`

export const Platform = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100vw;
  height: 24px;
  z-index: 0;
  background: url('data:image/svg+xml;utf8,<svg width="120" height="24" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="16" width="120" height="8" fill="%233a2d0b"/><rect x="0" y="12" width="120" height="4" fill="%2366ff66"/><rect x="0" y="8" width="120" height="4" fill="%2300cc00"/></svg>')
    repeat-x;
  image-rendering: pixelated;
`

export const Card = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #111;
  border: 6px solid #39ff14;
  border-radius: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  image-rendering: pixelated;
  box-shadow:
    0 0 0 4px #000,
    0 0 16px #39ff14;
  &:hover {
    box-shadow:
      0 0 0 4px #000,
      0 0 32px #39ff14;
  }
`

export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 2px 2px 0 #000;
`

export const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  gap: 0;
`

export const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  min-height: 120px;
  margin-bottom: 8px;
  margin-top: 2vh;
`

export const CardContainer = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
`

export const HobbyHeader = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .tag {
    color: #b0b0b0;
  }
  .tag-content {
    color: #fff;
  }
`

export const HobbyItems = styled.div`
  font-size: 0.7rem;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .tag {
    color: #b0b0b0;
  }
  .tag-content {
    color: #fff;
  }
`

export const HobbyContent = styled(animated.div)`
  color: #fff;
  background: #000;
  border: 4px solid #fff;
  border-radius: 4px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 2px 2px 0 #000;
  image-rendering: pixelated;
  margin-left: 32px;
  padding: 1.2rem 2rem;
  min-width: 300px;
  width: calc(100vw - 280px);
  max-width: 90vw;
  box-shadow: 0 0 24px #0008;
  min-height: 70px;
  max-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  h1 {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      font-size: 0.7rem;
      margin: 0.2rem 0;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

export const PixelIcon = styled.div`
  width: 80px;
  height: 80px;
  image-rendering: pixelated;
`
