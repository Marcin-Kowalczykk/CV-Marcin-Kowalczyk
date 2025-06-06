import styled, { keyframes } from 'styled-components'
import codeBg from '../../../assets/code-bg.svg'
import codeBgMobile from '../../../assets/code-bg-mobile.svg'
import mainPhoto from '../../../assets/main-photo.jpeg'

const codeRain = keyframes`
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
`

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background: #181c24;
  position: relative;
  overflow: hidden;
`

export const CodeBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, #16181c 80%, #20232a 100%);
  opacity: 0.25;
  z-index: 1;
  overflow: hidden;
`

export const CodeBackgroundInner = styled.div<{ isMobile: boolean }>`
  position: absolute;
  width: 100%;
  height: 200%;
  background: url(${({ isMobile }) => (isMobile ? codeBgMobile : codeBg)});
  background-size: 100% 50%;
  background-repeat: repeat-y;
  animation: ${codeRain} 20s linear infinite;
  will-change: transform;
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  text-shadow: 0 2px 8px #000a;

  @media (min-width: 768px) {
    padding-left: 5vw;
  }
`

export const Title = styled.h1`
  font-size: clamp(2rem, 8vw, 4rem);
  margin-bottom: 0.5rem;
  line-height: 1.1;
  cursor: default;
`

export const Subtitle = styled.p`
  font-size: clamp(1rem, 4vw, 2rem);
  opacity: 0.8;
  margin: 0;
  cursor: default;
`
export const Contact = styled.p`
  font-size: clamp(0.5rem, 4vw, 1rem);
  opacity: 0.8;
  margin: 0;
`

export const RightBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: url(${mainPhoto}) center center/cover no-repeat;
  filter: brightness(0.3) grayscale(0.3);
  z-index: 1;
  pointer-events: none;
  mask-image: linear-gradient(to right, transparent 0%, black 50%, black 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 50%, black 100%);

  @media (min-width: 768px) {
    width: 50vw;
    mask-image: linear-gradient(to right, transparent 0%, black 25%, black 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 25%, black 100%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(24, 28, 50, 0.55);
    pointer-events: none;
  }
`
