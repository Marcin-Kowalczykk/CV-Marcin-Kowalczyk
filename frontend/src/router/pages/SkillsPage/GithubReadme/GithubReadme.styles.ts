import styled from 'styled-components'

export const Container = styled.div<{ visible?: boolean }>`
  background: #0d1117;
  border-radius: 6px;
  box-shadow: 0 1.5px 8px 0 rgba(27, 31, 35, 0.08);
  padding: 0 0 18px 0;
  width: 90%;
  min-height: 350px;
  font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', sans-serif;
  color: #c9d1d9;
  border: 1px solid #30363d;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 0.94rem;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(30px)')};
  transition:
    opacity 0.5s cubic-bezier(0.4, 1, 0.4, 1),
    transform 0.5s cubic-bezier(0.4, 1, 0.4, 1);

  @media (min-width: 1500px) {
    min-height: 420px;
    font-size: 1.08rem;
    padding: 0 0 28px 0;
  }
`

export const ReadmeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 22px 0 22px;
  background: #0d1117;
  position: sticky;
  top: 0;
  z-index: 2;
  margin-right: 22px;

  @media (min-width: 1500px) {
    padding: 22px 36px 0 36px;
    margin-right: 32px;
  }
`

export const ReadmeHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ReadmeHeaderTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #c9d1d9;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ReadmeHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #8b949e;
  font-size: 1.2rem;
  margin-right: 14px;
`

export const OrangeBar = styled.div`
  height: 2.2px;
  background: #fd8c73;
  width: 88px;
  margin: 0 0 7px 25px;
  border-radius: 2px;

  @media (min-width: 1500px) {
    height: 2.5px;
    width: 120px;
    margin: 0 0 12px 40px;
  }
`

export const WhiteBar = styled.div`
  height: 1.1px;
  background: #fff;
  width: 100%;
  margin: 4.5px 0 11px 0;
  opacity: 0.12;

  @media (min-width: 1500px) {
    height: 1.3px;
    margin: 7px 0 18px 0;
  }
`

export const Content = styled.div`
  padding: 0 15px 9px 15px;

  @media (min-width: 1500px) {
    padding: 0 38px 18px 38px;
  }
`

export const Title = styled.h1`
  font-size: 1.32rem;
  font-weight: 700;
  margin: 0 0 11px 0;
  letter-spacing: -0.5px;
  line-height: 1.25;
  color: #fff;

  @media (min-width: 1500px) {
    font-size: 1.7rem;
    margin: 0 0 18px 0;
  }
`

export const SectionHeader = styled.h2`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 9px 0;
  color: #fff;
  border-bottom: 1px solid #21262d;
  padding-bottom: 4.5px;
  background: none;

  @media (min-width: 1500px) {
    font-size: 1.18rem;
    margin: 0 0 14px 0;
    padding-bottom: 6px;
  }
`

export const SkillsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

export const SkillItem = styled.li<{ visible: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 8.8px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? 'translateX(0)' : 'translateX(19.8px)')};
  transition:
    opacity 0.3s,
    transform 0.3s;
  font-size: 1.045rem;
  font-weight: 500;
  color: #c9d1d9;
  letter-spacing: 0.1px;
  min-height: 22px;

  @media (min-width: 1500px) {
    margin-bottom: 13px;
    font-size: 1.18rem;
    min-height: 28px;
    transform: ${({ visible }) => (visible ? 'translateX(0)' : 'translateX(24px)')};
  }

  @media (max-width: 1280px) {
    font-size: 0.9rem;
  }
`

export const IconWrap = styled.span`
  margin-right: 8.8px;
  display: flex;
  align-items: center;
  min-width: 19.8px;
  min-height: 19.8px;

  @media (min-width: 1500px) {
    margin-right: 14px;
    min-width: 26px;
    min-height: 26px;
  }
`
