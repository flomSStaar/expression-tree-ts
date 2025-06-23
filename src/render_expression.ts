import type { BaseNode } from './models/base_node.ts'
import { NumberNode } from './models/number_node.ts'
import { BinaryNode } from './models/binary_node.ts'
import { BinaryNodeOperator } from './enums/binary_node_operator.ts'
import { UnaryNode } from './models/unary_node.ts'
import { UnaryNodeOperator } from './enums/unary_node_operator.ts'
import { UnknownBinaryOperatorError } from './errors/unknown_binary_operator_error.ts'
import { UnknownUnaryOperatorError } from './errors/unknown_unary_operator_error.ts'

export function renderExpression(node: BaseNode): string {
  if (node instanceof BinaryNode) {
    const leftNode = renderExpression(node.left)
    const rightNode = renderExpression(node.right)
    const operator = {
      [BinaryNodeOperator.SUM]: '+',
      [BinaryNodeOperator.SUBTRACT]: '-',
      [BinaryNodeOperator.MULTIPLY]: '*',
      [BinaryNodeOperator.DIVIDE]: '/',
      [BinaryNodeOperator.POWER]: '^',
    }[node.operator]

    if (!operator) {
      throw new UnknownBinaryOperatorError(node.operator)
    }

    return `${leftNode} ${operator} ${rightNode}`
  } else if (node instanceof UnaryNode) {
    // Handle unary operations

    switch (node.operator) {
      case UnaryNodeOperator.NEGATE: {
        const valueNode = renderExpression(node.value)
        return `-${valueNode}`
      }
      case UnaryNodeOperator.ABSOLUTE: {
        const valueNode = renderExpression(node.value)
        return `abs(${valueNode})`
      }
      case UnaryNodeOperator.SQUARE_ROOT: {
        const valueNode = renderExpression(node.value)
        return `sqrt(${valueNode})`
      }
      default:
        throw new UnknownUnaryOperatorError(node.operator)
    }
  } else if (node instanceof NumberNode) {
    return node.toString()
  } else {
    throw new Error(`Unknown node type: ${node.type}`)
  }
}
