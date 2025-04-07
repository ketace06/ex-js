/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
  // Fix: style.color is a property, not a function
  document.getElementById('change-my-color').style.color = 'red'
}

/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {
  const container = document.getElementById('add-your-elements-in-this-element')

  const p1 = document.createElement('p')
  p1.textContent = 'Bonjour'

  const p2 = document.createElement('p')
  p2.textContent = 'Toto'

  container.appendChild(p1)
  container.appendChild(p2)
}

/**
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
  const container = document.querySelector('#add-list-here')
  const ul = document.createElement('ul')

  for (const item of listElements) {
    const li = document.createElement('li')
    li.textContent = item.name
    li.style.background = item.color
    ul.appendChild(li)
  }
  container.appendChild(ul)
}
