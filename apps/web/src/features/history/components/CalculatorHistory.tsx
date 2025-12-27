import { useCalculatorHistory } from '@/features/history/hooks/useCalculatorHistory'
import { HistoryIcon, Trash2Icon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { CalculatorHistoryItem } from '@/features/history/types'

interface Props {
  onHistoryItemClick?: (item: CalculatorHistoryItem) => void
}

export function CalculatorHistory({ onHistoryItemClick }: Props) {
  const { history, removeFromHistory, clearHistory } = useCalculatorHistory()

  return (
    <Card className="shadow-xl border-2 bg-linear-to-b from-background to-muted/10">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b-2">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <HistoryIcon className="h-5 w-5 text-accent"/>
            </div>
            <div>
              <h3 className="font-bold text-lg">Historique</h3>
              <p className="text-xs text-muted-foreground">Derniers calculs</p>
            </div>
          </div>
          {history.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearHistory}
              className="h-9 w-9 p-0 hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2Icon className="h-4 w-4"/>
            </Button>
          )}
        </div>

        <div className="space-y-2 max-h-[calc(100vh-240px)] overflow-y-auto pr-1">
          {history.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center mb-3">
                <HistoryIcon className="h-8 w-8 text-muted-foreground/30" />
              </div>
              <p className="text-sm text-muted-foreground">Aucun calcul</p>
            </div>
          ) : (
            history.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onHistoryItemClick?.(item)}
                className="w-full text-left p-3 rounded-xl border-2 bg-card hover:bg-accent/10 hover:border-accent/50 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-mono text-muted-foreground truncate flex-1 group-hover:text-foreground">
                      {item.expression}
                    </p>
                    <div className="flex flex-row gap-1 items-center">
                      <Button
                        variant="ghost" size="icon-sm"
                        onClick={() => removeFromHistory(idx)}
                        className="hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2Icon />
                      </Button>

                      <Badge variant="secondary" className="shrink-0 text-[10px] h-5">
                        {item.timestamp.toLocaleTimeString("fr-FR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xl font-bold font-mono text-primary truncate">= {item.result}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
