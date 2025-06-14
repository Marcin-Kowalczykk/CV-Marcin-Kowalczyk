import { FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'
import {
  SidebarWrapper,
  SectionTitle,
  FilterLabel,
  SizeGrid,
  SizeButton,
  AvailabilitySection,
  CheckboxRow,
  CheckboxCount,
  CategoryHeader,
  CategoryList,
  CategoryItem,
  PlaceholderSection,
} from './Sidebar.styles'
import { SKILLS_LIST } from '../../../../constants'
import { SIZES } from './constants'

const Sidebar = () => {
  const [catOpen, setCatOpen] = useState(false)

  return (
    <SidebarWrapper>
      <SectionTitle>Filters</SectionTitle>
      <div>
        <FilterLabel>Size</FilterLabel>
        <SizeGrid>
          {SIZES.map((size) => (
            <SizeButton key={size} active={size === '2XL'}>
              {size}
            </SizeButton>
          ))}
        </SizeGrid>
      </div>
      <AvailabilitySection>
        <FilterLabel>Availability</FilterLabel>
        <CheckboxRow checked>
          <input type="checkbox" checked readOnly />
          <span>Availability</span>
          <CheckboxCount>(450)</CheckboxCount>
        </CheckboxRow>
        <CheckboxRow>
          <input type="checkbox" readOnly disabled />
          <span>Out Of Stack</span>
          <CheckboxCount>(18)</CheckboxCount>
        </CheckboxRow>
      </AvailabilitySection>
      <div>
        <CategoryHeader onClick={() => setCatOpen((o) => !o)}>
          <span>Category</span>
          <span>{catOpen ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}</span>
        </CategoryHeader>
        <CategoryList open={catOpen}>
          {SKILLS_LIST.map(({ name, icon: Icon, color }) => (
            <CategoryItem key={name}>
              <Icon color={color} /> {name}
            </CategoryItem>
          ))}
        </CategoryList>
      </div>
      <PlaceholderSection>
        Colors <FaChevronRight size={14} />
      </PlaceholderSection>
      <PlaceholderSection>
        Price Range <FaChevronRight size={14} />
      </PlaceholderSection>
      <PlaceholderSection>
        Collections <FaChevronRight size={14} />
      </PlaceholderSection>
      <PlaceholderSection>
        Tags <FaChevronRight size={14} />
      </PlaceholderSection>
      <PlaceholderSection>
        Ratings <FaChevronRight size={14} />
      </PlaceholderSection>
    </SidebarWrapper>
  )
}

export default Sidebar
