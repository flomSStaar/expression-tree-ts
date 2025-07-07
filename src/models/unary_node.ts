import { BaseNode } from './base_node'
import { NodeType } from '../enums/node_type'
import type { UnaryNodeOperator } from '../enums/unary_node_operator'

export class UnaryNode extends BaseNode {
  constructor(
    public operator: UnaryNodeOperator,
    public value: BaseNode
  ) {
    super(NodeType.UNARY)
  }
}
