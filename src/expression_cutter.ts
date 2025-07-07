export class ExpressionCutter {
  static REGEX = /(\d+(?:\.\d+)?|\+|-|\*|\/|\(|\)|sqrt|abs)/g

  cut(expression: string): string[] {
    const cleanExpr = expression.replace(/\s+/g, '')

    return Array.from(cleanExpr.matchAll(ExpressionCutter.REGEX)).map((m) => m[0])
  }
}
