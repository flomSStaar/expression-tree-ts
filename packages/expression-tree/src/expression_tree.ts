import { ExpressionCutter } from './expression_cutter.js'
import { ExpressionParser } from './expression_parser.js'
import { ExpressionEvaluator } from './expression_evaluator.js'

export class ExpressionTree {
  constructor(
    protected cutter = new ExpressionCutter(),
    protected parser = new ExpressionParser(),
    protected evaluator = new ExpressionEvaluator()
  ) {}

  evaluate(expression: string): number {
    const cutExpression = this.cutter.cut(expression)

    const baseNode = this.parser.parse(cutExpression)

    return this.evaluator.evaluate(baseNode)
  }
}
