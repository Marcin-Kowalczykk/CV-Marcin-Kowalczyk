import styled, { keyframes, css } from 'styled-components'
import { FaHeadphones } from 'react-icons/fa'

const pulse = keyframes`
  0% { transform: scale(1);}
  50% { transform: scale(1.08);}
  100% { transform: scale(1);}
`

const shake = keyframes`
  0% { transform: rotate(0deg);}
  20% { transform: rotate(-15deg);}
  40% { transform: rotate(10deg);}
  60% { transform: rotate(-10deg);}
  80% { transform: rotate(8deg);}
  100% { transform: rotate(0deg);}
`

export const MusicButton = styled.button<{ playing: boolean }>`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 1000;
  padding: 0.8em 1.6em;
  font-size: 1.1em;
  background: rgba(24, 28, 36, 0.85);
  color: #fff;
  border: none;
  border-radius: 1.5em;
  box-shadow: 0 2px 8px #0005;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7em;
  transition:
    background 0.2s,
    color 0.2s;

  @media (min-width: 768px) {
    bottom: 32px;
    left: 32px;
  }

  &:hover {
    background: rgba(97, 218, 251, 0.85);
    color: #181c24;
    animation: ${pulse} 0.7s;
  }
  ${({ playing }) =>
    playing &&
    css`
      background: rgba(97, 218, 251, 0.95);
      color: #181c24;
      animation: ${pulse} 1.2s infinite;
    `}
`

export const HeadphonesIcon = styled(FaHeadphones)<{ playing: boolean }>`
  font-size: 1.6em;
  ${({ playing }) =>
    playing &&
    css`
      animation: ${shake} 0.7s infinite;
    `}
`
