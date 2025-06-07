import Sidebar from './Sidebar/Sidebar'
import TopIcons from './TopIcons/TopIcons'
import { useState } from 'react'
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
} from './ExperiencePage.styles'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from '../../../context/AppContext'

const ExperiencePage = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isMobile, windowSize } = useAppContext()

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
      <Main>
        <PageTitle>PRODUCTS</PageTitle>
        <SearchTab />
        <Products />
      </Main>
    </Wrapper>
  )
}

export default ExperiencePage
