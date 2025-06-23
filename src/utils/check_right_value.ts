import type { BaseNode } from '../models/base_node.ts'
import { MissingRightValueError } from '../errors/missing_right_value_error.ts'

export function checkRightValue(node: BaseNode | null): BaseNode {
  if (!node) {
    throw new MissingRightValueError()
  }
  return node
}
