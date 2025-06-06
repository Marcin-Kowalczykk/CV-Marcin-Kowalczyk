import { IconButton } from './Icons.styles'
import { LINKEDIN_REDIRECT } from './constants'
import { FaLinkedin } from 'react-icons/fa'

const LinkedinIcon = () => (
  <IconButton
    href={LINKEDIN_REDIRECT}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Linkedin"
    onClick={(event) => event.stopPropagation()}
  >
    <FaLinkedin />
  </IconButton>
)

export default LinkedinIcon
