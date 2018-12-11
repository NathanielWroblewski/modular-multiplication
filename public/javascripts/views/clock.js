import renderText from './text.js'
import renderProduct from './products.js'
import renderModulus from './modulus.js'
import { HEIGHT, WIDTH } from '../constants/index.js'

const render = ({ element, model }) => {
  const { a, b, n } = model

  renderText({
    element,
    text: `a = ${a}`,
    x: WIDTH - 51,
    y: HEIGHT - 60,
    fill: '#999994'
  })
  renderText({
    element,
    text: `b = ${b}`,
    x: WIDTH - 52,
    y: HEIGHT - 40,
    fill: '#999994'
  })
  renderText({
    element,
    text: `ab (mod ${n}) = ${(a * b) % n}`,
    x: WIDTH - 130,
    y: HEIGHT - 20,
    fill: '#999994'
  })
  renderProduct({ element, multiplicand: a, multiplier: b, modulus: n, stroke: '#999994' })
  renderModulus({ element, modulus: n, radius: 10, fill: '#fffff8' })
  renderModulus({ element, modulus: n, captioned: true })
}

export default render
