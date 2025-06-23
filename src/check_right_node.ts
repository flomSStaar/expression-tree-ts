import type { BaseNode } from './base_node.ts'

export function checkRightNode(node: BaseNode | null): BaseNode {
  if (!node) {
    throw new Error('Right node is required for this operation')
  }
  return node
}