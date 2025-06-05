import { TabButton, tabs, TabsWrapper } from './CategoryTabs.styles'

const CategoryTabs = () => (
  <TabsWrapper>
    {tabs.flat().map((tab, idx) => (
      <TabButton key={tab} active={idx === 0}>
        {tab}
      </TabButton>
    ))}
  </TabsWrapper>
)

export default CategoryTabs
