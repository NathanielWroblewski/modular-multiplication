import { PADDING } from '../constants/index.js'
import { polarToCartesian } from '../utilities/index.js'
import renderText from './text.js'
import renderCircle from './circle.js'

const render = ({ element, modulus, captioned = false, radius, fill }) => {
  const context = element.getContext('2d')
  const height = element.height - PADDING
  const width = element.width - PADDING
  const r = Math.min(height, width) / 2
  const deltaTheta = 360 / modulus
  const centerx = (width / 2) + (PADDING / 2)
  const centery = (height / 2) + (PADDING / 2)

  for (let theta = 0; theta < 360; theta += deltaTheta) {
    const [x, y] = polarToCartesian(r, theta)

    if (!captioned) {
      renderCircle({ element, x: x + centerx, y: y + centery, radius, fill })
    } else {
      renderText({ element, x: x + centerx, y: y + centery, text: theta / deltaTheta, style: 'centered' })
    }
  }
}

export default render
