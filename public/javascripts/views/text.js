const render = ({ element, text = '', x, y, fill = '#111', style }) => {
  const context = element.getContext('2d')

  if (style === 'centered') {
    context.textBaseline = 'middle'
    context.textAlign = 'center'
  } else {
    context.textBaseline = 'alphabetic'
    context.textAlign = 'start'
  }

  context.fillStyle = fill
  context.font = '18px et-book, Palatine, Palatine Linotype, Palatino LT STD, Book Antiqua, Georgia, serif'
  context.fillText(text, x, y)
}

export default render
