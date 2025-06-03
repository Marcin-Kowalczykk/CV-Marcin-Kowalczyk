import { ROUTE_PATHS } from './routePaths'
import HomePage from './pages/HomePage/HomePage'

export const ROUTES: { path: string; element: React.ComponentType }[] = [
  {
    path: ROUTE_PATHS.HOME,
    element: HomePage,
  },
]
