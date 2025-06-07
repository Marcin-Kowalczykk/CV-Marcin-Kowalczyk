import { useRef, useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import { MusicButton, HeadphonesIcon } from './AudioButton.styles'

interface AudioButtonProps {
  audioSrc: string
}

export const AudioButton = ({ audioSrc }: AudioButtonProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause()
        setPlaying(false)
      } else {
        audioRef.current.play().then(() => {
          setPlaying(true)
        })
      }
    }
  }

  const handleAudioPlay = () => setPlaying(true)
  const handleAudioPause = () => setPlaying(false)
  const handleAudioEnded = () => setPlaying(false)

  return (
    <>
      <MusicButton
        onClick={handlePlay}
        playing={playing}
        aria-label={playing ? 'Pause music' : 'Play music'}
        data-music-button
      >
        <HeadphonesIcon playing={playing} />
        {playing ? <FaPause /> : <FaPlay />}
      </MusicButton>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        onPlay={handleAudioPlay}
        onPause={handleAudioPause}
        onEnded={handleAudioEnded}
      />
    </>
  )
}
