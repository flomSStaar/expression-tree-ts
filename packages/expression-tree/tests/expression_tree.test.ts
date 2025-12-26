import { beforeEach, describe, expect, test } from 'vitest'
import { ExpressionTree } from '../src/expression_tree.js'
import { expressionTreeInput } from './inputs/expression_tree_input.js'

describe('expression tree', () => {
  let expressionTree: ExpressionTree

  beforeEach(() => {
    expressionTree = new ExpressionTree()
  })

  test.each(expressionTreeInput())('expression: %s = %d', (expression, expectedResult) => {
    expect(expressionTree.evaluate(expression)).toBe(expectedResult)
  })
})
