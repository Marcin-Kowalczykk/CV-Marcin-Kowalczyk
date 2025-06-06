import { pulseBorder } from '../../router/pages/ExperiencePage/ExperiencePage.styles'
import styled from 'styled-components'

export const IconButton = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: ${({ active }) => (active ? '#222' : '#222')};
  color: #fff;
  font-size: 28px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: ${({ active }) => (active ? '0 0 0 4px #fff, 0 0 0 6px #222' : 'none')};
  position: relative;
  animation: ${pulseBorder} 1.5s infinite;
  transition:
    box-shadow 0.2s,
    background 0.2s;
  &:hover {
    background: #444;
    color: #fff;
  }
`
