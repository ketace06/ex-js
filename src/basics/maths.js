/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  if (typeof diameter !== 'number' || Number.isNaN(diameter) || diameter < 0) {
    throw new Error('Invalid Input')
  }
  const radius = diameter / 2
  return (4 / 3) * Math.PI * radius ** 3
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new Error('Invalid Input')
  }
  return Math.round(n * 10) / 10
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  if (grades.some((g) => typeof g !== 'number' || Number.isNaN(g))) {
    throw new Error('Invalid Input')
  }

  return grades.reduce((sum, g) => sum + g, 0) / grades.length
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  if (!Array.isArray(grades)) {
    throw new Error('Invalid Input')
  }
  if (grades.some((g) => typeof g !== 'number' || Number.isNaN(g))) {
    throw new Error('Invalid Input')
  }
  const total = grades.reduce((sum, g) => sum + g, 0)
  return parseFloat((total / grades.length).toFixed(1))
}
