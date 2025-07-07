import { BaseNode } from './base_node.ts'
import type { BinaryNodeOperator } from '../enums/binary_node_operator.ts'
import { NodeType } from '../enums/node_type.ts'

export class BinaryNode extends BaseNode {
  constructor(
    public operator: BinaryNodeOperator,
    public left: BaseNode,
    public right: BaseNode
  ) {
    super(NodeType.BINARY)
  }
}
