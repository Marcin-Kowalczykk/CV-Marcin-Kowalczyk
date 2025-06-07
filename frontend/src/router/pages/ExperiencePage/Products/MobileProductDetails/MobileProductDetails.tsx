import { PROJECTS } from '../constants'
import { RESPONSIBILITIES } from '../constants'
import { Section, SectionTitle, List, ListItem } from './MobileProductDetails.styles'

const MobileProductDetails = () => (
  <div>
    <Section>
      <SectionTitle>Projects:</SectionTitle>
      <List>
        {PROJECTS.map((project, i) => (
          <ListItem key={i}>{project}</ListItem>
        ))}
      </List>
    </Section>
    <Section>
      <SectionTitle>Responsibilities:</SectionTitle>
      <List>
        {RESPONSIBILITIES.map((resp, i) => (
          <ListItem key={i}>{resp}</ListItem>
        ))}
      </List>
    </Section>
  </div>
)

export default MobileProductDetails
