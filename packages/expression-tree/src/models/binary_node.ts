import { BaseNode } from './base_node.js'
import { BinaryNodeOperator } from '../enums/binary_node_operator.js'
import { NodeType } from '../enums/node_type.js'

export class BinaryNode extends BaseNode {
  constructor(
    public operator: BinaryNodeOperator,
    public left: BaseNode,
    public right: BaseNode
  ) {
    super(NodeType.BINARY)
  }
}
