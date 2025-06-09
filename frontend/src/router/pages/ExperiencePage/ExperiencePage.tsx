import Sidebar from './Sidebar/Sidebar'
import TopIcons from './TopIcons/TopIcons'
import { useState, useEffect, useRef } from 'react'
import HearthConfetti from './HearthConfetti/HearthConfetti'
import SearchTab from './SearchTab/SearchTab'
import Products from './Products/Products'
import {
  Wrapper,
  Main,
  PageTitle,
  IconsWrapper,
  HamburgerButton,
  MobileSidebar,
  Overlay,
  BottomMessage,
  BottomOverlay,
} from './ExperiencePage.styles'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from '../../../context/AppContext'

const ExperiencePage = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const { isMobile, windowSize } = useAppContext()
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const { scrollHeight, scrollTop, clientHeight } = mainRef.current
        const isBottom = scrollHeight - scrollTop - clientHeight < 10
        setIsAtBottom(isBottom)
      }
    }

    const mainElement = mainRef.current
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll)
      }
    }
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <Wrapper>
      <HamburgerButton onClick={toggleMobileMenu} isOpen={isMobileMenuOpen}>
        <FaBars size={24} />
      </HamburgerButton>
      <MobileSidebar isOpen={isMobileMenuOpen}>
        <Sidebar />
      </MobileSidebar>
      <Overlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
      <IconsWrapper>
        <HearthConfetti showConfetti={showConfetti} isFading={isFading} windowSize={windowSize} />
        <TopIcons onHeartClick={handleHeartClick} />
      </IconsWrapper>
      {!isMobile && <Sidebar />}
      <Main ref={mainRef}>
        <PageTitle>PRODUCTS</PageTitle>
        <SearchTab />
        <Products />
      </Main>
      <BottomOverlay isVisible={isAtBottom} />
      <BottomMessage isVisible={isAtBottom}>{`It's not real e-commerce 😉`}</BottomMessage>
    </Wrapper>
  )
}

export default ExperiencePage
