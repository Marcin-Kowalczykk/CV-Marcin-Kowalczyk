import styled from 'styled-components'

export const AnimatedDrawer = styled.div<{
  open: boolean
  top: number
  left: number
  height: number
  width: number
}>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  height: ${({ height }) => height}px;
  width: ${({ open }) => (open ? '650px' : '0')};
  background: #fff;
  border-radius: 0 16px 16px 0;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1280px) {
    width: ${({ open }) => (open ? '500px' : '0')};
  }
  @media (max-width: 900px) {
    left: 0;
    top: ${({ top, height }) => top + height}px;
    width: 98vw;
    height: auto;
    border-radius: 0 0 16px 16px;
    flex-direction: column;
  }
`

export const DrawerContent = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px 16px;
  gap: 32px;
  box-sizing: border-box;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  @media (max-width: 1280px) {
    padding: 10px 10px 20px 10px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const DrawerColumn = styled.div`
  flex: 1;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 1280px) {
    gap: 4px;
  }
`

export const DrawerTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2px;
  color: #222;

  @media (max-width: 1280px) {
    font-size: 14px;
    padding: 0;
  }
`

export const DrawerList = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: #444;
  font-size: 15px;
  line-height: 1.6;

  @media (max-width: 1280px) {
    font-size: 12px;
  }
`

export const DrawerClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 28px;
  color: #888;
  cursor: pointer;
  z-index: 2200;
  transition: color 0.2s;
  &:hover {
    color: #222;
  }
`
