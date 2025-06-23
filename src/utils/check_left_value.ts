import type { BaseNode } from '../models/base_node.ts'
import { MissingLeftValueError } from '../errors/missing_left_value_error.ts'

export function checkLeftValue(node: BaseNode | null): BaseNode {
  if (!node) {
    throw new MissingLeftValueError()
  }
  return node
}
