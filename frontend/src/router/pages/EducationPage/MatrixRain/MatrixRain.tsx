import React, { useEffect, useRef } from 'react'
import { Canvas } from './MatrixRain.styles'
import { draw, resizeCanvas } from './helpers'
import { DROPS, FONT_SIZE } from './constants'

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    resizeCanvas(canvas)
    window.addEventListener('resize', () => resizeCanvas(canvas))

    const columns = Math.floor(canvas.width / FONT_SIZE)

    for (let i = 0; i < columns; i++) {
      DROPS[i] = Math.floor(Math.random() * -canvas.height)
    }

    const interval = setInterval(() => draw(ctx, canvas, FONT_SIZE, DROPS), 33)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', () => resizeCanvas(canvas))
    }
  }, [])

  return <Canvas ref={canvasRef} />
}

export default MatrixRain
