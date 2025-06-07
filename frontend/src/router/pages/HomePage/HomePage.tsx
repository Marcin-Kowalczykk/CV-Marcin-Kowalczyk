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
  Contact,
} from './HomePage.styles'
import MediaButtons from './MediaButtons/MediaButtons'
import { toast } from 'react-toastify'

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    toast.info('Click on button to enable music !', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        color: 'darkGray',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        marginBottom: isMobile ? '100px' : '0',
      },
    })
  }, [])

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
      <MediaButtons />
      <Content>
        <Title>Marcin Kowalczyk</Title>
        <Subtitle>Frontend Engineer</Subtitle>
        <Contact onClick={(event) => event.stopPropagation()}>+48 785 931 007</Contact>
        <Contact onClick={(event) => event.stopPropagation()}>
          kowalczyk.marcin1997@gmail.com
        </Contact>
      </Content>
      <AudioButton audioSrc={`${import.meta.env.BASE_URL}bg-home.mp3`} />
    </Wrapper>
  )
}

export default HomePage
