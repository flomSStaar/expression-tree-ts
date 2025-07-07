import type { BaseNode } from './models/base_node'
import { NumberNode } from './models/number_node'
import { BinaryNode } from './models/binary_node'
import { BinaryNodeOperator } from './enums/binary_node_operator'
import { UnaryNode } from './models/unary_node'
import { UnaryNodeOperator } from './enums/unary_node_operator'
import { UnknownBinaryOperatorError } from './errors/unknown_binary_operator_error'
import { UnknownUnaryOperatorError } from './errors/unknown_unary_operator_error'
import { UnknownNodeTypeError } from './errors/unknown_node_type_error'

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
    switch (node.operator) {
      case UnaryNodeOperator.NEGATE: {
        if (node.value instanceof NumberNode && node.value.value === 0) {
          return '0'
        } else if (node.value instanceof BinaryNode) {
          const valueNode = renderExpression(node.value)
          return `-(${valueNode})`
        }

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
    throw new UnknownNodeTypeError(node.type)
  }
}
