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
  height: 100vh;
  color: #000;
  overflow: hidden;
  position: relative;
`

export const Main = styled.main`
  flex: 1;
  padding: 24px 32px 16px 32px;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: 1px;

  @media (max-width: 1280px) {
    margin-bottom: 0.3rem;
    padding: 0;
    visibility: visible;

    @media (max-width: 768px) {
      visibility: hidden;
      margin-bottom: 15px;
    }
  }
`

export const IconsWrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 48px;
  z-index: 10;

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
  }
`

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 100;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: gray;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  }
`

export const MobileSidebar = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: fit-content;
  min-width: 180px;
  max-width: 250px;
  height: 100vh;
  background: white;
  z-index: 90;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  padding: 0 12px 0 12px;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 80;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: block;
  }
`
