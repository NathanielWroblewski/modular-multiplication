import renderModulus from './modulus.js'
import renderProduct from './products.js'
import renderText from './text.js'

const render = ({ element, model, captioned = false, text = true }) => {
  const { b, n } = model

  if (text) {
    renderText({
      element,
      text: `b = ${b}`,
      x: element.width - 51,
      y: element.height - 40,
      fill: '#999994'
    })
    renderText({
      element,
      text: `n = ${n}`,
      x: element.width - 51,
      y: element.height - 20,
      fill: '#999994'
    })
  }

  for (let multiplicand = 0; multiplicand < n; multiplicand++) {
    renderProduct({
      element,
      multiplicand,
      multiplier: b,
      modulus: n,
      stroke: captioned ? '#999994' : 'rgba(68, 68, 68, 0.2)',
      line: text ? 2 : 1
    })
  }

  if (captioned) {
    renderModulus({ element, modulus: n, radius: 10, fill: '#fffff8' })
    renderModulus({ element, modulus: n, captioned: true })
  } else {
    renderModulus({ element, modulus: n, radius: text ? 2 : 1, fill: '#4c4c4a' })
  }
}

export default render
