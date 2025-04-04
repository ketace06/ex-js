import { describe, expect, it, test } from 'vitest'
import { findAndReplacePreservingCase } from './strings.js'

describe('Find and replace :', () => {
  it('Should return an exception with unsupported types', () => {
    expect(() => findAndReplacePreservingCase(2, 3, 4)).toThrowError()
    expect(() =>
      findAndReplacePreservingCase(Number.NaN, '', ''),
    ).toThrowError()
    expect(() => findAndReplacePreservingCase('', '', {})).toThrowError()
  })

  test('Find and replace strings with same length', () => {
    expect(
      findAndReplacePreservingCase('toto', 'Toto is a good programmer', 'titi'),
    ).toBe('Titi is a good programmer')
    expect(
      findAndReplacePreservingCase(
        'tutu',
        'Tutu toto titi tutu tata TuTU',
        'tata',
      ),
    ).toBe('Tata toto titi tata tata TaTA')
    expect(
      findAndReplacePreservingCase('Tata', 'Programming with taTA', 'toto'),
    ).toBe('Programming with toTO')
  })

  test('Find and replace with longer new word', () => {
    expect(
      findAndReplacePreservingCase(
        'toto',
        'Toto is a good programmer',
        'anonymous',
      ),
    ).toBe('Anon is a good programmer')
  })

  test('Find and replace with a shorter word', () => {
    expect(
      findAndReplacePreservingCase('toto', 'Toto is a good programmer', 'Ta'),
    ).toBe('Ta is a good programmer')
  })
})