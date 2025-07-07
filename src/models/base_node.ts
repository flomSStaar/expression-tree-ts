import type { NodeType } from '../enums/node_type.js'

export abstract class BaseNode {
  protected constructor(public readonly type: NodeType) {}
}
