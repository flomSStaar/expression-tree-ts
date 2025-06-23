export class MissingRightValueError extends Error {
  constructor() {
    super('Right value is missing in the expression node')
    this.name = 'MissingRightValueError'
  }
}
