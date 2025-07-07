import { InvalidExpressionError } from './errors/invalid_expression_error.js'
import { BaseNode } from './models/base_node.js'
import { BinaryNodeOperator } from './enums/binary_node_operator.js'
import { UnknownBinaryOperatorError } from './errors/unknown_binary_operator_error.js'
import { NumberNode } from './models/number_node.js'
import { UnaryNode } from './models/unary_node.js'
import { UnaryNodeOperator } from './enums/unary_node_operator.js'
import { MissingClosingParenthesisError } from './errors/missing_parenthese_error.js'
import { InvalidNumberError } from './errors/invalid_number_error.js'
import { BinaryNode } from './models/binary_node.js'

export class ExpressionParser {
  protected tokens: string[] = []
  protected pos: number = 0

  protected peek(): string | null {
    return this.tokens[this.pos] ?? null
  }

  protected consume(): string {
    if (this.pos >= this.tokens.length) {
      throw new InvalidExpressionError()
    }
    return this.tokens[this.pos++]
  }

  protected match(expected: string[]): string | null {
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
      throw new InvalidExpressionError()
    }

    return node
  }

  protected parseExpression(): BaseNode {
    let node = this.parseTerm()

    while (this.match(['+', '-'])) {
      const operator = this.mapRowOperator(this.tokens[this.pos - 1])
      const right = this.parseTerm()

      node = new BinaryNode(operator, node, right)
    }

    return node
  }

  protected parseTerm(): BaseNode {
    let node = this.parseFactor()

    while (this.match(['^', '*', '/'])) {
      const operator = this.mapRowOperator(this.tokens[this.pos - 1])
      const right = this.parseFactor()

      node = new BinaryNode(operator, node, right)
    }

    return node
  }

  protected parseFactor(): BaseNode {
    const token = this.peek()

    if (token === '-') {
      this.consume() // consume '-'
      const value = this.parseFactor()
      return new UnaryNode(UnaryNodeOperator.NEGATE, value)
    }

    if (token === '(') {
      this.consume() // consume '('
      const node = this.parseExpression()
      if (this.consume() !== ')') {
        throw new MissingClosingParenthesisError()
      }
      return node
    }

    const value = Number(this.consume())
    if (Number.isNaN(value)) {
      throw new InvalidNumberError(token)
    }

    return new NumberNode(value)
  }

  protected mapRowOperator(operator: string): BinaryNodeOperator {
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
        throw new UnknownBinaryOperatorError(operator)
    }
  }
}
