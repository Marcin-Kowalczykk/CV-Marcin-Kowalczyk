import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'
import { animated } from 'react-spring'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  body {
    font-family: 'Press Start 2P', cursive;
    background: black;
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
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    border-width: 4px;
  }
`

export const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  gap: 0;
  @media (max-width: 1280px) {
    overflow: auto;
    background: black;
  }
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
  @media (max-width: 768px) {
    min-height: 100px;
    margin-bottom: 4px;
    margin-top: 1vh;
  }
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
  @media (max-width: 768px) {
    font-size: 0.4rem;
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
  @media (max-width: 768px) {
    font-size: 0.4rem;
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
    list-style: disc inside;
    padding-left: 1.2em;
    margin: 0;
    li {
      font-size: 0.7rem;
      margin: 0.2rem 0;
      color: #fff;
      white-space: normal;
      overflow: visible;
      text-overflow: unset;
      word-break: break-word;
    }
  }
  @media (max-width: 768px) {
    min-width: 0;
    width: 70vw;
    margin-left: 10px;
    padding: 0.5rem 0.3rem;
    text-align: center;
    h1 {
      font-size: 0.5rem;
      margin-bottom: 0.3rem;
      text-align: center;
    }
    ul {
      padding-left: 1em;
      margin: 0 auto;
      display: inline-block;
      li {
        font-size: 0.38rem;
        margin: 0.1rem 0;
        text-decoration: none;
        list-style: none;
      }
    }
  }
`

export const PixelIcon = styled.div`
  width: 80px;
  height: 80px;
  image-rendering: pixelated;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`

export const QuestionMark = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 2px 2px 0 #000;
`

export const IconContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
