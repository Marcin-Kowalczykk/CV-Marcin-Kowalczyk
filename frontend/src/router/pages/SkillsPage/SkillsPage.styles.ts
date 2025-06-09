import styled from 'styled-components'

export const SkillsPageContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #0d1117;
  overflow: hidden;
`

export const SkillsPageColumn = styled.div<{ borderRight?: boolean }>`
  flex: 1;
  ${({ borderRight }) => borderRight && 'border-right: 1px solid #222;'}
  min-width: 0;
  display: flex;
  flex-direction: column;
`

export const SkillsPageColumnGithub = styled(SkillsPageColumn)`
  align-items: center;
  justify-content: center;
`
