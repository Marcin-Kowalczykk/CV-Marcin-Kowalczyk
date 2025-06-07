import React, { useEffect, useState } from 'react'
import { GoBook } from 'react-icons/go'
import { GoPencil } from 'react-icons/go'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SKILLS_LIST } from '../../../../constants'
import {
  Container,
  ReadmeHeader,
  ReadmeHeaderLeft,
  ReadmeHeaderTitle,
  ReadmeHeaderRight,
  OrangeBar,
  WhiteBar,
  Content,
  Title,
  SectionHeader,
  SkillsList,
  SkillItem,
  IconWrap,
} from './GithubReadme.styles'
import { useAppContext } from '../../../../context/AppContext'

const ANIMATION_DELAY = 80

const GithubReadme: React.FC<{ show: boolean }> = ({ show }) => {
  const [visibleCount, setVisibleCount] = useState(0)
  const [containerVisible, setContainerVisible] = useState(false)
  const { isMobile } = useAppContext()

  useEffect(() => {
    if (!show) {
      setVisibleCount(0)
      setContainerVisible(false)
      return
    }

    setTimeout(() => setContainerVisible(true), 50)
  }, [show])

  useEffect(() => {
    if (!containerVisible) return
    if (visibleCount < SKILLS_LIST.length) {
      const timeout = setTimeout(() => {
        setVisibleCount((v) => v + 1)
      }, ANIMATION_DELAY)
      return () => clearTimeout(timeout)
    }
  }, [containerVisible, visibleCount, SKILLS_LIST.length])

  if (!show) return null
  return (
    <Container visible={containerVisible}>
      <ReadmeHeader>
        <ReadmeHeaderLeft>
          <GoBook size={isMobile ? 16 : 20} style={{ color: '#c9d1d9' }} />
          <ReadmeHeaderTitle>README</ReadmeHeaderTitle>
        </ReadmeHeaderLeft>
        <ReadmeHeaderRight>
          <GoPencil size={16} />
          <RxHamburgerMenu size={18} />
        </ReadmeHeaderRight>
      </ReadmeHeader>
      <OrangeBar />
      <WhiteBar />
      <Content>
        <Title>Marcin Kowalczyk</Title>
        <SectionHeader>Skills</SectionHeader>
        <SkillsList>
          {SKILLS_LIST.map((cat, idx) => (
            <SkillItem key={cat.name} visible={idx < visibleCount}>
              <IconWrap>
                <cat.icon color={cat.color} />
              </IconWrap>
              <span>{cat.name}</span>
            </SkillItem>
          ))}
        </SkillsList>
      </Content>
    </Container>
  )
}

export default GithubReadme
