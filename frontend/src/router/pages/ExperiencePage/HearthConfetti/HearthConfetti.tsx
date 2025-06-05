import Confetti from 'react-confetti'
import React from 'react'
import { ConfettiWrapper } from './HearthConfetti.styles'
import { HearthConfettiProps } from './model'

const HearthConfetti: React.FC<HearthConfettiProps> = ({ showConfetti, isFading, windowSize }) => {
  if (!showConfetti) return null
  return (
    <ConfettiWrapper isFading={isFading}>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={300}
        colors={['#ff6b6b', '#ff0000', '#ff69b4']}
        gravity={0.2}
        initialVelocityY={8}
        drawShape={(ctx) => {
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.bezierCurveTo(-8, -8, -16, 0, 0, 16)
          ctx.bezierCurveTo(16, 0, 8, -8, 0, 0)
          ctx.fill()
        }}
        confettiSource={{ x: windowSize.width / 2, y: 0, w: 0, h: 0 }}
        recycle={false}
      />
    </ConfettiWrapper>
  )
}

export default HearthConfetti
