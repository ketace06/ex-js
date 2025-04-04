import { describe, expect, it, test } from 'vitest'
import {
  computeAverage,
  computeSphereVolume,
  roundNumberToOneDecimals,
  roundedAverage,
} from './maths.js'

describe('Compute sphere volume :', () => {
  it('Should return an exception with unsupported types', () => {
    expect(() => computeSphereVolume('bonjour')).toThrowError()
    expect(() => computeSphereVolume(Number.NaN)).toThrowError()
    expect(() => computeSphereVolume(-5)).toThrowError()
  })

  test('Compute volumes', () => {
    expect(computeSphereVolume(0)).toBe(0)
    expect(computeSphereVolume(10)).toBe(523.5987755982989)
    expect(computeSphereVolume(24)).toBe(7238.229473870882)
    expect(computeSphereVolume(67)).toBe(157479.13854527115)
  })
})

describe('Round numbers :', () => {
  it('Should return an exception with unsupported types', () => {
    expect(() => roundNumberToOneDecimals('bonjour')).toThrowError()
    expect(() => roundNumberToOneDecimals(Number.NaN)).toThrowError()
  })

  test('Round numbers with ', () => {
    expect(roundNumberToOneDecimals(4.27)).toBe(4.3)
    expect(roundNumberToOneDecimals(4.207)).toBe(4.2)
    expect(roundNumberToOneDecimals(4.05)).toBe(4.1)
    expect(roundNumberToOneDecimals(4.049)).toBe(4)
    expect(roundNumberToOneDecimals(4.909)).toBe(4.9)
  })
})

describe('Compute averages with precision:', () => {
  it('Should return an exception with unsupported types', () => {
    expect(() => computeAverage('bonjour')).toThrowError()
    expect(() => computeAverage(Number.NaN)).toThrowError()
    expect(() => computeAverage([4, Number.NaN])).toThrowError()
    expect(() => computeAverage(['', 5])).toThrowError()
  })

  test('Average with ints', () => {
    expect(computeAverage([3, 4, 5])).toBe(4)
    expect(computeAverage([4, 4, 4, 5])).toBe(4.25)
    expect(computeAverage([3, 2, 5])).toBe(3.3333333333333335)
  })

  test('Average with floats', () => {
    expect(computeAverage([3.2, 4, 5.5])).toBe(4.233333333333333)
    expect(computeAverage([1.5, 3.3, 5.4, 4.2])).toBe(3.5999999999999996)
  })
})

describe('Compute rounded averages :', () => {
  it('Should return an exception with unsupported types', () => {
    expect(() => roundedAverage('bonjour')).toThrowError()
    expect(() => roundedAverage(Number.NaN)).toThrowError()
    expect(() => roundedAverage([4, Number.NaN])).toThrowError()
    expect(() => roundedAverage(['', 5])).toThrowError()
  })

  test('Average with ints', () => {
    expect(roundedAverage([3, 4, 5])).toBe(4)
    expect(roundedAverage([3, 4, 6])).toBe(4.3)
    expect(roundedAverage([2, 3, 5, 4, 5])).toBe(3.8)
  })

  test('Average with floats', () => {
    expect(roundedAverage([3.2, 4, 5.5])).toBe(4.2)
    expect(roundedAverage([2.3, 4.3, 6])).toBe(4.2)
    expect(roundedAverage([3.5, 4.4, 5.5, 3])).toBe(4.1)
  })
})