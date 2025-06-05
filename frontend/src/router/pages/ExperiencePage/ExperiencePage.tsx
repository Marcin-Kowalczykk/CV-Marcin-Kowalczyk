import Sidebar from './Sidebar/Sidebar'
import TopIcons from './TopIcons/TopIcons'
import { useState, useEffect } from 'react'
import HearthConfetti from './HearthConfetti/HearthConfetti'
import SearchTab from './SearchTab/SearchTab'
import Products from './Products/Products'
import { Wrapper, Main, PageTitle, IconsWrapper } from './ExperiencePage.styles'

const ExperiencePage = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleHeartClick = () => {
    setShowConfetti(true)
    setIsFading(false)
    setTimeout(() => {
      setIsFading(true)
      setTimeout(() => {
        setShowConfetti(false)
        setIsFading(false)
      }, 1000)
    }, 2000)
  }

  return (
    <Wrapper>
      <IconsWrapper>
        <HearthConfetti showConfetti={showConfetti} isFading={isFading} windowSize={windowSize} />
        <TopIcons onHeartClick={handleHeartClick} />
      </IconsWrapper>
      <Sidebar />
      <Main>
        <PageTitle>PRODUCTS</PageTitle>
        <SearchTab />
        <Products />
      </Main>
    </Wrapper>
  )
}

export default ExperiencePage
