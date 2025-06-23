import type { BaseNode } from './base_node.ts'
import { NodeType } from './node_type.ts'

export class NumberNode implements BaseNode {
  type = NodeType.NUMBER

  constructor(public readonly value: number) {}

  toString(): string {
    return this.value.toString()
  }
}
