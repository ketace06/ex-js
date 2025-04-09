/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks ont the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here" // pre is a preformatted text element
 */
export function fetchDataOnClick() {
  document.querySelector('#click-to-fetch').addEventListener('click', () => {
    fetch('https://api.github.com/octocat')
      .then((response) => response.text())
      .then((data) => {
        document.querySelector('#display-here').textContent = data
      })
  })
}
