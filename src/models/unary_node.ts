import { BaseNode } from './base_node.js'
import type { UnaryNodeOperator } from '../enums/unary_node_operator.js'
import { NodeType } from '../enums/node_type.js'

export class UnaryNode extends BaseNode {
  constructor(
    public operator: UnaryNodeOperator,
    public value: BaseNode
  ) {
    super(NodeType.UNARY)
  }
}
