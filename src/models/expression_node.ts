import type { BaseNode } from './base_node.ts'
import { ExpressionOperator } from '../enums/expression_operator.ts'
import { NodeType } from '../enums/node_type.ts'

export class ExpressionNode implements BaseNode {
  type = NodeType.EXPRESSION

  constructor(
    public operator: ExpressionOperator,
    public left: BaseNode | null = null,
    public right: BaseNode | null = null
  ) {}

  toString(): string {
    const leftStr = this.left ? this.left.toString() : ''
    const rightStr = this.right ? this.right.toString() : ''
    return `(${leftStr} ${this.operator} ${rightStr})`
  }
}
