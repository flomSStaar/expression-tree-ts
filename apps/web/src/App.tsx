import { Calculator } from '@/features/calculator/components/Calculator.tsx'
import { CalculatorHistoryProvider } from '@/features/history/components/CalculatorHistoryProvider.tsx'

export function App() {
  return <main className="min-h-screen bg-linear-to-br from-background via-background to-accent/5">
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Calculateur d'Expressions Mathématiques
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl text-balance">
            Évaluez des expressions mathématiques complexes en temps réel
          </p>
        </div>

        <CalculatorHistoryProvider>
          <Calculator />
        </CalculatorHistoryProvider>
      </div>
    </div>
  </main>
}