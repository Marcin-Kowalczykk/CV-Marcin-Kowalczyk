import styled from 'styled-components'

export const PlatformWrapper = styled.div<{ active: boolean; width: number | string }>`
  width: ${({ width }) => width}px;
  height: 28px;
  background: ${({ active }) =>
    active
      ? 'linear-gradient(180deg, #e0e6ff 60%, #bfc8e6 100%)'
      : 'linear-gradient(180deg, #bfc8e6 60%, #a0a8c0 100%)'};
  border-radius: 16px 22px 18px 20px / 18px 16px 22px 20px;
  margin: 0 auto;
  position: relative;
  transition:
    background 0.3s,
    box-shadow 0.3s;
  box-shadow:
    0 6px 18px 4px rgba(60, 60, 120, 0.25),
    0 2px 0 #fff8 inset;
  border: 2.5px solid #eaf0ff;
  filter: drop-shadow(0 2px 8px #aab6e3cc)
    ${({ active }) => (active ? 'drop-shadow(0 0 16px #00ffb3cc)' : '')};
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${({ active }) =>
      active
        ? 'repeating-linear-gradient(135deg, rgba(0,255,128,0.22) 0 6px, transparent 6px 12px)'
        : 'repeating-linear-gradient(135deg, rgba(255,255,255,0.13) 0 6px, transparent 6px 12px)'};
    pointer-events: none;
    z-index: 1;
    ${({ active }) => (active ? 'box-shadow: 0 0 16px 2px #00ffb3cc, 0 0 32px 8px #00ffb344;' : '')}
  }
`

export const PlatformLabel = styled.div`
  text-align: center;
  margin-top: 6px;
  color: #222;
  font-size: 15px;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
`
