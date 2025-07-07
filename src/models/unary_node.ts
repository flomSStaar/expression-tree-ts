import { BaseNode } from './base_node.ts'
import { NodeType } from '../enums/node_type.ts'
import type { UnaryNodeOperator } from '../enums/unary_node_operator.ts'

export class UnaryNode extends BaseNode {
  constructor(
    public operator: UnaryNodeOperator,
    public value: BaseNode
  ) {
    super(NodeType.UNARY)
  }
}
