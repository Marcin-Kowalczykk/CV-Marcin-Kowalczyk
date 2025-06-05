import styled, { css, keyframes } from 'styled-components'

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const ConfettiWrapper = styled.div<{ isFading: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  ${({ isFading }) =>
    isFading &&
    css`
      animation: ${fadeOut} 1s ease-out forwards;
    `}
`
