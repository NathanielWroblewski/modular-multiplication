import { epicycloid, polarToCartesian } from '../utilities/index.js'
import clear from './clear.js'
import renderCircle from './circle.js'

const render = ({ background, foreground, model }) => {
  const { radius, k, r, theta } = model
  const point = epicycloid(radius, k, theta)
  const circle = polarToCartesian(r, theta)

  if (theta === 0) {
    clear({ element: background })
    renderCircle({
      element: background,
      x: background.width / 2,
      y: background.height / 2,
      radius: radius * k,
      fill: '#999994'
    })
  }

  clear({ element: foreground })
  renderCircle({
    element: foreground,
    x: circle[0] + (foreground.width / 2),
    y: circle[1] + (foreground.height / 2),
    radius: radius,
    fill: '#ccccc6'
  })
  renderCircle({
    element: foreground,
    x: point[0] + (background.width / 2),
    y: point[1] + (background.height / 2),
    radius: 2,
    fill: '#4c4c4a'
  })
  renderCircle({
    element: background,
    x: point[0] + (background.width / 2),
    y: point[1] + (background.height / 2),
    radius: 1,
    fill: '#4c4c4a'
  })
}

export default render
