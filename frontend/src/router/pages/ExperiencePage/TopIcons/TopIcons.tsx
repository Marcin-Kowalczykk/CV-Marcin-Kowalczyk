import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { Modal } from '../../../../components/Modal/Modal'
import { TopIconsProps } from './model'
import { GITHUB_REDIRECT, LINKEDIN_REDIRECT, PROFILE_TEXT } from './constants'
import { IconButton, IconsRow } from './TopIcons.styles'
import { handleCartClick } from './helpers'

const TopIcons = ({ onHeartClick }: TopIconsProps) => {
  const [showProfile, setShowProfile] = useState(false)

  const handleHeartClick = () => {
    onHeartClick()
    toast('Thank you!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: 'transparent',
        color: 'red',
        fontSize: '1.2rem',
        fontWeight: 'bold',
      },
    })
  }

  return (
    <>
      <Modal isOpen={showProfile} onClose={() => setShowProfile(false)}>
        <p>{PROFILE_TEXT}</p>
      </Modal>
      <IconsRow>
        <IconButton
          href={LINKEDIN_REDIRECT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </IconButton>
        <IconButton
          href={GITHUB_REDIRECT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </IconButton>
        <IconButton onClick={handleHeartClick} aria-label="Favorites">
          <AiOutlineHeart />
        </IconButton>
        <IconButton onClick={handleCartClick} aria-label="Cart">
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
