import { NodeType } from '../enums/node_type'

export abstract class BaseNode {
  protected constructor(public readonly type: NodeType) {}
}
