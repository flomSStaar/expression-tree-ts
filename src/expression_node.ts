import type { BaseNode } from './base_node.ts'
import { ExpressionOperator } from './expression_operator.ts'
import { NodeType } from './node_type.ts'

export class ExpressionNode implements BaseNode {
  type = NodeType.EXPRESSION

  constructor(
    public operator: ExpressionOperator,
    public left: BaseNode | null = null,
    public right: BaseNode | null = null
  ) {}
}
