import styled from 'styled-components'
import { pulseBorder } from '../ExperiencePage.styles'

export const IconsRow = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  margin-right: 5vh;
`

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
