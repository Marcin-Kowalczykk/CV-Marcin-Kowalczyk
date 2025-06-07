import { FC } from 'react'
import { Container, PreMobileContentList } from './MobileContentList.styles'

const MobileContentList: FC<{ items: string[] }> = ({ items }) => {
  return (
    <Container>
      <PreMobileContentList>
        {`<ul>\n  ${items.map((item) => `  <li> ${item} </li>`).join('\n  ')}\n</ul>`}
      </PreMobileContentList>
    </Container>
  )
}

export default MobileContentList
