import { BaseNode } from './base_node.js'
import { NodeType } from '../enums/node_type.js'

export class NumberNode extends BaseNode {
  constructor(public readonly value: number) {
    super(NodeType.NUMBER)
  }

  toString(): string {
    return this.value.toString()
  }
}
