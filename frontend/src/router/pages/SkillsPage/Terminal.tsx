import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type TerminalProps = {
  onTerminalEnd: () => void
}

const TerminalContainer = styled.div`
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
const TerminalLineWrap = styled.div<{ visible: boolean }>`
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
const TerminalCommand = styled.span`
  color: #fff;
`
const TerminalPath = styled.span`
  color: #569cd6;
`
const TerminalBranch = styled.span`
  color: #b5cea8;
`
const TerminalBang = styled.span`
  color: #d7ba7d;
`
const TerminalArrow = styled.span`
  color: #b5cea8;
  margin-right: 4px;
`

const TERMINAL_LINES = [
  'git add .',
  'git commit -m "Initial Readme File"',
  'git push origin mk-skills-page',
]

const TERMINAL_PATH = '~/Documents/CV-Marcin-Kowalczyk'
const TERMINAL_BRANCH = 'mk-skills-page'

const Terminal: React.FC<TerminalProps> = ({ onTerminalEnd }) => {
  const [visibleLines, setVisibleLines] = useState([false, false, false])
  const [typed, setTyped] = useState(['', '', ''])
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step < TERMINAL_LINES.length) {
      setTimeout(
        () => {
          setVisibleLines((prev) => {
            const updated = [...prev]
            updated[step] = true

            return updated
          })
        },
        step === 0 ? 200 : 400,
      )
    }
  }, [step])

  useEffect(() => {
    if (!visibleLines[step]) return
    if (step >= TERMINAL_LINES.length) return
    let letter = 0
    const line = TERMINAL_LINES[step]
    const typeInterval = setInterval(() => {
      setTyped((prev) => {
        const updated = [...prev]
        updated[step] = line.slice(0, letter + 1)

        return updated
      })
      letter++
      if (letter >= line.length) {
        clearInterval(typeInterval)
        setTimeout(() => setStep((step) => step + 1), 500)
      }
    }, 40)

    return () => clearInterval(typeInterval)
  }, [visibleLines, step])

  useEffect(() => {
    if (step === TERMINAL_LINES.length) {
      setTimeout(onTerminalEnd, 300)
    }
  }, [step, onTerminalEnd])

  return (
    <TerminalContainer>
      {TERMINAL_LINES.map((_, idx) => (
        <TerminalLineWrap key={idx} visible={visibleLines[idx]}>
          <TerminalPath>{TERMINAL_PATH} </TerminalPath>
          <TerminalBranch>{TERMINAL_BRANCH}</TerminalBranch>
          <TerminalBang> !1 </TerminalBang>
          <TerminalArrow>&gt;</TerminalArrow>
          <TerminalCommand>{typed[idx]}</TerminalCommand>
        </TerminalLineWrap>
      ))}
    </TerminalContainer>
  )
}

export default Terminal
