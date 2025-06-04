import { ROUTE_PATHS } from '../../router/routePaths'

export const NAV_ITEMS = [
  { path: ROUTE_PATHS.HOME, label: 'Home' },
  { path: ROUTE_PATHS.EXPERIENCE, label: 'Experience' },
  { path: ROUTE_PATHS.EDUCATION, label: 'Education' },
  { path: ROUTE_PATHS.SKILLS, label: 'Skills' },
  { path: ROUTE_PATHS.HOBBIES, label: 'Hobbies' },
  { path: ROUTE_PATHS.BONUS, label: 'Bonus' },
]

export const menuVariants = {
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
}

export const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      y: { type: 'spring', stiffness: 500, damping: 30, duration: 0.45 },
      opacity: { duration: 0.32 },
      scale: { duration: 0.32 },
    },
  },
  closed: {
    opacity: 0,
    y: -28,
    scale: 0.93,
    transition: {
      y: { stiffness: 500, damping: 30, duration: 0.28 },
      opacity: { duration: 0.18 },
      scale: { duration: 0.18 },
    },
  },
}
