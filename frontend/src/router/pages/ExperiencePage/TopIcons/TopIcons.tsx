import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { Modal } from '../../../../components/Modal/Modal'
import { PROFILE_TEXT } from './constants'
import { IconButton, IconsRow, ProfileText } from './TopIcons.styles'
import { handleCartClick, handleHeartClick } from './helpers'
import GithubIcon from '../../../../components/Icons/GithubIcon'
import LinkedinIcon from '../../../../components/Icons/LinkedinIcon'
import { useAppContext } from '../../../../context/AppContext'

const TopIcons = ({ onHeartClick }: { onHeartClick: () => void }) => {
  const { isMobile } = useAppContext()
  const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <Modal isOpen={showProfile} onClose={() => setShowProfile(false)}>
        <ProfileText>{PROFILE_TEXT}</ProfileText>
      </Modal>
      <IconsRow>
        <LinkedinIcon />
        {!isMobile && <GithubIcon />}
        <IconButton
          onClick={() => handleHeartClick({ onHeartClick, isMobile })}
          aria-label="Favorites"
        >
          <AiOutlineHeart />
        </IconButton>
        <IconButton onClick={() => handleCartClick({ isMobile })} aria-label="Cart">
          <AiOutlineShoppingCart />
        </IconButton>
        <IconButton onClick={() => setShowProfile(true)} aria-label="Profile">
          <AiOutlineUser />
        </IconButton>
      </IconsRow>
    </>
  )
}

export default TopIcons
