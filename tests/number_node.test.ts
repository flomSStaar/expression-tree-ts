import { describe, expect, it } from 'bun:test'
import { NumberNode } from '../src/models/number_node.ts'
import { NodeType } from '../src/enums/node_type.ts'

describe('number node', () => {
  it('should create a number node with the correct value', () => {
    const value = 42
    const node = new NumberNode(value)

    expect(node.value).toBe(value)
    expect(node.type).toBe(NodeType.NUMBER)
  })

  it('should return the correct string representation', () => {
    const value = 42
    const node = new NumberNode(value)

    expect(node.toString()).toBe(value.toString())
  })
})
