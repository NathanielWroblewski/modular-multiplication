const MAX_ITERS = 255
const THRESHOLD = 4.0

export const degToRad = degrees => degrees * Math.PI / 180

export const polarToCartesian = (r, theta) => {
  const x = r * Math.cos(degToRad(theta))
  const y = r * Math.sin(degToRad(theta))

  return [x, y]
}

// R = rk
export const epicycloid = (r, k, radians) => {
  const theta = degToRad(radians)
  const a = k + 1
  const b = r * a
  const c = theta * a
  const x = b * Math.cos(theta) - r * Math.cos(c)
  const y = b * Math.sin(theta) - r * Math.sin(c)

  return [x, y]
}

export const getEscapeIterations = (pointX, pointY, fn) => {
  let i = 0
  let x = 0
  let y = 0

  while (i < MAX_ITERS && Math.pow(x, 2) + Math.pow(y, 2) < THRESHOLD) {
    const [xnext, ynext] = fn(x, y, pointX, pointY)
    x = xnext
    y = ynext
    i++
  }

  return i
}

export const multibrot = (x, y, pointX, pointY, n) => {
  return [
    Math.pow(x * x + y * y, n / 2) * Math.cos(n * Math.atan2(y, x)) + pointX,
    Math.pow(x * x + y * y, n / 2) * Math.sin(n * Math.atan2(y, x)) + pointY
  ]
}
