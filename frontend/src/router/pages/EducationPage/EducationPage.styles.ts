import styled, { createGlobalStyle } from 'styled-components'

export const NoScroll = createGlobalStyle`
  html, body {
    overflow: hidden;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap');
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  overflow: hidden;
  margin: 0;
  padding: 0;
  position: relative;
  color: red;
`

export const MobileContentWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 3vh;
  width: auto;
  max-width: 95vw;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
