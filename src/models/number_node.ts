import { BaseNode } from './base_node.ts'
import { NodeType } from '../enums/node_type.ts'

export class NumberNode extends BaseNode {
  constructor(public readonly value: number) {
    super(NodeType.NUMBER)
  }

  toString(): string {
    return this.value.toString()
  }
}
