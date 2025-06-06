import React, { useEffect, useState } from 'react'
import { SkillsEditorProps } from './model'
import {
  EditorContainer,
  EditorHeader,
  EditorBody,
  LineNumbers,
  CodeBlock,
  CodeLine,
  Circle,
} from './SkillsEditor.styles'
import { CIRCLE_HEADER_PARAMS } from './constants'
import { FILE_NAME } from '../constants'
import Terminal from './Terminal/Terminal'

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
        {CIRCLE_HEADER_PARAMS.map(({ color, mr }) => (
          <Circle key={color} color={color} mr={mr} />
        ))}
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
