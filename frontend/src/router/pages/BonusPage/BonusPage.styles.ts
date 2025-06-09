import styled, { keyframes } from 'styled-components'

const progressAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 36%;
  }
`

export const ProgressBar = styled.div`
  width: 300px;
  height: 20px;
  background-color: rgba(243, 243, 243, 0.77);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 10px 0;
`

export const ProgressFill = styled.div`
  height: 100%;
  background-color: rgba(43, 115, 163, 0.69);
  border-radius: 10px;
  animation: ${progressAnimation} 2s ease-in-out forwards;
`

export const ProgressText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333;
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 1rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin: 0;
`

export const Text = styled.p`
  font-size: 1rem;
  color: #444;
  text-align: center;
  margin: 0;
  max-width: 600px;
  line-height: 1.5;
`

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin: 0;
`
