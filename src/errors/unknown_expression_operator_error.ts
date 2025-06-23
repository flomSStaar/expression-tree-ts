export class UnknownExpressionOperatorError extends Error {
  constructor(operator: string) {
    super(`Unknown expression operator: ${operator}`)
    this.name = 'UnknownExpressionOperatorError'
  }
}
