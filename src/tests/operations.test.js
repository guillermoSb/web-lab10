import { add, divide, mod, multiply, sub } from '../utils/operations'

/**
 * Test math operations on the calculator
 */
describe('Operations', () => {
  it('Should be 4', () => {
    expect(add(2, 2)).toBe(4)
  })
  it('Should be 0', () => {
    expect(add(0, 0)).toBe(0)
  })
  it('Should be 2', () => {
    expect(sub(4, 2)).toBe(2)
  })
  it('Should be 2', () => {
    expect(divide(4, 2)).toBe(2)
  })
  it('Should be 6', () => {
    expect(multiply(3, 2)).toBe(6)
  })
  it('Should be 0', () => {
    expect(mod(2, 2)).toBe(0)
  })
})
