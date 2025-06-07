import { NavbarVariant } from './model'

export const getCometColor = (variant: NavbarVariant, isHovered: boolean): string => {
  switch (variant) {
    case 'light':
      return 'gray'
    case 'extraLight':
      return '#fff'
    case 'lightCircle':
      return '#222'
    case 'green':
      return '#00ff41'
    case 'blue':
    default:
      return isHovered ? '#00d4ff' : '#fff'
  }
}

export const getNavVariant = (pathname: string, isMobile: boolean): NavbarVariant => {
  if (isMobile) {
    if (pathname.startsWith('/experience')) return 'lightCircle'
    if (pathname.startsWith('/skills')) return 'light'
    if (
      pathname === '/' ||
      pathname.startsWith('/home') ||
      pathname.startsWith('/education') ||
      pathname.startsWith('/hobbies')
    )
      return 'extraLight'
    return 'extraLight'
  } else {
    if (pathname.startsWith('/experience')) return 'lightCircle'
    if (pathname === '/' || pathname.startsWith('/home')) return 'blue'
    if (pathname.startsWith('/education')) return 'green'
    if (pathname.startsWith('/hobbies')) return 'green'
    if (pathname.startsWith('/skills')) return 'light'
    return 'blue'
  }
}
