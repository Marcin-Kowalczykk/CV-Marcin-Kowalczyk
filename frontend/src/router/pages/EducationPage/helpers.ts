export const getMaxJumpHeight = (jumpVelocity: number, gravity: number) => {
  return Math.abs((jumpVelocity * jumpVelocity) / (2 * gravity))
}

const PLATFORM_POSITIONS = (
  gh: number,
  jumpVelocity: number,
  gravity: number,
  isSmallScreen: boolean,
) => {
  const maxJump = getMaxJumpHeight(jumpVelocity, gravity)
  const safeGap = Math.min(maxJump * 0.7, gh / 4)
  const baseY = isSmallScreen ? gh - 170 : gh - 200
  return [
    { x: 60, y: baseY - safeGap * 0 },
    { x: 420, y: baseY - safeGap * 1 },
    { x: 180, y: baseY - safeGap * 2 },
    { x: 250, y: baseY - safeGap * 3 },
  ]
}

export const getPlatformPositions = (
  gh: number,
  platformWidths: number[],
  jumpVelocity: number,
  gravity: number,
  isSmallScreen: boolean,
) =>
  PLATFORM_POSITIONS(gh, jumpVelocity, gravity, isSmallScreen).map((pos, i) => ({
    ...pos,
    width: platformWidths[i],
    active: false,
  }))
