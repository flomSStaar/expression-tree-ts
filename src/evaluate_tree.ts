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

export function evaluateTree(node: BaseNode): number {
  if (node instanceof BinaryNode) {
    switch (node.operator) {
      case BinaryNodeOperator.SUM: {
        return evaluateTree(node.left) + evaluateTree(node.right)
      }
      case BinaryNodeOperator.SUBTRACT: {
        return evaluateTree(node.left) - evaluateTree(node.right)
      }
      case BinaryNodeOperator.MULTIPLY: {
        return evaluateTree(node.left) * evaluateTree(node.right)
      }
      case BinaryNodeOperator.DIVIDE: {
        const leftValue = evaluateTree(node.left)
        const rightValue = evaluateTree(node.right)
        if (rightValue === 0) {
          throw new DivisionByZeroError()
        }
        return leftValue / rightValue
      }
      default:
        throw new UnknownBinaryOperatorError(node.operator)
    }
  } else if (node instanceof UnaryNode) {
    switch (node.operator) {
      case UnaryNodeOperator.NEGATE: {
        return -evaluateTree(node.value)
      }
      case UnaryNodeOperator.ABSOLUTE: {
        return Math.abs(evaluateTree(node.value))
      }
      case UnaryNodeOperator.SQUARE_ROOT: {
        const leftValue = evaluateTree(node.value)
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
