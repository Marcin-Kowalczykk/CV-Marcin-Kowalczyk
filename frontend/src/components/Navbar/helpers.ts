import { NavbarVariant } from './model'

export const getCometColor = (variant: NavbarVariant, isHovered: boolean): string => {
  switch (variant) {
    case 'light':
      return 'gray'
    case 'green':
      return '#00ff41'
    case 'blue':
    default:
      return isHovered ? '#00d4ff' : '#fff'
  }
}

export const getNavVariant = (pathname: string, isMobile: boolean): NavbarVariant => {
  if (isMobile) return 'light'
  if (pathname.startsWith('/experience')) return 'light'
  if (pathname.startsWith('/education')) return 'green'
  if (pathname.startsWith('/hobbies')) return 'green'

  return 'blue'
}
