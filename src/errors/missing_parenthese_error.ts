export class MissingClosingParenthesisError extends Error {
  constructor() {
    super('Missing closing parenthesis in the expression')
    this.name = 'MissingClosingParenthesisError'
  }
}
