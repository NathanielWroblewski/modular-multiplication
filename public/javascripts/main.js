import renderTable from './views/times_table.js'
import renderModulus from './views/modulus.js' // fig 9 only
import renderClock from './views/clock.js'
import renderRow from './views/row.js'
import renderMandelbrot from './views/mandelbrot_set.js'
import renderEpicycloid from './views/epicycloid.js'
import renderPan from './views/pan.js'
import clear from './views/clear.js'
import { HEIGHT, WIDTH } from './constants/index.js' // fig 9 only

// fig. 1
const table = document.querySelector('.figure.one .times-table')

renderTable({ element: table })

// fig. 2
const modTable = document.querySelector('.figure.two .modular.times-table')

renderTable({ element: modTable, max: 12, operation: '%' })

// fig. 3
const fig3 = document.querySelector('.figure.three .canvas')
const clock = { a: 0, b: 2, n: 12 }

const fig3Step = () => {
  const { a, b, n } = clock

  clear({ element: fig3 })
  renderClock({ element: fig3, model: clock })

  clock.a = (a + 1) % n
}

// fig. 4
const fig4 = document.querySelector('.figure.four .canvas')
const row = { a: 0, b: 2, n: 12 }

renderRow({ element: fig4, model: row, captioned: true })

// fig. 5
const fig5 = document.querySelector('.figure.five .canvas')
const cardioid = { n: 2, b: 2 }

const fig5Step = () => {
  clear({ element: fig5 })
  renderRow({ element: fig5, model: cardioid })

  cardioid.n = ((cardioid.n + 1) % 75) || 2
}

// fig. 6
const fig6Back = document.querySelector('.figure.six .background')
const fig6Fore = document.querySelector('.figure.six .foreground')
const epicycle = { radius: 45, k: 1, r: 90, theta: 0 }

const fig6Step = () => {
  renderEpicycloid({ background: fig6Back, foreground: fig6Fore, model: epicycle })
  epicycle.theta = (epicycle.theta + 2) % 360
}

renderMandelbrot({
  element: document.querySelector('.figure.six .mandelbrot')
})

// fig. 7
const fig7 = document.querySelector('.figure.seven .canvas')
const nephroid = { n: 2, b: 3 }

const fig7Step = () => {
  clear({ element: fig7 })
  renderRow({ element: fig7, model: nephroid })

  nephroid.n = ((nephroid.n + 1) % 75) || 2
}

// fig. 8
const fig8Back = document.querySelector('.figure.eight .background')
const fig8Fore = document.querySelector('.figure.eight .foreground')
const halfEpicycle = { radius: 20, k: 2, r: 60, theta: 0 }

const fig8Step = () => {
  renderEpicycloid({ background: fig8Back, foreground: fig8Fore, model: halfEpicycle })
  halfEpicycle.theta = (halfEpicycle.theta + 2) % 360
}

renderMandelbrot({
  element: document.querySelector('.figure.eight .mandelbrot'),
  exponent: 3
})

// fig. 9
const fig9 = document.querySelector('.figure.nine .canvas')
const epicycloid = { n: 2, b: 4 }

const fig9Step = () => {
  clear({ element: fig9 })
  renderRow({ element: fig9, model: epicycloid })

  epicycloid.n = ((epicycloid.n + 1) % 75) || 2
}

// fig. 10
const fig9Back = document.querySelector('.figure.ten .background')
const fig9Fore = document.querySelector('.figure.ten .foreground')
const thirdEpicycle = { radius: 25, k: 3, r: 100, theta: 0 }

const fig10Step = () => {
  renderEpicycloid({ background: fig9Back, foreground: fig9Fore, model: thirdEpicycle })
  thirdEpicycle.theta = (thirdEpicycle.theta + 2) % 360
}

renderMandelbrot({
  element: document.querySelector('.figure.ten .mandelbrot'),
  exponent: 4
})

// fig. 11
const examples = [
  'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen'
]

examples.forEach((example, index) => {
  renderRow({
    element: document.querySelector(`.figure.eleven .${example}`),
    model: { b: index + 2, n: 100 },
    text: false
  })
})

// fig. 12
const background = document.querySelector('.background-modulus')
const foreground = document.querySelector('.foreground-multiplication')
const pan = { b: 0, n: 200 }

renderModulus({ element: background, modulus: pan.n })

// TODO: translate the canvas once instead of offsetting center on each iteration
const fig11Step = () => {
  const { b, n } = pan

  clear({ element: foreground })
  renderPan({ element: foreground, model: pan })

  pan.b = ((b + 0.01) % n) || 2
}

// animation loops
let loopCount = 0

setInterval(() => {
  // every 2 sec
  if (loopCount === 0) {
    fig3Step()
  }

  // every 200ms
  fig5Step()
  fig7Step()
  fig9Step()

  loopCount = (loopCount + 1) % 10
}, 200)

const step = () => {
  fig6Step()
  fig8Step()
  fig10Step()
  fig11Step()

  window.requestAnimationFrame(step)
}

window.requestAnimationFrame(step)
