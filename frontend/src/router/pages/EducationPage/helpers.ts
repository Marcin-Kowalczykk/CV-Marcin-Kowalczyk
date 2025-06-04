import { GRAVITY, JUMP_VELOCITY, PLATFORM_WIDTHS } from './constants'

const getMaxJumpHeight = () => {
  return Math.abs((JUMP_VELOCITY * JUMP_VELOCITY) / (2 * GRAVITY))
}

const PLATFORM_POSITIONS = (gh: number) => {
  const maxJump = getMaxJumpHeight()
  const safeGap = Math.min(maxJump * 0.7, gh / 4)
  const baseY = gh - 200
  return [
    { x: 60, y: baseY - safeGap * 0 },
    { x: 500, y: baseY - safeGap * 1 },
    { x: 180, y: baseY - safeGap * 2 },
    { x: 250, y: baseY - safeGap * 3 },
  ]
}

export const getPlatformPositions = (gh: number) =>
  PLATFORM_POSITIONS(gh).map((pos, i) => ({ ...pos, width: PLATFORM_WIDTHS[i], active: false }))
