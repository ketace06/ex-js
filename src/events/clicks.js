/**
 * In the HTML, there is an element with the id "click-me", you need to register
 * a new event listener that will trigger an alert when the element is clicked.
 * The alert text should contain "Button clicked"
 */
export function reactToClickEvent() {
  const button = document.getElementById('click-me')
  if (button) {
    button.addEventListener('click', () => {
      alert('Button clicked')
    })
  }
}

/**
 * You should register an event listener on the same button as the last exercise.
 * But this time you should add a new div below the button with the content "clicked"
 */
export function addEventToDomOnClick() {
  const button = document.getElementById('click-me')
  if (button) {
    button.addEventListener('click', () => {
      const div = document.createElement('div')
      div.textContent = 'clicked'
      document.body.appendChild(div)
    })
  }
}