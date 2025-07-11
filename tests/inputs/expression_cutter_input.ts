export function expressionCutterInput(): [string, string[]][] {
  return [
    // Addition
    ['6 + 5', ['6', '+', '5']],
    ['56 + 5', ['56', '+', '5']],
    ['56 + 15', ['56', '+', '15']],
    ['6 + 15', ['6', '+', '15']],
    ['6+5', ['6', '+', '5']],
    ['56+5', ['56', '+', '5']],
    ['56+15', ['56', '+', '15']],
    ['6+15', ['6', '+', '15']],
    // Subtraction
    ['6 - 4', ['6', '-', '4']],
    ['61 - 4', ['61', '-', '4']],
    ['61 - 14', ['61', '-', '14']],
    ['6 - 14', ['6', '-', '14']],
    ['6-4', ['6', '-', '4']],
    ['61-4', ['61', '-', '4']],
    ['61-14', ['61', '-', '14']],
    ['6-14', ['6', '-', '14']],
    // Multiplication
    ['6 * 3', ['6', '*', '3']],
    ['61 * 3', ['61', '*', '3']],
    ['61 * 15', ['61', '*', '15']],
    ['6 * 15', ['6', '*', '15']],
    ['6*3', ['6', '*', '3']],
    ['61*3', ['61', '*', '3']],
    ['61*15', ['61', '*', '15']],
    ['6*15', ['6', '*', '15']],
    // Division
    ['6 / 2', ['6', '/', '2']],
    ['61 / 2', ['61', '/', '2']],
    ['61 / 15', ['61', '/', '15']],
    ['6 / 15', ['6', '/', '15']],
    ['6/2', ['6', '/', '2']],
    ['61/2', ['61', '/', '2']],
    ['61/15', ['61', '/', '15']],
    ['6/15', ['6', '/', '15']],
    // Power
    ['6 ^ 2', ['6', '^', '2']],
    ['61 ^ 2', ['61', '^', '2']],
    ['61 ^ 15', ['61', '^', '15']],
    ['6 ^ 15', ['6', '^', '15']],
    ['6^2', ['6', '^', '2']],
    ['61^2', ['61', '^', '2']],
    ['61^15', ['61', '^', '15']],
    ['6^15', ['6', '^', '15']],
    // Complex expressions
    ['6 + 5 - 4 * 3 / 2', ['6', '+', '5', '-', '4', '*', '3', '/', '2']],
    ['6 + 5 - 4 * 3 / 2 + 15', ['6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15']],
    ['6 + 5 - 4 * 3 / 2 - 15', ['6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15']],
    ['-6 + 5 - 4 * 3 / 2 + 15', ['-', '6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15']],
    ['-6 + 5 - 4 * 3 / 2 - 15', ['-', '6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15']],
    [
      '6 + 5 - 4 * 3 / 2 + 15 - 10',
      ['6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15', '-', '10'],
    ],
    [
      '6 + 5 - 4 * 3 / 2 - 15 + 10',
      ['6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15', '+', '10'],
    ],
    [
      '6 + 5 - 4 * 3 / 2 + 15 ^ 2',
      ['6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15', '^', '2'],
    ],
    [
      '6 + 5 - 4 * 3 / 2 - 15 ^ 2',
      ['6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15', '^', '2'],
    ],
    [
      '-6 + 5 - 4 * 3 / 2 + 15 ^ 2',
      ['-', '6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15', '^', '2'],
    ],
    [
      '-6 + 5 - 4 * 3 / 2 - 15 ^ 2',
      ['-', '6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15', '^', '2'],
    ],
    ['6+5-4*3/2', ['6', '+', '5', '-', '4', '*', '3', '/', '2']],
    ['6+5-4*3/2+15', ['6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15']],
    ['6+5-4*3/2-15', ['6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15']],
    ['-6+5-4*3/2+15', ['-', '6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15']],
    ['-6+5-4*3/2-15', ['-', '6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15']],
    ['6+5-4*3/2+15-10', ['6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15', '-', '10']],
    ['6+5-4*3/2-15+10', ['6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15', '+', '10']],
    ['6+5-4*3/2+15^2', ['6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15', '^', '2']],
    ['6+5-4*3/2-15^2', ['6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15', '^', '2']],
    ['-6+5-4*3/2+15^2', ['-', '6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15', '^', '2']],
    ['-6+5-4*3/2-15^2', ['-', '6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15', '^', '2']],
    // Negative numbers
    ['-6 + 5', ['-', '6', '+', '5']],
    ['6 + -5', ['6', '+', '-', '5']],
    ['-65 + 4', ['-', '65', '+', '4']],
    ['6 + -45', ['6', '+', '-', '45']],
    ['-6 - 5', ['-', '6', '-', '5']],
    ['-65 - 4', ['-', '65', '-', '4']],
    ['-6 * 5', ['-', '6', '*', '5']],
    ['-65 * 4', ['-', '65', '*', '4']],
    ['-6 / 5', ['-', '6', '/', '5']],
    ['-65 / 4', ['-', '65', '/', '4']],
    ['6 ^ -2', ['6', '^', '-', '2']],
    ['-6 * -5 + 4 / -2', ['-', '6', '*', '-', '5', '+', '4', '/', '-', '2']],
    ['-6+5', ['-', '6', '+', '5']],
    ['6+-5', ['6', '+', '-', '5']],
    ['-65+4', ['-', '65', '+', '4']],
    ['6+-45', ['6', '+', '-', '45']],
    ['-6-5', ['-', '6', '-', '5']],
    ['-65-4', ['-', '65', '-', '4']],
    ['-6*5', ['-', '6', '*', '5']],
    ['-65*4', ['-', '65', '*', '4']],
    ['-6/5', ['-', '6', '/', '5']],
    ['-65/4', ['-', '65', '/', '4']],
    ['-6*-5+4/-2', ['-', '6', '*', '-', '5', '+', '4', '/', '-', '2']],
    // Parentheses
    ['(3)', ['(', '3', ')']],
    ['-(3)', ['-', '(', '3', ')']],
    ['-(2+4)', ['-', '(', '2', '+', '4', ')']],
    ['-((1+2)*3)', ['-', '(', '(', '1', '+', '2', ')', '*', '3', ')']],
    ['5 + -(7-2)', ['5', '+', '-', '(', '7', '-', '2', ')']],
    ['--(8/2)', ['-', '-', '(', '8', '/', '2', ')']],
    ['(6)-(-3)', ['(', '6', ')', '-', '(', '-', '3', ')']],
    ['(6 + 5)', ['(', '6', '+', '5', ')']],
    ['(6 + 5) - 4', ['(', '6', '+', '5', ')', '-', '4']],
    ['(6 + 5) * 4', ['(', '6', '+', '5', ')', '*', '4']],
    ['(6 + 5) / 4', ['(', '6', '+', '5', ')', '/', '4']],
    ['-(6 + 5) / 4', ['-', '(', '6', '+', '5', ')', '/', '4']],
    ['(6 + 5) - (4 * 3)', ['(', '6', '+', '5', ')', '-', '(', '4', '*', '3', ')']],
    ['(6 + 5) - (4 * 3 / 2)', ['(', '6', '+', '5', ')', '-', '(', '4', '*', '3', '/', '2', ')']],
    [
      '((6 + 5) - (4 * 3)) / 2',
      ['(', '(', '6', '+', '5', ')', '-', '(', '4', '*', '3', ')', ')', '/', '2'],
    ],
    ['(56 + 5)', ['(', '56', '+', '5', ')']],
    ['(6 + 15)', ['(', '6', '+', '15', ')']],
    ['(61 - 4)', ['(', '61', '-', '4', ')']],
    ['(6 - 14)', ['(', '6', '-', '14', ')']],
    ['(6 * 3)', ['(', '6', '*', '3', ')']],
    ['(61 * 3)', ['(', '61', '*', '3', ')']],
    ['(61 / 2)', ['(', '61', '/', '2', ')']],
    ['(6 / 15)', ['(', '6', '/', '15', ')']],
    ['(6 ^ 2)', ['(', '6', '^', '2', ')']],
    ['(61 ^ 2)', ['(', '61', '^', '2', ')']],
    ['(61 ^ 15)', ['(', '61', '^', '15', ')']],
    ['(6 ^ 15)', ['(', '6', '^', '15', ')']],
    ['(6 + 5 - 4 * 3 / 2)', ['(', '6', '+', '5', '-', '4', '*', '3', '/', '2', ')']],
    [
      '(6 + 5 - 4 * 3 / 2 + 15)',
      ['(', '6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15', ')'],
    ],
    [
      '(6 + 5 - 4 * 3 / 2 - 15)',
      ['(', '6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15', ')'],
    ],
    [
      '-(6 + 5 - 4 * 3 / 2 + 15)',
      ['-', '(', '6', '+', '5', '-', '4', '*', '3', '/', '2', '+', '15', ')'],
    ],
    [
      '-(6 + 5 - 4 * 3 / 2 - 15)',
      ['-', '(', '6', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15', ')'],
    ],
    [
      '(6 + 5 - 41 * 3 / 2 + 15 - 10)',
      ['(', '6', '+', '5', '-', '41', '*', '3', '/', '2', '+', '15', '-', '10', ')'],
    ],
    [
      '(65 + 5 - 4 * 3 / 2 - 15 + 10)',
      ['(', '65', '+', '5', '-', '4', '*', '3', '/', '2', '-', '15', '+', '10', ')'],
    ],
    ['(6 + 5) ^ 2', ['(', '6', '+', '5', ')', '^', '2']],
    ['(6 + 5) ^ 15', ['(', '6', '+', '5', ')', '^', '15']],
    ['(6 ^ 2 + 5)', ['(', '6', '^', '2', '+', '5', ')']],
    ['(6 + 5) ^ (4 * 3)', ['(', '6', '+', '5', ')', '^', '(', '4', '*', '3', ')']],
    // Float numbers
    ['6.5 + 5.2', ['6.5', '+', '5.2']],
    ['-6.5 + 5.2', ['-', '6.5', '+', '5.2']],
    ['6.5 - 4.3', ['6.5', '-', '4.3']],
    ['-6.5 - 4.3', ['-', '6.5', '-', '4.3']],
    ['6.5 * 3.1', ['6.5', '*', '3.1']],
    ['-6.5 * 3.1', ['-', '6.5', '*', '3.1']],
    ['6.5 / 2.2', ['6.5', '/', '2.2']],
    ['-6.5 / 2.2', ['-', '6.5', '/', '2.2']],
    ['6.5 + 5.2 - 4.3 * 3.1 / 2.2', ['6.5', '+', '5.2', '-', '4.3', '*', '3.1', '/', '2.2']],
    [
      '6.5 + 5.2 - 4.3 * 3.1 / 2.2 + 15.0',
      ['6.5', '+', '5.2', '-', '4.3', '*', '3.1', '/', '2.2', '+', '15.0'],
    ],
    [
      '6.5 + 5.2 - 4.3 * 3.1 / 2.2 - 15.0',
      ['6.5', '+', '5.2', '-', '4.3', '*', '3.1', '/', '2.2', '-', '15.0'],
    ],
    [
      '-6.5 + 5.2 - 4.3 * 3.1 / 2.2 + 15',
      ['-', '6.5', '+', '5.2', '-', '4.3', '*', '3.1', '/', '2.2', '+', '15'],
    ],
    [
      '-6.5 + 5.2 - 4.3 * 3.1 / 2.2 - 15',
      ['-', '6.5', '+', '5.2', '-', '4.3', '*', '3.1', '/', '2.2', '-', '15'],
    ],
    // Square root
    ['sqrt(4)', ['sqrt', '(', '4', ')']],
    ['sqrt(16 + 9)', ['sqrt', '(', '16', '+', '9', ')']],
    ['sqrt(25) + 3', ['sqrt', '(', '25', ')', '+', '3']],
    ['3 + sqrt(36)', ['3', '+', 'sqrt', '(', '36', ')']],
    ['sqrt(49) - 2', ['sqrt', '(', '49', ')', '-', '2']],
    ['-sqrt(64)', ['-', 'sqrt', '(', '64', ')']],
    ['sqrt(81) * 2', ['sqrt', '(', '81', ')', '*', '2']],
    ['-3 + sqrt(100)', ['-', '3', '+', 'sqrt', '(', '100', ')']],
    // Absolute value
    ['abs(5)', ['abs', '(', '5', ')']],
    ['abs(-5)', ['abs', '(', '-', '5', ')']],
    ['abs(3 - 7)', ['abs', '(', '3', '-', '7', ')']],
    ['abs(-3 + 7)', ['abs', '(', '-', '3', '+', '7', ')']],
    ['-abs(4)', ['-', 'abs', '(', '4', ')']],
    ['abs(6 * -2)', ['abs', '(', '6', '*', '-', '2', ')']],
    ['-abs(-8 / 2)', ['-', 'abs', '(', '-', '8', '/', '2', ')']],
    ['abs(9 + 1)', ['abs', '(', '9', '+', '1', ')']],
    ['abs(-10 - 5)', ['abs', '(', '-', '10', '-', '5', ')']],
    ['abs(12 * 3)', ['abs', '(', '12', '*', '3', ')']],
    ['abs(-15 / 5)', ['abs', '(', '-', '15', '/', '5', ')']],
    // Mixed operations
    ['6 + sqrt(4)', ['6', '+', 'sqrt', '(', '4', ')']],
    ['abs(3) + 5', ['abs', '(', '3', ')', '+', '5']],
    ['-sqrt(16) - 2', ['-', 'sqrt', '(', '16', ')', '-', '2']],
    ['(6 + 5) * abs(-3)', ['(', '6', '+', '5', ')', '*', 'abs', '(', '-', '3', ')']],
    ['sqrt(25) / abs(-5)', ['sqrt', '(', '25', ')', '/', 'abs', '(', '-', '5', ')']],
    ['abs(6 - 2) + sqrt(9)', ['abs', '(', '6', '-', '2', ')', '+', 'sqrt', '(', '9', ')']],
    ['-abs(8) * sqrt(4)', ['-', 'abs', '(', '8', ')', '*', 'sqrt', '(', '4', ')']],
    ['abs(-10) / (2 + 3)', ['abs', '(', '-', '10', ')', '/', '(', '2', '+', '3', ')']],
  ]
}
