import styled from 'styled-components'

export const StarsOpinionsWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Stars = styled.span`
  color: #ffd600;
  font-size: 18px;
  letter-spacing: 1px;

  @media (max-width: 1280px) {
    font-size: 12px;
  }
`

export const OpinionsText = styled.span`
  color: #888;
  font-size: 13px;
  margin-top: 2px;

  @media (max-width: 1280px) {
    font-size: 11px;
  }
`
