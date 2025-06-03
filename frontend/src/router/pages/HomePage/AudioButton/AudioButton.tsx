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
  const [autoTried, setAutoTried] = useState(false)

  const toggleMusic = () => {
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

  useEffect(() => {
    if (!autoTried && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true)
        })
        .catch(() => {
          toast.info(
            'Your browser is blocking automatic music playback. Click anywhere on the page or the music button to enable music.',
            { position: 'bottom-right', autoClose: 5000, toastId: 'autoplay-blocked' },
          )
        })
        .finally(() => setAutoTried(true))
    }
  }, [autoTried])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const isMusicButton = target.closest('[data-music-button]') !== null
      const shouldIgnore = target.closest('[data-no-audio]') !== null

      if (!shouldIgnore && !isMusicButton) {
        toggleMusic()
      }
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [playing])

  const handlePlay = (event: React.MouseEvent) => {
    event.stopPropagation()
    toggleMusic()
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
