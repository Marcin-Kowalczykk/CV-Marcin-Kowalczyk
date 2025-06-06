import { useState, useCallback } from 'react'
import SkillsEditor from './SkillsEditor/SkillsEditor'
import GithubReadme from './GithubReadme/GithubReadme'
import { editorMarkdown } from './constants'
import { SkillsPageContainer, SkillsPageColumn, SkillsPageColumnGithub } from './SkillsPage.styles'

const SkillsPage: React.FC = () => {
  const [showReadmeContent, setShowReadmeContent] = useState(false)

  const handleTerminalEnd = useCallback(() => {
    setShowReadmeContent(true)
  }, [])

  return (
    <SkillsPageContainer>
      <SkillsPageColumn borderRight>
        <SkillsEditor markdown={editorMarkdown} onTerminalEnd={handleTerminalEnd} />
      </SkillsPageColumn>
      <SkillsPageColumnGithub>{showReadmeContent && <GithubReadme show />}</SkillsPageColumnGithub>
    </SkillsPageContainer>
  )
}

export default SkillsPage
