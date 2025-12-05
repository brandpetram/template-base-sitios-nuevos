export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4">
          Template Base Sitios Nuevos
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Este template está listo para recibir componentes copy-paste de
          @brandpetram/ui.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-semibold mb-2">1. Copiar Componente</h2>
            <p className="text-sm text-muted-foreground">
              Copia el código de un componente del catálogo de Brandpetram.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-semibold mb-2">2. Pegar en src/components/</h2>
            <p className="text-sm text-muted-foreground">
              Pega el archivo .tsx en la carpeta de componentes.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-semibold mb-2">3. Importar y Usar</h2>
            <p className="text-sm text-muted-foreground">
              Importa el componente y úsalo en tus páginas.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-lg bg-muted">
          <h3 className="font-semibold mb-2">Variables CSS Disponibles</h3>
          <div className="grid gap-2 text-sm font-mono">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-background border"></div>
              <span>bg-background</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-foreground"></div>
              <span>bg-foreground</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary"></div>
              <span>bg-primary</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted"></div>
              <span>bg-muted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-card border"></div>
              <span>bg-card</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
