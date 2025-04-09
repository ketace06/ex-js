/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
  document.addEventListener('mousemove', (event) => {
    const p = document.getElementById('mouse-coordinates')
    if (p) {
      p.textContent = `x: ${event.clientX}, y: ${event.clientY}`
    }
  })
}

const randomRGB = () => {
  const o = Math.round
  const r = Math.random
  const s = 255
  return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}
const enteringColor = ''

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {
  const input = document.querySelector('#focus-me')
  const labels = Array.from(document.querySelectorAll('label[for="focus-me"]'))
  const originals = labels.map((label) => label.textContent)
  const usedColors = new Set()
  const defaultColor = getComputedStyle(input).borderColor

  input.addEventListener('mouseover', () => {
    for (let i = 0; i < labels.length; i++) {
      labels[i].textContent = 'Yes, you hover me!'
    }
    let color
    do {
      color = randomRGB()
    } while (usedColors.has(color) || color === defaultColor)
    usedColors.add(color)
    input.style.borderColor = color
  })
  input.addEventListener('mouseout', () => {
    for (let i = 0; i < labels.length; i++) {
      labels[i].textContent = originals[i]
    }
    input.style.borderColor = defaultColor
  })
}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
  const input = document.querySelector('#focus-me')
  const labels = Array.from(document.querySelectorAll('label[for="focus-me"]'))
  if (!input) return

  input.addEventListener('input', () => {
    const newColor = randomRGB()

    input.dataset.defaultColor = newColor

    labels.forEach((label) => {
      label.style.color = newColor
    })
  })
}
