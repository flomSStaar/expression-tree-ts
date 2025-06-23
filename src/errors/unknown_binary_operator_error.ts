export class UnknownBinaryOperatorError extends Error {
  constructor(operator: string) {
    super(`Unknown binary operator: ${operator}`)
    this.name = 'UnknownBinaryOperatorError'
  }
}
