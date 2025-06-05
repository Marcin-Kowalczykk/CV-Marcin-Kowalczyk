import { useState, useCallback } from 'react'
import styled from 'styled-components'
import SkillsEditor from './SkillsEditor'
import SkillsReadme from './SkillsReadme'
import { CATEGORIES } from '../ExperiencePage/Sidebar/constants'

const editorMarkdown = `
## Marcin Kowalczyk

### Skills

${CATEGORIES.map((cat) => `- ${cat.name}`).join('\n')}
`

const SkillsPageContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #0d1117;
`

const SkillsPageColumn = styled.div<{ borderRight?: boolean }>`
  flex: 1;
  ${({ borderRight }) => borderRight && 'border-right: 1px solid #222;'}
  min-width: 0;
  display: flex;
  flex-direction: column;
`

const SkillsPageColumnGithub = styled(SkillsPageColumn)`
  align-items: center;
  justify-content: center;
`

export default function SkillsPage() {
  const [showReadmeContent, setShowReadmeContent] = useState(false)

  const handleTerminalEnd = useCallback(() => {
    setShowReadmeContent(true)
  }, [])

  return (
    <SkillsPageContainer>
      <SkillsPageColumn borderRight>
        <SkillsEditor markdown={editorMarkdown} onTerminalEnd={handleTerminalEnd} />
      </SkillsPageColumn>
      <SkillsPageColumnGithub>
        {showReadmeContent && <SkillsReadme show categories={CATEGORIES} />}
      </SkillsPageColumnGithub>
    </SkillsPageContainer>
  )
}
