import { useState, useEffect } from 'react'
import MatrixRain from './MatrixRain/MatrixRain'
import ArrowKeysGuide from './ArrowKeysGuide/ArrowKeysGuide'
import Game from './Game/Game'
import { Wrapper, NoScroll, MobileContentWrapper } from './EducationPage.styles'
import { useAppContext } from '../../../context/AppContext'
import MobileContent from './MobileContent/MobileContent'

const EducationPage = () => {
  const { isMobile } = useAppContext()
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= 1280 && window.innerHeight <= 725,
  )

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1280 && window.innerHeight <= 725)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <NoScroll />
      <Wrapper>
        {isMobile && (
          <MobileContentWrapper>
            <MobileContent />
          </MobileContentWrapper>
        )}
        <MatrixRain />
        {!isMobile && <ArrowKeysGuide />}
        {!isMobile && <Game isSmallScreen={isSmallScreen} />}
      </Wrapper>
    </>
  )
}

export default EducationPage
