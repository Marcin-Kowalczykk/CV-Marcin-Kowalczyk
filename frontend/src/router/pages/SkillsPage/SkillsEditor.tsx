import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Terminal from './Terminal'

type SkillsEditorProps = {
  markdown: string
  onTerminalEnd: () => void
}

const VS_CODE_BG = '#1e1e1e'
const VS_CODE_BORDER = '#2c2c32'
const VS_CODE_HEADER = '#23232b'
const VS_CODE_TEXT = '#d4d4d4'
const VS_CODE_LINENUM = '#858585'
const FILE_NAME = 'README.md'

const EditorContainer = styled.div`
  background: ${VS_CODE_BG};
  height: 100%;
  border-right: 1px solid ${VS_CODE_BORDER};
  display: flex;
  flex-direction: column;
  font-family: Consolas, 'Fira Mono', 'Menlo', 'Monaco', 'monospace';
  position: relative;
`

const EditorHeader = styled.div`
  background: ${VS_CODE_HEADER};
  color: ${VS_CODE_TEXT};
  padding: 6px 12px;
  border-bottom: 1px solid ${VS_CODE_BORDER};
  font-family: inherit;
  font-size: 13px;
  display: flex;
  align-items: center;
`

const EditorBody = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  font-family: inherit;
  font-weight: bold;
  font-size: 14px;
  color: ${VS_CODE_TEXT};
`

const LineNumbers = styled.div`
  background: ${VS_CODE_BG};
  color: ${VS_CODE_LINENUM};
  text-align: right;
  user-select: none;
  padding: 16px 8px;
  min-width: 36px;
  border-right: 1px solid ${VS_CODE_BORDER};
`

const CodeBlock = styled.pre`
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
`

const CodeLine = styled.div`
  height: 22px;
  line-height: 22px;
`

const Circle = styled.span<{ color: string; mr?: number }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
  display: inline-block;
  margin-right: ${({ mr }) => (mr ? `${mr}px` : '0')};
`

const SkillsEditor: React.FC<SkillsEditorProps> = ({ markdown, onTerminalEnd }) => {
  const [displayed, setDisplayed] = useState('')
  const [showTerminal, setShowTerminal] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setShowTerminal(false)
    let i = 0
    const interval = setInterval(() => {
      if (markdown[i] !== undefined) {
        setDisplayed((prev) => prev + markdown[i])
      }
      i++
      if (i >= markdown.length) {
        clearInterval(interval)
        setTimeout(() => setShowTerminal(true), 400)
      }
    }, 18)
    return () => clearInterval(interval)
  }, [markdown])

  const cleanDisplayed = displayed.replace(/^\n+/, '')
  let lines = cleanDisplayed.split('\n')
  if (lines.length > 1 && lines[lines.length - 1] === 'undefined') {
    lines = lines.slice(0, -1)
  }
  if (lines.length > 1 && lines[lines.length - 1] === '' && !markdown.endsWith('\n')) {
    lines = lines.slice(0, -1)
  }

  return (
    <EditorContainer>
      <EditorHeader>
        <Circle color="#e06c75" mr={6} />
        <Circle color="#e5c07b" mr={6} />
        <Circle color="#98c379" mr={12} />
        <span style={{ fontWeight: 600 }}>{FILE_NAME}</span>
      </EditorHeader>
      <EditorBody>
        <LineNumbers>
          {lines.map((_, idx) => (
            <CodeLine key={idx}>{idx + 1}</CodeLine>
          ))}
        </LineNumbers>
        <CodeBlock>
          {lines.map((line, idx) => (
            <CodeLine key={idx}>{line || '\u00A0'}</CodeLine>
          ))}
        </CodeBlock>
      </EditorBody>
      {showTerminal && <Terminal onTerminalEnd={onTerminalEnd} />}
    </EditorContainer>
  )
}

export default SkillsEditor
