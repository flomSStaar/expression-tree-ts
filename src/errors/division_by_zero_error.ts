export class DivisionByZeroError extends Error {
  constructor() {
    super('Division by zero is not allowed')
    this.name = 'DivisionByZeroError'
  }
}
