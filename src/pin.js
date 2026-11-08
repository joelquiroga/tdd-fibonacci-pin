// src/pin.js
const SOLO_4_O_6_DIGITOS = /^(\d{4}|\d{6})$/
const DIGITOS_REPETIDOS = /^(\d)\1+$/

export function esPinValido(pin) {
  if (typeof pin !== 'string') return false
  return SOLO_4_O_6_DIGITOS.test(pin) && !DIGITOS_REPETIDOS.test(pin)
}
