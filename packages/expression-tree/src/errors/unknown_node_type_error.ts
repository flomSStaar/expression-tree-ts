export class UnknownNodeTypeError extends Error {
  constructor(nodeType: string) {
    super(`Unknown node type: ${nodeType}`)
    this.name = 'UnknownNodeTypeError'
  }
}
