export class NegativeSquareRootError extends Error {
  constructor() {
    super('Cannot take square root of a negative number')
    this.name = 'InvalidSquareRootError'
  }
}
