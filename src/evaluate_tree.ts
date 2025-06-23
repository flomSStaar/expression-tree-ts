import { ExpressionNode } from './models/expression_node.ts'
import { NumberNode } from './models/number_node.ts'
import type { BaseNode } from './models/base_node.ts'
import { ExpressionOperator } from './enums/expression_operator.ts'
import { checkRightValue } from './utils/check_right_value.ts'
import { checkLeftValue } from './utils/check_left_value.ts'
import { NegativeSquareRootError } from './errors/invalid_square_root_error.ts'
import { DivisionByZeroError } from './errors/division_by_zero_error.ts'
import { UnknownExpressionOperatorError } from './errors/unknown_expression_operator_error.ts'
import { UnknownNodeTypeError } from './errors/unknown_node_type_error.ts'

export function evaluateTree(node: BaseNode): number {
  if (node instanceof ExpressionNode) {
    switch (node.operator) {
      case ExpressionOperator.SUM: {
        const leftValue = node.left ? evaluateTree(node.left) : 0
        const rightValue = evaluateTree(checkRightValue(node.right))
        return leftValue + rightValue
      }
      case ExpressionOperator.SUBTRACT: {
        const leftValue = node.left ? evaluateTree(node.left) : 0
        const rightValue = evaluateTree(checkRightValue(node.right))
        return leftValue - rightValue
      }
      case ExpressionOperator.MULTIPLY: {
        const leftValue = evaluateTree(checkLeftValue(node.left))
        const rightValue = evaluateTree(checkRightValue(node.right))
        return leftValue * rightValue
      }
      case ExpressionOperator.DIVIDE: {
        const leftValue = evaluateTree(checkLeftValue(node.left))
        const rightValue = evaluateTree(checkRightValue(node.right))
        if (rightValue === 0) {
          throw new DivisionByZeroError()
        }
        return leftValue / rightValue
      }
      case ExpressionOperator.SQUARE_ROOT: {
        const leftValue = evaluateTree(checkLeftValue(node.left))
        if (leftValue < 0) {
          throw new NegativeSquareRootError()
        }
        return Math.sqrt(leftValue)
      }
      default:
        throw new UnknownExpressionOperatorError(node.operator)
    }
  } else if (node instanceof NumberNode) {
    return node.value
  } else {
    throw new UnknownNodeTypeError(node.type)
  }
}
