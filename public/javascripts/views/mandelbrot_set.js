import { getEscapeIterations, multibrot } from '../utilities/index.js'

const ALPHA = 55
const SCALE = 4
const MAX_COLOR = 255

const scale = (value, size, dimension) => (SCALE * value / size) - (SCALE * dimension) / (2 * size)

const getColor = iterations => {
  const color = 255 - Math.min(iterations, MAX_COLOR)

  const r = color
  const g = color
  const b = Math.max(color - 7, 0)

  return [r, g, b, ALPHA]
}

const render = ({ element, exponent = 2 }) => {
  const context = element.getContext('2d')
  const { width, height } = element
  const size = Math.min(width, height)
  const imageData = context.getImageData(0, 0, width, height)
  const promises = []

  for (let y = 0; y < height; y++) {
    promises.push(new Promise((resolve, reject) => {
      setTimeout(y => {
        for (let x = 0; x < width; x++) {
          const iterations = getEscapeIterations(
            scale(x, size, width),
            scale(y, size, height),
            (x, y, pointX, pointY) => multibrot(x, y, pointX, pointY, exponent)
          )
          const color = getColor(iterations)
          const offset = (x + y * width) * 4

          color.forEach((value, index) => imageData.data[offset + index] = value)
        }
        resolve()
      }, 1, y)
    }))
  }

  Promise.all(promises).then(() => {
    context.putImageData(imageData, 0, 0)
  })
}

export default render
