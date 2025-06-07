import styled from 'styled-components'
import { motion } from 'framer-motion'
import { PlatformWrapper } from '../Game/Platform/Platform.styles'

const NAVBAR_HEIGHT = 40

export const PlatformsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${NAVBAR_HEIGHT + 10}px;
  width: 100%;
  max-width: 100vw;
  height: calc(100vh - ${NAVBAR_HEIGHT + 20}px);
  box-sizing: border-box;
  overflow-y: auto;
  font-family: 'JetBrains Mono', monospace;
  background: none;
`

export const PlatformMobileWrapper = styled(motion(PlatformWrapper))`
  width: 100%;
  height: 28px;
  min-width: 0;
  margin-bottom: 10px;
`

export const PlatformAndDesc = styled.div`
  width: 85%;
  max-width: 500px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlatformDesc = styled(motion.div)`
  width: 100%;
  background: rgba(35, 39, 46, 0.73);
  border-radius: 10px;
  padding: 12px 18px;
  color: #fff;
  font-size: clamp(12px, 2.5vw, 16px);
  box-shadow: 0 2px 8px #0002;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 1vh;
  word-break: break-word;
`

export const PlatformDescText = styled.div`
  font-weight: bold;
  font-size: inherit;
  color: #fff;
  margin-bottom: 2px;
`
