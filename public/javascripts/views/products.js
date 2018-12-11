import { PADDING } from '../constants/index.js'
import { polarToCartesian } from '../utilities/index.js'

const renderLine = ({ element, src, dest, stroke = 'rgba(68, 68, 68, 0.2)', line = 2 }) => {
  const context = element.getContext('2d')

  context.strokeStyle = stroke
  context.lineWidth = line
  context.beginPath()
  context.moveTo(src[0], src[1])
  context.lineTo(dest[0], dest[1])
  context.stroke()
}

const render = ({ element, multiplicand, multiplier, modulus, stroke, line = 2}) => {
  const context = element.getContext('2d')
  const product = multiplicand * multiplier
  const remainder = product % modulus
  const deltaTheta = 360 / modulus
  const theta = remainder * deltaTheta

  const height = element.height - PADDING
  const width = element.width - PADDING
  const r = Math.min(height, width) / 2
  const centerx = (width / 2) + (PADDING / 2)
  const centery = (height / 2) + (PADDING / 2)

  const dest = polarToCartesian(r, theta)
  const theta2 = (multiplicand % modulus) * deltaTheta
  const src = polarToCartesian(r, theta2)

  renderLine({
    element,
    src: [src[0] + centerx, src[1] + centery],
    dest: [dest[0] + centerx, dest[1] + centery],
    stroke,
    line
  })
}

export default render
