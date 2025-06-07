import { PLATFORM_DESCRIPTIONS } from '../constants'
import {
  PlatformsWrapper,
  PlatformMobileWrapper,
  PlatformAndDesc,
  PlatformDesc,
  PlatformDescText,
} from './MobileContent.styles'

const ANIMATION_OFFSET = 60

const MobileContent = () => (
  <PlatformsWrapper>
    {PLATFORM_DESCRIPTIONS.map((desc, idx) => (
      <PlatformAndDesc key={idx}>
        <PlatformMobileWrapper
          active={false}
          width={'100%'}
          initial={{ x: ANIMATION_OFFSET, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
        />
        <PlatformDesc
          initial={{ x: ANIMATION_OFFSET, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.45,
            delay: idx * 0.15 + 0.18 + idx * 0.07,
          }}
        >
          {desc.map((line, index) => (
            <PlatformDescText key={index}>{line.text}</PlatformDescText>
          ))}
        </PlatformDesc>
      </PlatformAndDesc>
    ))}
  </PlatformsWrapper>
)

export default MobileContent
