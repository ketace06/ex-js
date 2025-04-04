import { describe, expect, test } from 'vitest'
import {
  concatenateArrays,
  replaceElementsInArrayAtAGivenPlace,
  splitAllStringsByWordAndFilterEmptyOnes,
} from './arrays.js'

describe('Array of sentences :', () => {
  test('Split and ignore blanks', () => {
    expect(
      splitAllStringsByWordAndFilterEmptyOnes([
        'Toto and tutu',
        'goes',
        '',
        'to the',
        'beach',
      ]),
    ).toStrictEqual(['Toto', 'and', 'tutu', 'goes', 'to', 'the', 'beach'])
  })
  test('Split and ignore string with one space', () => {
    expect(
      splitAllStringsByWordAndFilterEmptyOnes([
        'Toto and tutu',
        'goes',
        ' ',
        'to the',
        'beach',
      ]),
    ).toStrictEqual(['Toto', 'and', 'tutu', 'goes', 'to', 'the', 'beach'])
  })
})

describe('Array concatenation :', () => {
  test('concatenate array of numbers', () => {
    expect(concatenateArrays([2, 3, 4, 5], [3, 6, 8, 3, 5, 6])).toStrictEqual([
      2, 3, 4, 5, 3, 6, 8, 3, 5, 6,
    ])
  })
  test('concatenate array of strings', () => {
    expect(
      concatenateArrays(['toto', 'tutu', 'tata'], ['titi', 'tsts']),
    ).toStrictEqual(['toto', 'tutu', 'tata', 'titi', 'tsts'])
  })
})

describe('Replace elements in array :', () => {
  test('replace one element', () => {
    const originalArray = [2, 3, 4, 5]
    expect(
      replaceElementsInArrayAtAGivenPlace(originalArray, 1, 10),
    ).toStrictEqual([2, 10, 4, 5])
    expect(originalArray).toStrictEqual([2, 3, 4, 5])
  })
  test('replace two element', () => {
    const originalArray = [2, 3, 4, 5]
    expect(
      replaceElementsInArrayAtAGivenPlace(originalArray, 1, 10, 22),
    ).toStrictEqual([2, 10, 22, 5])
    expect(originalArray).toStrictEqual([2, 3, 4, 5])
  })
  test('replace four element', () => {
    const originalArray = [2, 3, 4, 5, 2, 6, 9]
    expect(
      replaceElementsInArrayAtAGivenPlace(originalArray, 3, 1, 1, 1, 1),
    ).toStrictEqual([2, 3, 4, 1, 1, 1, 1])
    expect(originalArray).toStrictEqual([2, 3, 4, 5, 2, 6, 9])
  })
})