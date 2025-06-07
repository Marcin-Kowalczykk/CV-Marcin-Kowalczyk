import styled from 'styled-components'
import { VS_CODE } from '../constants'

export const EditorContainer = styled.div`
  background: ${VS_CODE.BG};
  height: 100%;
  border-right: 1px solid ${VS_CODE.BORDER};
  display: flex;
  flex-direction: column;
  font-family: Consolas, 'Fira Mono', 'Menlo', 'Monaco', 'monospace';
  position: relative;
`

export const EditorHeader = styled.div`
  background: ${VS_CODE.HEADER};
  color: ${VS_CODE.TEXT};
  padding: 6px 12px;
  border-bottom: 1px solid ${VS_CODE.BORDER};
  font-family: inherit;
  font-size: 13px;
  display: flex;
  align-items: center;
`

export const EditorBody = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  font-family: inherit;
  font-weight: bold;
  font-size: 14px;
  color: ${VS_CODE.TEXT};

  @media (max-width: 768px) {
    font-size: 9px;
  }
`

export const LineNumbers = styled.div`
  background: ${VS_CODE.BG};
  color: ${VS_CODE.LINENUM};
  text-align: right;
  user-select: none;
  padding: 16px 8px;
  min-width: 36px;
  border-right: 1px solid ${VS_CODE.BORDER};

  @media (max-width: 768px) {
    font-size: 9px;
    padding: 16px 4px;
  }
`

export const CodeBlock = styled.pre`
  background: none;
  margin: 0;
  padding: 16px;
  min-width: 0;
  flex: 1;
  white-space: pre;
  overflow: auto;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;

  @media (max-width: 768px) {
    padding: 16px 4px;
  }
`

export const CodeLine = styled.div`
  height: 22px;
  line-height: 22px;
`

export const Circle = styled.span<{ color: string; mr?: number }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
  display: inline-block;
  margin-right: ${({ mr }) => (mr ? `${mr}px` : '0')};
`
