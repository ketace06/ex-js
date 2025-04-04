import { describe, expect, it, test } from 'vitest'
import { isBiggerThan2, isMult } from './conditions.js'

describe('Function is bigger than 2 :', () => {
  it('Should return an exception with unsupported types', () => {
    expect(() => isBiggerThan2('bonjour')).toThrowError()
    expect(() => isBiggerThan2(Number.NaN)).toThrowError()
  })

  test('Bigger numbers should return true', () => {
    expect(isBiggerThan2(4)).toBe(true)
    expect(isBiggerThan2(10)).toBe(true)
    expect(isBiggerThan2(55.43)).toBe(true)
  })

  test('Smaller numbers should return false', () => {
    expect(isBiggerThan2(0.1)).toBe(false)
    expect(isBiggerThan2(-5)).toBe(false)
    expect(isBiggerThan2(2)).toBe(false)
  })
})

describe('Function is multiple of :', () => {
  it('Should return an exception with unsupported types', () => {
    expect(() => isMult('bonjour', 4)).toThrowError()
    expect(() => isMult(Number.NaN, 3)).toThrowError()
    expect(() => isMult(3, {})).toThrowError()
    expect(() => isMult(2, Number.NaN)).toThrowError()
  })
  test('Valid multiples', () => {
    expect(isMult(100, 10)).toBe(true)
    expect(isMult(49, 7)).toBe(true)
    expect(isMult(2618, 77)).toBe(true)
  })

  test('Not multiples', () => {
    expect(isMult(27, 8)).toBe(false)
    expect(isMult(84, 5)).toBe(false)
    expect(isMult(10, 3)).toBe(false)
  })
})