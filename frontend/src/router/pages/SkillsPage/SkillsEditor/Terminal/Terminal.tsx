import React, { useEffect, useState } from 'react'
import { ITerminalProps } from './model'
import { TERMINAL_PATH, TERMINAL_BRANCH, TERMINAL_LINES } from './constants'
import {
  TerminalContainer,
  TerminalLineWrap,
  TerminalCommand,
  TerminalPath,
  TerminalBranch,
  TerminalBang,
  TerminalArrow,
} from './Terminal.styles'

const Terminal: React.FC<ITerminalProps> = ({ onTerminalEnd }) => {
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
