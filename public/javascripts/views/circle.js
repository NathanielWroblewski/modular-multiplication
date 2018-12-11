const TAU = 2 * Math.PI

const render = ({ element, x, y, radius = 1, fill = '#aaa' }) => {
  const context = element.getContext('2d')

  context.fillStyle = fill
  context.beginPath()
  context.arc(x, y, radius, 0, TAU)
  context.fill()
}

export default render
