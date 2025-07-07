export class InvalidExpressionError extends Error {
  constructor() {
    super('Invalid expression encountered during parsing')
    this.name = 'InvalidExpressionError'
  }
}
