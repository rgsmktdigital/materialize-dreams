export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row md:px-10">
        <p className="font-display text-lg tracking-wider text-foreground">
          FIBRAS<span className="text-gold">.</span>
        </p>
        <p>© {new Date().getFullYear()} Fibras de Vidro · Arte & Engenharia</p>
      </div>
    </footer>
  );
}
