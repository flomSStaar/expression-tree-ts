import { BaseNode } from './base_node'
import { NodeType } from '../enums/node_type'

export class NumberNode extends BaseNode {
  constructor(public readonly value: number) {
    super(NodeType.NUMBER)
  }

  toString(): string {
    return this.value.toString()
  }
}
