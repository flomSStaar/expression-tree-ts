import { ExpressionTree } from './src/expression_tree.ts'

function testExpression(expression: string, expectedResult: number) {
  const expressionTree = new ExpressionTree()

  console.log('-------------------')
  const expected = `${expression} = ${expectedResult}`
  const actual = `${expression} = ${expressionTree.evaluate(expression)}`

  console.log('expected:', expected)
  console.log('actual:  ', actual)
  console.log('same ?   ', expected === actual)
}

// testExpression('sqrt(6 + 4 / 2 * 5)', 4)

testExpression('6 - -2 + 5', 13)
testExpression('6 + -(2 + 5)', -1)
testExpression('6 + -2 * 5', -4)
testExpression('6 + 4 / 2 * 5', 16)
testExpression('6 + -(2 * 5)', -4)
testExpression('6 + 2 * 3 - 1', 11)
testExpression('6 + 2 * 3 - 1 + 2 ^ 2', 15)
