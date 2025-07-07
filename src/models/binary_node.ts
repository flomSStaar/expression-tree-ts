import { BaseNode } from './base_node'
import type { BinaryNodeOperator } from '../enums/binary_node_operator'
import { NodeType } from '../enums/node_type'

export class BinaryNode extends BaseNode {
  constructor(
    public operator: BinaryNodeOperator,
    public left: BaseNode,
    public right: BaseNode
  ) {
    super(NodeType.BINARY)
  }
}
