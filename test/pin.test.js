import { describe, it, expect } from 'vitest'
import { esPinValido } from '../src/pin.js'

describe('esPinValido(pin)', () => {
  it('devuelve true con PINes válidos de 4 y 6 dígitos', () => {
    expect(esPinValido('1234')).toBe(true)
    expect(esPinValido('0912')).toBe(true)
    expect(esPinValido('123456')).toBe(true)
  })

  it('devuelve false si es null o undefined', () => {
    expect(esPinValido(null)).toBe(false)
    expect(esPinValido(undefined)).toBe(false)
  })

  it('devuelve false si está vacío', () => {
    expect(esPinValido('')).toBe(false)
  })

  it('devuelve false si la longitud no es 4 ni 6', () => {
    expect(esPinValido('123')).toBe(false)
    expect(esPinValido('12345')).toBe(false)
    expect(esPinValido('1234567')).toBe(false)
  })

  it('devuelve false si contiene caracteres que no son dígitos', () => {
    expect(esPinValido('12a4')).toBe(false)
    expect(esPinValido('12 4')).toBe(false)
    expect(esPinValido('-123')).toBe(false)
  })

  it('devuelve false si todos los dígitos son iguales', () => {
    expect(esPinValido('1111')).toBe(false)
    expect(esPinValido('888888')).toBe(false)
  })
})