import { ExpressionNode } from './expression_node'
import { NumberNode } from './number_node.ts'
import type { BaseNode } from './base_node.ts'
import { ExpressionOperator } from './expression_operator.ts'
import { checkRightNode } from './check_right_node.ts'

export function evaluateTree(node: BaseNode): number {
  if (node instanceof ExpressionNode) {
    switch (node.operator) {
      case ExpressionOperator.SUM: {
        const leftValue = node.left ? evaluateTree(node.left) : 0
        const rightValue = evaluateTree(checkRightNode(node.right))
        return leftValue + rightValue
      }
      case ExpressionOperator.SUBTRACT: {
        const leftValue = node.left ? evaluateTree(node.left) : 0
        const rightValue = evaluateTree(checkRightNode(node.right))
        return leftValue - rightValue
      }
      case ExpressionOperator.MULTIPLY: {
        const leftValue = node.left ? evaluateTree(node.left) : 1
        const rightValue = evaluateTree(checkRightNode(node.right))
        return leftValue * rightValue
      }
      case ExpressionOperator.DIVIDE: {
        const leftValue = node.left ? evaluateTree(node.left) : 1
        const rightValue = evaluateTree(checkRightNode(node.right))
        if (rightValue === 0) {
          throw new Error('Division by zero is not allowed')
        }
        return leftValue / rightValue
      }
      case ExpressionOperator.SQUARE_ROOT: {
        const leftValue = node.left ? evaluateTree(node.left) : 0
        if (leftValue < 0) {
          throw new Error('Cannot take square root of a negative number')
        }
        return Math.sqrt(leftValue)
      }
      default:
        throw new Error(`Unknown operator: ${node.operator}`)
    }
  } else if (node instanceof NumberNode) {
    return node.value
  } else {
    throw new Error(`Unknown node type: ${node.type}`)
  }
}
