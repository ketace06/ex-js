import { describe, expect, expectTypeOf, it, test } from 'vitest'
import {
  accessPropertiesInObjects,
  crateUserObject,
  iteratesThroughObjectValuesAndProperties,
  parseJavaScriptObjectNotation,
  retrieveMaximumMinimumUserAges,
  stringifyJavaScriptObjectNotation,
} from './objects.js'

describe('Object creation :', () => {
  it('Should have properties', () => {
    expect(crateUserObject()).toHaveProperty('first_name')
    expect(crateUserObject()).toHaveProperty('last_name')
  })

  it('Should contain values', () => {
    expect(crateUserObject().first_name).toBe('Toto')
    expect(crateUserObject().last_name).toBe('Tutu')
  })
})

describe('Access properties :', () => {
  it('Should return string with properties chained', () => {
    expect(
      accessPropertiesInObjects({ first_name: 'Toto', last_name: 'Tutu' }),
    ).toBe('Toto Tutu')
    expect(
      accessPropertiesInObjects({ first_name: 'Tata', last_name: 'Titi' }),
    ).toBe('Tata Titi')
    expect(
      accessPropertiesInObjects({ first_name: 'Tutu', last_name: 'Tata' }),
    ).toBe('Tutu Tata')
  })
})

describe('Iterates through keys and properties :', () => {
  it('Should return keys uppercase and values lowercase', () => {
    expect(
      iteratesThroughObjectValuesAndProperties({
        key: 'Value',
      }),
    ).toStrictEqual({
      keys: ['KEY'],
      values: ['value'],
    })
    expect(
      iteratesThroughObjectValuesAndProperties({
        first_name: 'Toto',
        last_name: 'Tutu',
      }),
    ).toStrictEqual({
      keys: ['FIRST_NAME', 'LAST_NAME'],
      values: ['toto', 'tutu'],
    })
  })
})

describe('Find older and younger :', () => {
  test('Only one younger and older', () => {
    expect(
      retrieveMaximumMinimumUserAges([
        { name: 'Toto', age: 20 },
        { name: 'Tata', age: 18 },
        { name: 'Titi', age: 28 },
        { name: 'Tutu', age: 32 },
      ]),
    ).toStrictEqual({
      younger: 'Tata',
      older: 'Tutu',
    })
  })
  test('Multiple younger and older', () => {
    expect(
      retrieveMaximumMinimumUserAges([
        { name: 'Toto', age: 20 },
        { name: 'Tim', age: 18 },
        { name: 'Tata', age: 18 },
        { name: 'Titi', age: 28 },
        { name: 'Tutu', age: 32 },
        { name: 'Tom', age: 32 },
      ]),
    ).toStrictEqual({
      younger: 'Tim',
      older: 'Tom',
    })
  })
})

describe('Work with JSON', () => {
  test('Parse JSON', () => {
    expect(parseJavaScriptObjectNotation('{"name":"toto"}')).toStrictEqual({
      name: 'toto',
    })
  })
  test('Stringify JSON', () => {
    expect(
      stringifyJavaScriptObjectNotation({
        name: 'toto',
      }),
    ).toBe('{"name":"toto"}')
  })
})