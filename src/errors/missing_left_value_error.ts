export class MissingLeftValueError extends Error {
  constructor() {
    super('Left value is missing in the expression node')
    this.name = 'MissingLeftValueError'
  }
}
