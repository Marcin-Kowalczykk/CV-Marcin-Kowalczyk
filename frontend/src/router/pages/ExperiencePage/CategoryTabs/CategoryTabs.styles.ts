import styled from 'styled-components'

export const tabs = [
  ['NEW', 'SHIRTS', 'POLO SHIRTS', 'SHORTS', 'SUITS'],
  ['BEST SELLERS', 'T-SHIRTS', 'JEANS', 'JACKETS', 'COATS'],
]

export const TabsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 8px 16px;
  width: 100%;
  @media (max-width: 768px) {
    gap: 4px 8px;
  }
`

export const TabButton = styled.button<{ active?: boolean }>`
  border: 1.5px solid #d1d1d1;
  background: ${({ active }) => (active ? '#fff' : '#f7f7f7')};
  color: #222;
  font-weight: ${({ active }) => (active ? 700 : 500)};
  font-size: 15px;
  padding: 7px 28px;
  border-radius: 2px;
  cursor: not-allowed;
  outline: none;
  box-shadow: ${({ active }) => (active ? '0 0 0 2px #2222' : 'none')};
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 100%;

  @media (max-width: 1280px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 5px;
    padding: 4px 10px;
  }
`
