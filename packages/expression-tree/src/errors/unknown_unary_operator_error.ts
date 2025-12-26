export class UnknownUnaryOperatorError extends Error {
  constructor(operator: string) {
    super(`Unknown unary operator: ${operator}`)
    this.name = 'UnknownUnaryOperatorError'
  }
}
