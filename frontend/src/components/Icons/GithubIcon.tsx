import { IconButton } from './Icons.styles'
import { GITHUB_REDIRECT } from './constants'
import { FaGithub } from 'react-icons/fa'

const GithubIcon = () => (
  <IconButton
    href={GITHUB_REDIRECT}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Github"
    onClick={(event) => event.stopPropagation()}
  >
    <FaGithub />
  </IconButton>
)

export default GithubIcon
