import React, { useEffect, useState } from 'react'
import { GuideContainer, ArrowKey, ArrowIcon } from './ArrowKeysGuide.styles'

const ArrowKeysGuide: React.FC = () => {
  const [activeKey, setActiveKey] = useState<'up' | 'left' | 'right' | null>(null)

  useEffect(() => {
    const directions: ('up' | 'left' | 'right')[] = ['up', 'left', 'right']
    let currentIndex = 0

    const interval = setInterval(() => {
      setActiveKey(directions[currentIndex])
      currentIndex = (currentIndex + 1) % directions.length
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <GuideContainer>
      <ArrowKey active={activeKey === 'up'}>
        <ArrowIcon direction="up" />
      </ArrowKey>
      <div style={{ display: 'flex', gap: '8px' }}>
        <ArrowKey active={activeKey === 'left'}>
          <ArrowIcon direction="left" />
        </ArrowKey>
        <ArrowKey active={false}>
          <ArrowIcon direction="down" />
        </ArrowKey>
        <ArrowKey active={activeKey === 'right'}>
          <ArrowIcon direction="right" />
        </ArrowKey>
      </div>
      <p>Jump one the platform to unlock information</p>
    </GuideContainer>
  )
}

export default ArrowKeysGuide
