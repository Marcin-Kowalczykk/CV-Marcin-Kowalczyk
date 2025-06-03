import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { StyledSVG } from './SVGComet.styles'

const SVGComet: React.FC<{ color: string }> = ({ color }) => {
  const size = 56
  const center = size / 2
  const radius = 22
  const tailLength = 8
  const tailOffsets = Array.from({ length: tailLength }, (_, i) => i * -12)

  const [angle, setAngle] = useState(0)
  useEffect(() => {
    let frame: number
    const animate = () => {
      setAngle((prev) => (prev + 2) % 360)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const getPos = (deg: number, r: number) => {
    const rad = (deg * Math.PI) / 180
    return {
      x: center + r * Math.cos(rad),
      y: center + r * Math.sin(rad),
    }
  }

  const tailPos = tailOffsets.map((offset) => getPos(angle + offset, radius))

  return (
    <StyledSVG width={size} height={size}>
      {tailPos.map((pos, i) => (
        <motion.circle
          key={i}
          cx={pos.x}
          cy={pos.y}
          r={3 - i * 0.3}
          fill={color}
          style={{ opacity: 0.75 - i * 0.05 }}
        />
      ))}
    </StyledSVG>
  )
}

export default SVGComet
