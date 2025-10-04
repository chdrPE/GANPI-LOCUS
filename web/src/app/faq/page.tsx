export const metadata = {
  title: "GANPI – FAQ",
};

export default function Page() {
  return (
    <main className="relative min-h-[60vh]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold">FAQ</h1>
        <div className="mt-6 space-y-5">
          <div>
            <h2 className="font-medium">How does GANPI work?</h2>
            <p className="text-sm text-muted">It converts natural language into shell commands using Gemini, with safety checks and previews.</p>
          </div>
          <div>
            <h2 className="font-medium">Is it safe?</h2>
            <p className="text-sm text-muted">Yes. GANPI shows a command preview and can require confirmation before executing.</p>
          </div>
          <div>
            <h2 className="font-medium">Which platforms are supported?</h2>
            <p className="text-sm text-muted">macOS, Linux, and Windows (via compatible shells) are supported.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

