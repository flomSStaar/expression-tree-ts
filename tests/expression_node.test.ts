import { describe, expect, it } from 'bun:test'
import { ExpressionNode } from '../src/models/expression_node.ts'
import { NumberNode } from '../src/models/number_node.ts'
import { ExpressionOperator } from '../src/enums/expression_operator.ts'

describe('expression node', () => {
  it('should create an expression node with the correct operator and values', () => {
    const leftNode = new NumberNode(1)
    const rightNode = new NumberNode(2)
    const operator = ExpressionOperator.SUM

    const node = new ExpressionNode(operator, leftNode, rightNode)

    expect(node.operator).toBe(operator)
    expect(node.left).toBe(leftNode)
    expect(node.right).toBe(rightNode)
  })

  it('should return the correct string representation', () => {
    const left = new NumberNode(1)
    const right = new NumberNode(2)
    const operator = ExpressionOperator.SUM
    const node = new ExpressionNode(operator, left, right)

    expect(node.toString()).toBe(`(${left.toString()} ${operator} ${right.toString()})`)
  })
})
