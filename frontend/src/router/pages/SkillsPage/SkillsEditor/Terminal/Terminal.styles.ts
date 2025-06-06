import styled from 'styled-components'

export const TerminalContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #1e1e1e;
  border-top: 1px solid #222;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', 'Monaco', monospace;
  font-size: 13px;
  color: #d4d4d4;
  z-index: 10;
  padding: 10px 18px 10px 18px;
  box-sizing: border-box;
  min-height: 80px;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.12);
`
export const TerminalLineWrap = styled.div<{ visible: boolean }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(20px)')};
  transition:
    opacity 0.35s,
    transform 0.35s;
  will-change: opacity, transform;
  height: 22px;
  line-height: 22px;
  display: flex;
  align-items: center;
  white-space: pre;
`
export const TerminalCommand = styled.span`
  color: #fff;
`
export const TerminalPath = styled.span`
  color: #569cd6;
`
export const TerminalBranch = styled.span`
  color: #b5cea8;
`
export const TerminalBang = styled.span`
  color: #d7ba7d;
`
export const TerminalArrow = styled.span`
  color: #b5cea8;
  margin-right: 4px;
`
