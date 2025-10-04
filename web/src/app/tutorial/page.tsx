export const metadata = {
  title: "GANPI – Tutorial",
};

export default function Page() {
  return (
    <main className="relative min-h-[60vh]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Tutorial</h1>
        <p className="mt-3 text-muted">
          Learn how to install, configure, and use GANPI effectively. Detailed docs coming soon.
        </p>
        <ol className="mt-6 list-decimal list-inside space-y-2 text-sm text-foreground/90">
          <li>Install GANPI</li>
          <li>Set your Gemini API key</li>
          <li>Run interactive mode</li>
          <li>Preview and execute commands</li>
        </ol>
      </section>
    </main>
  );
}

