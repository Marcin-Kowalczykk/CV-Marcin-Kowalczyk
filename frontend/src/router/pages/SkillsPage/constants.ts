import { SKILLS_LIST } from '../../../constants'

export const editorMarkdown = `
## Marcin Kowalczyk

### Skills

${SKILLS_LIST.map((cat) => `- ${cat.name}`).join('\n')}
`

export const VS_CODE: {
  BG: string
  BORDER: string
  HEADER: string
  TEXT: string
  LINENUM: string
} = {
  BG: '#1e1e1e',
  BORDER: '#2c2c32',
  HEADER: '#23232b',
  TEXT: '#d4d4d4',
  LINENUM: '#858585',
}

export const FILE_NAME = 'README.md'
