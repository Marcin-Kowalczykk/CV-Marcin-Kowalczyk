import { ROUTE_PATHS } from './routePaths'
import HomePage from './pages/HomePage/HomePage'
import EducationPage from './pages/EducationPage/EducationPage'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import HobbiesPage from './pages/Hobbies/Hobbies'
import BonusPage from './pages/BonusPage/BonusPage'

export const ROUTES: { path: string; element: React.ComponentType }[] = [
  {
    path: ROUTE_PATHS.HOME,
    element: HomePage,
  },
  {
    path: ROUTE_PATHS.EDUCATION,
    element: EducationPage,
  },
  {
    path: ROUTE_PATHS.EXPERIENCE,
    element: ExperiencePage,
  },
  {
    path: ROUTE_PATHS.SKILLS,
    element: SkillsPage,
  },
  {
    path: ROUTE_PATHS.HOBBIES,
    element: HobbiesPage,
  },
  {
    path: ROUTE_PATHS.BONUS,
    element: BonusPage,
  },
]
