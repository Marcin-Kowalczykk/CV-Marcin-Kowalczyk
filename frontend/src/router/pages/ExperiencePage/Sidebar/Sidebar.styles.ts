import styled from 'styled-components'
import { pulseBorder } from '../ExperiencePage.styles'

export const SidebarWrapper = styled.aside`
  overflow: auto;
  width: 200px;
  background: #fff;
  padding: 12px 16px 24px 16px;
  border-right: 1px solid #e5e5e5;
  font-size: 15px;
  @media (max-width: 1280px) {
    width: 180px;
    padding: 10px 10px 20px 10px;
    font-size: 16px;
  }
  @media (min-width: 1500px) {
    width: 220px;
    padding: 20px 24px 32px 24px;
    font-size: 18px;
  }
`

export const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 14px;
  letter-spacing: 1px;
`

export const FilterLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;

  @media (max-width: 1280px) {
    font-size: 14px;
  }
`

export const SizeGrid = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  max-width: 100%;
`

export const SizeButton = styled.button<{ active?: boolean }>`
  border: 1.5px solid #d1d1d1;
  background: ${({ active }) => (active ? '#f7f7f7' : '#fff')};
  color: #222;
  font-weight: 500;
  font-size: 15px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  box-shadow: ${({ active }) => (active ? '0 0 0 2px #2222' : 'none')};

  @media (max-width: 1280px) {
    font-size: 12px;
  }
`

export const AvailabilitySection = styled.div`
  margin-bottom: 14px;
`

export const CheckboxRow = styled.label<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 15px;
  color: #222;
  cursor: pointer;
  input[type='checkbox'] {
    accent-color: #222;
    width: 18px;
    height: 18px;
  }
  span {
    color: ${({ checked }) => (checked ? '#222' : '#888')};
    font-weight: ${({ checked }) => (checked ? 600 : 400)};
  }

  @media (max-width: 1280px) {
    font-size: 12px;
  }
`

export const CheckboxCount = styled.span`
  color: #3a5aff;
  margin-left: 4px;
`

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  border-radius: 8px;
  animation: ${pulseBorder} 1.5s infinite;
  background: #fafdff;
  padding: 4px 0;

  @media (max-width: 1280px) {
    font-size: 12px;
  }
`

export const CategoryList = styled.ul<{ open: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0 0 0 12px;
  max-height: ${({ open }) => (open ? 'calc(100vh - 250px)' : '0')};
  overflow: auto;
  transition: max-height 0.3s;
  font-size: 14px;
`

export const CategoryItem = styled.div`
  padding: 6px 8px;
  cursor: pointer;
  color: #444;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;

  &:hover {
    color: #000;
  }

  @media (max-width: 1280px) {
    font-size: 8px;
    padding: 2px;
  }

  svg {
    font-size: 15px;
    min-width: 15px;
    @media (max-width: 1280px) {
      font-size: 10px;
    }
  }
`

export const PlaceholderSection = styled.div`
  border-top: 1px dashed #e0e0e0;
  margin: 18px 0 0 0;
  padding: 18px 0 0 0;
  font-weight: 600;
  font-size: 16px;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: not-allowed;

  @media (max-width: 1280px) {
    font-size: 12px;
  }
`
