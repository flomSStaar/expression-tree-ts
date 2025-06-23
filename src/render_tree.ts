import type { BaseNode } from './base_node.ts'
import { NumberNode } from './number_node.ts'
import { ExpressionNode } from './expression_node.ts'
import { ExpressionOperator } from './expression_operator.ts'

export function renderTree(node: BaseNode): string {
  if (node instanceof ExpressionNode) {
    switch (node.operator) {
      case ExpressionOperator.SUM: {
        const leftNode = node.left ? renderTree(node.left) : ''
        const rightNode = node.right ? renderTree(node.right) : ''
        return `${leftNode} + ${rightNode}`
      }
      case ExpressionOperator.SUBTRACT: {
        const leftNode = node.left ? renderTree(node.left) : ''
        const rightNode = node.right ? renderTree(node.right) : ''
        return `${leftNode} - ${rightNode}`
      }
      case ExpressionOperator.MULTIPLY: {
        const leftNode = node.left ? renderTree(node.left) : ''
        const rightNode = node.right ? renderTree(node.right) : ''
        return `${leftNode} * ${rightNode}`
      }
      case ExpressionOperator.DIVIDE: {
        const leftNode = node.left ? renderTree(node.left) : ''
        const rightNode = node.right ? renderTree(node.right) : ''
        return `${leftNode} / ${rightNode}`
      }
      case ExpressionOperator.SQUARE_ROOT: {
        const leftNode = node.left ? renderTree(node.left) : ''
        return `sqrt(${leftNode})`
      }
      default:
        throw new Error(`Unknown operator: ${node.operator}`)
    }
  } else if (node instanceof NumberNode) {
    return node.toString()
  } else {
    throw new Error(`Unknown node type: ${node.type}`)
  }
}
