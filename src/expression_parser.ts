import type { BaseNode } from './models/base_node.ts'
import { NumberNode } from './models/number_node.ts'
import { BinaryNode } from './models/binary_node.ts'
import { BinaryNodeOperator } from './enums/binary_node_operator.ts'

export class ExpressionParser {
  private tokens: string[] = []
  private pos: number = 0

  private peek(): string | null {
    return this.tokens[this.pos] ?? null
  }

  private consume(): string {
    return this.tokens[this.pos++]!
  }

  private match(expected: string[]): string | null {
    const token = this.peek()
    if (token && expected.includes(token)) {
      this.consume()
      return token
    }
    return null
  }

  public parse(expression: string[]): BaseNode {
    this.tokens = [...expression]
    this.pos = 0

    const node = this.parseExpression()

    if (this.pos < this.tokens.length) {
      console.log('this.pos', this.pos)
      console.log('this.tokens', this.tokens)
      throw new Error('Current position is not at the end of the expression')
    }

    return node
  }

  private parseExpression(): BaseNode {
    let node = this.parseTerm()

    while (this.match(['+', '-'])) {
      const operator = this.mapRowOperator(this.tokens[this.pos - 1])
      const right = this.parseTerm()

      node = new BinaryNode(operator, node, right)
    }

    return node
  }

  private parseTerm(): BaseNode {
    let node = this.parseFactor()

    while (this.match(['^', '*', '/'])) {
      const operator = this.mapRowOperator(this.tokens[this.pos - 1])
      const right = this.parseFactor()

      node = new BinaryNode(operator, node, right)
    }

    return node
  }

  private parseFactor(): BaseNode {
    const token = this.peek()

    if (token === '(') {
      this.consume() // consume '('
      const node = this.parseExpression()
      if (this.consume() !== ')') {
        throw new Error("Expected ')'")
      }
      return node
    }

    const value = Number.parseFloat(this.consume())
    if (Number.isNaN(value)) {
      throw new Error(`Expected number, got "${token}"`)
    }

    return new NumberNode(value)
  }

  private mapRowOperator(operator: string): BinaryNodeOperator {
    switch (operator) {
      case '+':
        return BinaryNodeOperator.SUM
      case '-':
        return BinaryNodeOperator.SUBTRACT
      case '*':
        return BinaryNodeOperator.MULTIPLY
      case '/':
        return BinaryNodeOperator.DIVIDE
      case '^':
        return BinaryNodeOperator.POWER
      default:
        throw new Error(`Unknown operator: ${operator}`)
    }
  }
}
