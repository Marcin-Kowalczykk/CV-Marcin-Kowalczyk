const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()'

export const draw = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  fontSize: number,
  drops: number[],
) => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#0F0'
  ctx.font = `${fontSize}px monospace`

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)]
    ctx.fillText(text, i * fontSize, drops[i] * fontSize)

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0
    }

    drops[i]++
  }
}

export const resizeCanvas = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
