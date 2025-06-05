import { StarsOpinionsProps } from './model'
import { StarsOpinionsWrapper, Stars, OpinionsText } from './StarsOpinions.styles'

const StarsOpinions = ({ opinions }: StarsOpinionsProps) => (
  <StarsOpinionsWrapper>
    <Stars>{'★★★★★'}</Stars>
    <OpinionsText>{opinions} opinions</OpinionsText>
  </StarsOpinionsWrapper>
)

export default StarsOpinions
