/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
  const userInput = document.querySelector('#write-some-text')

  userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && userInput.value !== '') {
      alert(userInput.value)
    }
  })
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
  const userListInput = document.querySelector('#list-input')
  const list = document.querySelector('#list')

  const newItems = () => {
    const value = userListInput.value.trim()
    if (value !== '') {
      const newItem = document.createElement('li')
      newItem.textContent = userListInput.value.trim()
      list.appendChild(newItem)
      userListInput.value = ''
    }
  }
  userListInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      newItems()
    }
  })
  userListInput.addEventListener('blur', (event) => {
    newItems()
  })
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  const list = document.querySelector('#list')
  list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      event.target.remove()
    }
  })
}
