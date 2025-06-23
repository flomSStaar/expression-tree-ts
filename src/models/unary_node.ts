import type { BaseNode } from './base_node.ts'
import { NodeType } from '../enums/node_type.ts'
import type { UnaryNodeOperator } from '../enums/unary_node_operator.ts'

export class UnaryNode implements BaseNode {
  type = NodeType.UNARY

  constructor(
    public operator: UnaryNodeOperator,
    public value: BaseNode
  ) {}
}
