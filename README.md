# TDD + Node + CI

Proyecto del Proyecto Intermodular (2º DAW) para practicar **TDD (Red → Green → Refactor)**
con Node.js, Vitest y GitHub Actions, trabajando en equipo con GitFlow.

## Funciones
- `fibonacci(n)`: devuelve el n-ésimo número de Fibonacci. Lanza `RangeError` si n no es un entero ≥ 0.
- `esPinValido(pin)`: devuelve `true` si el PIN tiene 4 o 6 dígitos y no son todos iguales.

## Uso
npm ci
npm test

## Ramas
- `master`: estable · `develop`: integración
- `feature/tests-*`: tests (rol testing) · `feature/*`: implementación (rol desarrollador)
