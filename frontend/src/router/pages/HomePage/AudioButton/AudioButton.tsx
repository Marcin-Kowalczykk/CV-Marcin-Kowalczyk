import { useRef, useState, useEffect } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { MusicButton, HeadphonesIcon } from './AudioButton.styles'

interface AudioButtonProps {
  audioSrc: string
}

export const AudioButton = ({ audioSrc }: AudioButtonProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    toast.info('Click on button to enable music !', {
      position: 'bottom-right',
      autoClose: 5000,
      toastId: 'autoplay-blocked',
    })
  }, [])

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
