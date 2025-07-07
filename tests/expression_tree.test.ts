import { beforeEach, describe, expect, test } from 'vitest'
import { expressionTreeInput } from './inputs/expression_tree_input'
import { ExpressionTree } from '../src/expression_tree'

describe('expression tree', () => {
  let expressionTree: ExpressionTree

  beforeEach(() => {
    expressionTree = new ExpressionTree()
  })

  test.each(expressionTreeInput())('expression: %s = %d', (expression, expectedResult) => {
    expect(expressionTree.evaluate(expression)).toBe(expectedResult)
  })
})
