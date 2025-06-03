export const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/experience', label: 'Experience' },
  { path: '/education', label: 'Education' },
  { path: '/skills', label: 'Skills' },
  { path: '/hobbies', label: 'Hobbies' },
  { path: '/bonus', label: 'Bonus' },
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
