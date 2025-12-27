'use client'

import type React from 'react'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Delete } from 'lucide-react'
import { CalculatorHistory } from '@/features/history/components/CalculatorHistory.tsx'
import { useCalculatorHistory } from '@/features/history/hooks/useCalculatorHistory.ts'
import { useCalculator } from '@/features/calculator/hooks/useCalculator.ts'
import { cn } from '@/lib/utils.ts'

interface HistoryItem {
  expression: string
  result: number
  timestamp: Date
}

export function Calculator() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { addToHistory } = useCalculatorHistory()
  const calculate = useCalculator()

  const handleCalculate = () => {
    setError(null)
    if (!expression.trim()) {
      setError('Veuillez entrer une expression')
      return
    }

    const output = calculate(expression)

    if (output.result !== null) {
      setResult(output.result)

      addToHistory({
        expression,
        result: output.result,
        time: output.time,
      })
    } else {
      setError(output.error.message)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCalculate()
    }
  }

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      handleCalculate()
    } else if (value === 'C') {
      setExpression('')
      setResult(null)
      setError(null)
    } else if (value === '⌫') {
      setExpression((prev) => prev.slice(0, -1))
    } else {
      setExpression((prev) => prev + value)
    }
  }

  const handleHistoryClick = (item: HistoryItem) => {
    setExpression(item.expression)
    setResult(item.result)
    setError(null)
  }

  const keypadButtons = [
    ['C', '(', ')', '⌫'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '^', '+'],
    ['='],
  ]

  return (
    <div className="grid gap-4 grid-cols-[1fr_380px]">
      <Card className="shadow-2xl border-2 overflow-hidden bg-linear-to-br from-background to-muted/20">
        <CardContent className="p-6 space-y-4">
          {/* Affichage principal */}
          <div
            className="bg-linear-to-br from-primary/5 via-primary/10 to-accent/5 rounded-2xl p-6 space-y-3 border-2 border-primary/20 shadow-inner min-h-[140px]">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Expression</p>
              <Input
                type="text"
                placeholder="Entrez votre calcul..."
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                onKeyDown={handleKeyPress}
                className="text-2xl font-mono h-auto py-3 bg-background/50 border-0 shadow-sm text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>

            {/* Résultat avec effet visuel */}
            {result !== null && !error && (
              <div className="space-y-1 pt-2 border-t-2 border-primary/20">
                <p className="text-xs font-medium text-primary uppercase tracking-wide">Résultat</p>
                <p className="text-5xl font-bold text-primary font-mono break-all leading-tight drop-shadow-sm">
                  {result}
                </p>
              </div>
            )}

            {error && (
              <div className="pt-2">
                <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg border border-destructive/20">
                  <p className="text-sm font-medium">{error}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2 pt-2">
            {keypadButtons.map((row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-4 gap-2">
                {row.map((btn) => {
                  const isOperator = ['+', '-', '*', '/', '^'].includes(btn)
                  const isEqual = btn === '='
                  const isClear = btn === 'C'
                  const isDelete = btn === '⌫'
                  const isParenthesis = ['(', ')'].includes(btn)

                  return (
                    <Button
                      key={btn}
                      onClick={() => handleButtonClick(btn)}
                      variant={isEqual ? 'default' : isOperator ? 'secondary' : 'outline'}
                      className={cn(
                        'h-16 text-xl font-bold font-mono transition-all hover:scale-[1.02] active:scale-95 shadow-md flex-1',
                        isEqual && 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 col-span-4',
                        isOperator && 'bg-accent hover:bg-accent/90 text-accent-foreground',
                        isClear
                        && 'bg-destructive/15 hover:bg-destructive/25 text-destructive border-destructive/30',
                        isDelete && 'bg-muted hover:bg-muted/80',
                        isParenthesis && 'bg-primary/10 hover:bg-primary/20 text-primary border-primary/30',
                      )}
                    >
                      {isDelete ? <Delete className="h-6 w-6"/> : btn}
                    </Button>
                  )
                })}
              </div>
            ))}
          </div>

          {/* Info rapide */}
          <div className="pt-2">
            <p className="text-xs text-muted-foreground text-center">
              Utilisez le clavier ou tapez directement • <span className="font-semibold">Entrée</span> pour calculer
            </p>
          </div>
        </CardContent>
      </Card>

      <CalculatorHistory onHistoryItemClick={handleHistoryClick}/>
    </div>
  )
}
