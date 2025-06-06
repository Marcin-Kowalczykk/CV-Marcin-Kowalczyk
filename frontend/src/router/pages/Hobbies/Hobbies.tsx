import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGamepad, FaMicrochip } from 'react-icons/fa'
import { CgGym } from 'react-icons/cg'
import { GiChickenLeg } from 'react-icons/gi'
import { MdTv } from 'react-icons/md'

import {
  GlobalStyle,
  Platform,
  Card,
  CardContainer,
  HobbyHeader,
  HobbyItems,
  HobbyContent,
  PixelIcon,
  RowsContainer,
  Row,
  CardContent,
} from './Hobbies.styles'
import { renderColoredHeader, renderColoredList } from './helpers'
import { HOBBIES_DATA } from './constants'

const HobbyContentMotion = motion(HobbyContent)

const Hobbies = () => {
  const [selectedHobbies, setSelectedHobbies] = useState<number[]>([])

  const pixelSvgs: Record<string, React.ReactNode> = {
    training: <CgGym size={80} color="#fff" />,
    diet: <GiChickenLeg size={80} color="#f9b233" />,
    movie: <MdTv size={80} color="#D3D3D3" />,
    game: <FaGamepad size={80} color="#ADD8E6" />,
    hardware: <FaMicrochip size={80} color="#006400" />,
  }

  const toggleHobby = (id: number) => {
    setSelectedHobbies((prev) => (prev.includes(id) ? prev.filter((h) => h !== id) : [...prev, id]))
  }
  return (
    <>
      <GlobalStyle />
      <RowsContainer>
        {HOBBIES_DATA.map((hobby) => (
          <Row key={hobby.id}>
            <Platform />
            <CardContainer>
              <Card onClick={() => toggleHobby(hobby.id)}>
                {!selectedHobbies.includes(hobby.id) ? (
                  <CardContent>?</CardContent>
                ) : (
                  <CardContent>
                    <PixelIcon>{pixelSvgs[hobby.icon]}</PixelIcon>
                  </CardContent>
                )}
              </Card>
              <AnimatePresence>
                {selectedHobbies.includes(hobby.id) && (
                  <HobbyContentMotion
                    key={hobby.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 120, transition: { duration: 1, ease: 'easeInOut' } }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <HobbyHeader
                      dangerouslySetInnerHTML={{
                        __html: renderColoredHeader(hobby.title),
                      }}
                    />
                    <HobbyItems
                      dangerouslySetInnerHTML={{
                        __html: renderColoredList(hobby.items),
                      }}
                    />
                  </HobbyContentMotion>
                )}
              </AnimatePresence>
            </CardContainer>
          </Row>
        ))}
      </RowsContainer>
    </>
  )
}

export default Hobbies
