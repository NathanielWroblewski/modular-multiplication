import renderProduct from './products.js'
import renderText from './text.js'

const render = ({ element, model }) => {
  const { b, n } = model

  renderText({
    element,
    text: `b = ${b.toFixed(2)}`,
    x: element.width - 90,
    y: element.height - 20,
    fill: '#999994'
  })

  for (let multiplicand = 2; multiplicand < n; multiplicand++) {
    renderProduct({ element, multiplicand, multiplier: b, modulus: n })
  }
}

export default render
