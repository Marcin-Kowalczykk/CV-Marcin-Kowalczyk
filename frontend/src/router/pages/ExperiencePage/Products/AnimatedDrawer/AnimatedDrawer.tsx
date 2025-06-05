import React from 'react'
import {
  AnimatedDrawer as StyledAnimatedDrawer,
  DrawerContent,
  DrawerColumn,
  DrawerTitle,
  DrawerList,
  DrawerClose,
} from './AnimatedDrawer.styles'
import { AnimatedDrawerProps } from './model'

const AnimatedDrawer: React.FC<AnimatedDrawerProps> = ({
  open,
  top,
  left,
  height,
  width,
  drawerContentVisible,
  onClose,
  onTransitionEnd,
  projects,
  responsibilities,
}) => (
  <StyledAnimatedDrawer
    open={open}
    top={top}
    left={left}
    height={height}
    width={width}
    className="drawer-content"
    style={{ pointerEvents: open ? 'auto' : 'none' }}
    onTransitionEnd={onTransitionEnd}
  >
    <DrawerClose onClick={onClose}>×</DrawerClose>
    {drawerContentVisible && (
      <DrawerContent visible={drawerContentVisible}>
        <DrawerColumn>
          <DrawerTitle>Projects</DrawerTitle>
          <DrawerList>
            {projects.map((proj, idx) => (
              <li key={idx}>{proj}</li>
            ))}
          </DrawerList>
        </DrawerColumn>
        <DrawerColumn>
          <DrawerTitle>Responsibilities</DrawerTitle>
          <DrawerList>
            {responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </DrawerList>
        </DrawerColumn>
      </DrawerContent>
    )}
  </StyledAnimatedDrawer>
)

export default AnimatedDrawer
