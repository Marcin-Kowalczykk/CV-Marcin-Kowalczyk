import styled, { keyframes } from 'styled-components'

export const pulseBorder = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(58, 90, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(58, 90, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(58, 90, 255, 0);
  }
`

export const Wrapper = styled.div`
  display: flex;
  background: #f7f7f7;
  min-height: 100vh;
  height: 100vh;
  color: #000;
  overflow: hidden;
`

export const Main = styled.main`
  flex: 1;
  padding: 24px 32px 16px 32px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: 1px;
`

export const IconsWrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 48px;
  z-index: 10;
`
