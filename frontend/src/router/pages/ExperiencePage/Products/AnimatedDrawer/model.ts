export interface AnimatedDrawerProps {
  open: boolean
  top: number
  left: number
  height: number
  width: number
  drawerContentVisible: boolean
  onClose: () => void
  onTransitionEnd: () => void
  projects: string[]
  responsibilities: string[]
}
