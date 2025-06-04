import React, { useEffect, useRef, useState } from 'react'
import { useSpring } from 'react-spring'
import Confetti from 'react-confetti'
import Player from './Player/Player'
import Platform from './Platform/Platform'
import MatrixRain from './MatrixRain/MatrixRain'
import ArrowKeysGuide from './ArrowKeysGuide/ArrowKeysGuide'
import { GAME_WIDTH, GAME_MARGIN, PLAYER_SIZE, PLATFORM_HEIGHT, GRAVITY, JUMP_VELOCITY, MOVE_SPEED, PLATFORM_DESCRIPTIONS, WIN_TEXT } from './constants' 
import { getPlatformPositions } from './helpers'
import {
  NoScroll,
  GameFont,
  GameWrapper,
  GameArea,
  WinCornerMessage,
  TypewriterText,
  Cursor,
  PlatformContainer,
  DescriptionBox,
  ResetButton,
  AnimatedPlayerWrapper,
  SlideInTextLineStyled,
} from './EducationPage.styles'

const EducationPage = () => {
  const [gameHeight, setGameHeight] = useState(Math.min(window.innerHeight - 2 * GAME_MARGIN, 800))
  useEffect(() => {
    const handleResize = () => {
      const newHeight = Math.min(window.innerHeight - 2 * GAME_MARGIN, 800)
      setGameHeight(newHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

 
  const [player, setPlayer] = useState({
    x: GAME_WIDTH / 2 - PLAYER_SIZE / 2,
    y: gameHeight - PLAYER_SIZE,
    vx: 0,
    vy: 0,
    onGround: false,
    standingPlatformIdx: -1,
  })
  const [platforms, setPlatforms] = useState(getPlatformPositions(gameHeight))

  const [win, setWin] = useState(false)
  const [confetti, setConfetti] = useState(false)

  const [displayedText, setDisplayedText] = useState<string[]>([])
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  const keys = useRef<{ [key: string]: boolean }>({})

  const gameAreaRef = useRef<HTMLDivElement>(null)

  const spring = useSpring({
    left: player.x,
    top: player.y,
    config: { tension: 300, friction: 30 },
  })

  useEffect(() => {
    setPlayer((prev) => ({ ...prev, y: gameHeight - PLAYER_SIZE }))
    setPlatforms(getPlatformPositions(gameHeight))
  }, [gameHeight])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.key] = true
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key] = false
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useEffect(() => {
    let animation: number
    const loop = () => {
      setPlayer((prev) => {
        const { x, y, onGround } = prev
        let { vx, vy } = prev
        if (keys.current['ArrowLeft']) vx = -MOVE_SPEED
        else if (keys.current['ArrowRight']) vx = MOVE_SPEED
        else vx = 0
        if (keys.current['ArrowUp'] && onGround) vy = JUMP_VELOCITY
        vy += GRAVITY
        const nextXRaw = x + vx
        const nextX = Math.max(0, Math.min(GAME_WIDTH - PLAYER_SIZE, nextXRaw))
        let nextY = y + vy
        let nextOnGround = false
        let standingPlatformIdx = -1
        const newPlatforms = [...platforms]
        for (let i = 0; i < platforms.length; i++) {
          const p = platforms[i]
          const playerCenter = nextX + PLAYER_SIZE / 2
          if (
            vy > 0 &&
            y + PLAYER_SIZE <= p.y &&
            nextY + PLAYER_SIZE >= p.y &&
            playerCenter > p.x &&
            playerCenter < p.x + p.width
          ) {
            nextY = p.y - PLAYER_SIZE
            vy = 0
            nextOnGround = true
            standingPlatformIdx = i
            if (!p.active) {
              newPlatforms[i] = { ...p, active: true }
            }
          }
        }
        if (newPlatforms.every((p) => p.active) && !win) {
          setWin(true)
          setConfetti(true)
        }
        if (nextY > gameHeight - PLAYER_SIZE) {
          nextY = gameHeight - PLAYER_SIZE
          vy = 0
          nextOnGround = true
          standingPlatformIdx = -1
        }
        setPlatforms(newPlatforms)
        return { x: nextX, y: nextY, vx, vy, onGround: nextOnGround, standingPlatformIdx }
      })
      animation = requestAnimationFrame(loop)
    }
    animation = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animation)
  }, [platforms, win, gameHeight])
  

  useEffect(() => {
    if (win) {
      const interval = setInterval(() => {
        if (currentTextIndex < WIN_TEXT.length) {
          const currentText = WIN_TEXT[currentTextIndex]
          if (currentCharIndex < currentText.length) {
            setDisplayedText((prev) => {
              const newTexts = [...prev]
              if (currentCharIndex === 0) {
                newTexts[currentTextIndex] = currentText[0]
              } else {
                newTexts[currentTextIndex] = currentText.slice(0, currentCharIndex + 1)
              }
              return newTexts
            })
            setCurrentCharIndex((prev) => prev + 1)
          } else {
            setCurrentTextIndex((prev) => prev + 1)
            setCurrentCharIndex(0)
          }
        } else {
          clearInterval(interval)
        }
      }, 80)
      return () => clearInterval(interval)
    }
  }, [win, currentTextIndex, currentCharIndex])

  useEffect(() => {
    if (gameAreaRef.current) {
      gameAreaRef.current.focus()
    }
  }, [])

  const handleRestart = () => {
    setPlayer({
      x: GAME_WIDTH / 2 - PLAYER_SIZE / 2,
      y: gameHeight - PLAYER_SIZE,
      vx: 0,
      vy: 0,
      onGround: false,
      standingPlatformIdx: -1,
    })
    setPlatforms(getPlatformPositions(gameHeight))
    setWin(false)
    setConfetti(false)
    setDisplayedText([])
    setCurrentTextIndex(0)
    setCurrentCharIndex(0)
  }

  return (
    <>
      <NoScroll />
      <GameWrapper>
        <MatrixRain />
        <ArrowKeysGuide />
        <GameArea gameHeight={gameHeight} tabIndex={0} ref={gameAreaRef}>
          <GameFont>
            {confetti && (
              <Confetti
                width={GAME_WIDTH}
                height={gameHeight}
                numberOfPieces={250}
                recycle={false}
              />
            )}
            {win && (
              <WinCornerMessage>
                {displayedText.map((text, index) => (
                  <TypewriterText
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  >
                    {text}
                  </TypewriterText>
                ))}
                {currentTextIndex < WIN_TEXT.length && (
                  <Cursor
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
                {currentTextIndex === WIN_TEXT.length && (
                  <ResetButton
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={handleRestart}
                  >
                    [reset]
                  </ResetButton>
                )}
              </WinCornerMessage>
            )}
            {platforms.map((p, i) => (
              <React.Fragment key={i}>
                <PlatformContainer left={p.x} top={p.y} width={p.width}>
                  <Platform active={p.active} width={p.width} />
                </PlatformContainer>
                {p.active && PLATFORM_DESCRIPTIONS[i] && (
                  <DescriptionBox
                    left={p.x}
                    top={p.y + PLATFORM_HEIGHT + 16}
                    width={p.width}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  >
                    {PLATFORM_DESCRIPTIONS[i].map((line, j) => (
                      <SlideInTextLineStyled
                        key={j}
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.5, delay: j * 0.12 }}
                        fontWeight={line.fontWeight}
                        fontSize={line.fontSize}
                        color={line.color}
                      >
                        {line.text}
                      </SlideInTextLineStyled>
                    ))}
                  </DescriptionBox>
                )}
              </React.Fragment>
            ))}
            <AnimatedPlayerWrapper style={spring}>
              <Player />
            </AnimatedPlayerWrapper>
          </GameFont>
        </GameArea>
      </GameWrapper>
    </>
  )
}

export default EducationPage
