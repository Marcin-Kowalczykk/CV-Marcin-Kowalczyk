import styled from 'styled-components'

export const SearchTabsColumn = styled.div`
  max-width: 1140px;
  margin: 0 auto 32px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1280px) {
    max-width: 100%;
    margin: 0 auto 24px auto;
  }
  @media (min-width: 1500px) {
    max-width: 1560px;
  }
`

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #ededed;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 18px;
  max-width: 100%;
  width: 415px;
  @media (max-width: 1280px) {
    width: 100%;
    max-width: 380px;
  }
  @media (min-width: 1500px) {
    width: 580px;
  }
`

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  flex: 1;
  margin-left: 8px;
`
