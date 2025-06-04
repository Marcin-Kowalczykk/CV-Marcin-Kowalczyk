import { PlayerImg } from './Player.styles'

const Player = ({ style }: { style?: React.CSSProperties }) => {
  return <PlayerImg src="/favicon.png" alt="Player" style={style} />
}

export default Player
