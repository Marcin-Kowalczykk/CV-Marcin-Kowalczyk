import {
  Container,
  ProgressBar,
  ProgressFill,
  ProgressText,
  Title,
  Subtitle,
  Text,
} from './BonusPage.styles'

const BonusPage = () => {
  return (
    <Container>
      <ProgressBar>
        <ProgressFill />
        <ProgressText>36%</ProgressText>
      </ProgressBar>
      <Title>Future AI Assistant of Marcin Kowalczyk</Title>
      <Text>
        {` I'm currently completing a certificate from the excellent AI_DEVS course, so I decided to
        create several projects related to it at the end. One of them will be my AI assistant, which
        I'll place here.`}
      </Text>
      <Subtitle>Coming soon...</Subtitle>
    </Container>
  )
}

export default BonusPage
