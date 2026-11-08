import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/fibonacci.js'

describe('fibonacci(n)', () => {
  it('casos base: f(0) = 0 y f(1) = 1', () => {
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
  })

  it('para n >= 2 devuelve f(n-1) + f(n-2)', () => {
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(10)).toBe(55)
    expect(fibonacci(20)).toBe(6765)
  })

  it('lanza RangeError si n es negativo', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError)
    expect(() => fibonacci(-1)).toThrow('solo números enteros ≥ 0')
  })

  it('lanza RangeError si n no es entero', () => {
    expect(() => fibonacci(2.5)).toThrow(RangeError)
  })
})
