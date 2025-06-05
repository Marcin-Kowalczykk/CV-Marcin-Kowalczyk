import CategoryTabs from '../CategoryTabs/CategoryTabs'
import { SearchInput, SearchTabsColumn, StyledSearchBar } from './SearchTab.styles'

const SearchTab = () => (
  <SearchTabsColumn>
    <StyledSearchBar>
      <span role="img" aria-label="search">
        🔍
      </span>
      <SearchInput placeholder="Search" disabled />
    </StyledSearchBar>
    <CategoryTabs />
  </SearchTabsColumn>
)

export default SearchTab
