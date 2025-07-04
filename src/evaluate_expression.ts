import { NumberNode } from './models/number_node.ts'
import type { BaseNode } from './models/base_node.ts'
import { NegativeSquareRootError } from './errors/invalid_square_root_error.ts'
import { DivisionByZeroError } from './errors/division_by_zero_error.ts'
import { UnknownNodeTypeError } from './errors/unknown_node_type_error.ts'
import { BinaryNode } from './models/binary_node.ts'
import { BinaryNodeOperator } from './enums/binary_node_operator.ts'
import { UnaryNode } from './models/unary_node.ts'
import { UnaryNodeOperator } from './enums/unary_node_operator.ts'
import { UnknownBinaryOperatorError } from './errors/unknown_binary_operator_error.ts'
import { UnknownUnaryOperatorError } from './errors/unknown_unary_operator_error.ts'

export function evaluateExpression(node: BaseNode): number {
  if (node instanceof BinaryNode) {
    switch (node.operator) {
      case BinaryNodeOperator.SUM: {
        return evaluateExpression(node.left) + evaluateExpression(node.right)
      }
      case BinaryNodeOperator.SUBTRACT: {
        return evaluateExpression(node.left) - evaluateExpression(node.right)
      }
      case BinaryNodeOperator.MULTIPLY: {
        return evaluateExpression(node.left) * evaluateExpression(node.right)
      }
      case BinaryNodeOperator.DIVIDE: {
        const leftValue = evaluateExpression(node.left)
        const rightValue = evaluateExpression(node.right)
        if (rightValue === 0) {
          throw new DivisionByZeroError()
        }
        return leftValue / rightValue
      }
      case BinaryNodeOperator.POWER: {
        return Math.pow(evaluateExpression(node.left), evaluateExpression(node.right))
      }
      default:
        throw new UnknownBinaryOperatorError(node.operator)
    }
  } else if (node instanceof UnaryNode) {
    switch (node.operator) {
      case UnaryNodeOperator.NEGATE: {
        return -evaluateExpression(node.value)
      }
      case UnaryNodeOperator.ABSOLUTE: {
        return Math.abs(evaluateExpression(node.value))
      }
      case UnaryNodeOperator.SQUARE_ROOT: {
        const leftValue = evaluateExpression(node.value)
        if (leftValue < 0) {
          throw new NegativeSquareRootError()
        }
        return Math.sqrt(leftValue)
      }
      default:
        throw new UnknownUnaryOperatorError(node.operator)
    }
  } else if (node instanceof NumberNode) {
    return node.value
  } else {
    throw new UnknownNodeTypeError(node.type)
  }
}
