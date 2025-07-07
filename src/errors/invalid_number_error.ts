export class InvalidNumberError extends Error {
  constructor(public readonly token: string | null = null) {
    super('Invalid number format')
    this.name = 'InvalidNumberError'
  }
}
