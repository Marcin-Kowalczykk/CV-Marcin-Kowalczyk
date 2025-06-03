import { useState, useEffect } from 'react'
import { AudioButton } from './AudioButton/AudioButton'
import {
  Wrapper,
  CodeBackground,
  CodeBackgroundInner,
  Content,
  Title,
  Subtitle,
  RightBackground,
} from './HomePage.styles'

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Wrapper>
      <RightBackground />
      <CodeBackground>
        <CodeBackgroundInner isMobile={isMobile} />
      </CodeBackground>
      <Content>
        <Title>Marcin Kowalczyk</Title>
        <Subtitle>Frontend Engineer</Subtitle>
      </Content>
      <AudioButton audioSrc={`${import.meta.env.BASE_URL}bg-home.mp3`} />
    </Wrapper>
  )
}

export default HomePage
