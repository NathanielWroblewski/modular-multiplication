import { HEIGHT, WIDTH, PADDING } from '../constants/index.js'

const OPERATIONS = {
  '&times;': (a, b) => a * b,
  '%': (a, b) => (a * b) % 12
}

const renderColumns = columns => (
  columns.reduce((memo, column, index) => (
    memo += `<th>${column}</th>`
  ), '<tr>') + '</tr>'
)

const renderRow = (row, columns, operation) => (
  columns.reduce((memo, column, index) => (
    memo += `<td>${OPERATIONS[operation](row, column)}</td>`
  ), `<tr><td>${row}</td>`) + '</tr>'
)

const render = ({ element, min = 0, max = 9, operation = '&times;' }) => {
  const range = new Array(max - min + 1).fill().map((_, index) => min + index)
  const headers = renderColumns([operation, ...range])
  const data = range.reduce((memo, label) => (
    memo += renderRow(label, range, operation)
  ), '')

  element.innerHTML = `
    <thead>
      ${headers}
    <thead>
    <tbody>
      ${data}
    </tbody>
  `
}

export default render
