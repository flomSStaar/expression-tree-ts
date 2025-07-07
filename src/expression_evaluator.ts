import type { BaseNode } from './models/base_node'
import { BinaryNode } from './models/binary_node.ts'
import { UnaryNode } from './models/unary_node.ts'
import { NumberNode } from './models/number_node.ts'
import { UnaryNodeOperator } from './enums/unary_node_operator.ts'
import { NegativeSquareRootError } from './errors/invalid_square_root_error.ts'
import { UnknownUnaryOperatorError } from './errors/unknown_unary_operator_error.ts'
import { UnknownNodeTypeError } from './errors/unknown_node_type_error.ts'
import { BinaryNodeOperator } from './enums/binary_node_operator.ts'
import { DivisionByZeroError } from './errors/division_by_zero_error.ts'
import { UnknownBinaryOperatorError } from './errors/unknown_binary_operator_error.ts'

export class ExpressionEvaluator {
  public evaluate(node: BaseNode): number {
    if (node instanceof BinaryNode) {
      return this.evaluateBinaryNode(node)
    } else if (node instanceof UnaryNode) {
      return this.evaluateUnaryNode(node)
    } else if (node instanceof NumberNode) {
      return this.evaluateNumberNode(node)
    } else {
      throw new UnknownNodeTypeError(node.type)
    }
  }

  protected evaluateBinaryNode(node: BinaryNode): number {
    switch (node.operator) {
      case BinaryNodeOperator.SUM: {
        return this.evaluate(node.left) + this.evaluate(node.right)
      }
      case BinaryNodeOperator.SUBTRACT: {
        return this.evaluate(node.left) - this.evaluate(node.right)
      }
      case BinaryNodeOperator.MULTIPLY: {
        return this.evaluate(node.left) * this.evaluate(node.right)
      }
      case BinaryNodeOperator.DIVIDE: {
        const leftValue = this.evaluate(node.left)
        const rightValue = this.evaluate(node.right)
        if (rightValue === 0) {
          throw new DivisionByZeroError()
        }
        return leftValue / rightValue
      }
      case BinaryNodeOperator.POWER: {
        return Math.pow(this.evaluate(node.left), this.evaluate(node.right))
      }
      default:
        throw new UnknownBinaryOperatorError(node.operator)
    }
  }

  protected evaluateUnaryNode(node: UnaryNode): number {
    switch (node.operator) {
      case UnaryNodeOperator.NEGATE: {
        return -this.evaluate(node.value)
      }
      case UnaryNodeOperator.ABSOLUTE: {
        return Math.abs(this.evaluate(node.value))
      }
      case UnaryNodeOperator.SQUARE_ROOT: {
        const leftValue = this.evaluate(node.value)
        if (leftValue < 0) {
          throw new NegativeSquareRootError()
        }
        return Math.sqrt(leftValue)
      }
      default:
        throw new UnknownUnaryOperatorError(node.operator)
    }
  }

  protected evaluateNumberNode(node: NumberNode): number {
    return node.value
  }
}
