import { NodeType } from '../enums/node_type.ts'

export abstract class BaseNode {
  protected constructor(public readonly type: NodeType) {}
}
