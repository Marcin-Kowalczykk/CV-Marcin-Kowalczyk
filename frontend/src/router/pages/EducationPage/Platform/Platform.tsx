import { PlatformWrapper, PlatformLabel } from './Platform.styles'
import { IPlatformProps } from './Platform.model'

const Platform = ({ active, label, style, width = 480 }: IPlatformProps) => (
  <div style={style}>
    <PlatformWrapper active={active} width={width} />
    {label && <PlatformLabel>{label}</PlatformLabel>}
  </div>
)

export default Platform
