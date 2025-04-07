/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (
    typeof needle !== 'string' ||
    typeof haystack !== 'string' ||
    typeof newWord !== 'string'
  ) {
    throw new TypeError('All arguments must be strings')
  }
  const regex = new RegExp(needle, 'gi')

  return haystack.replace(regex, (match) => {
    let result = ''

    for (let i = 0; i < match.length && i < newWord.length; i++) {
      result +=
        match[i] === match[i].toUpperCase()
          ? newWord[i].toUpperCase()
          : newWord[i].toLowerCase()
    }
    return result
  })
}
