import { ROUTE_PATHS } from './routePaths'
import HomePage from './pages/HomePage/HomePage'
import EducationPage from './pages/EducationPage/EducationPage'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import HobbiesPage from './pages/Hobbies/Hobbies'

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
]
