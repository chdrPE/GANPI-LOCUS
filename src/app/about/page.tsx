export const metadata = {
  title: "GANPI – About Us",
};

export default function Page() {
  return (
    <main className="relative min-h-[60vh]">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-semibold">About Us</h1>
        <p className="mt-3 text-muted px-4 sm:px-0">
          We’re building tools that make terminals more approachable by combining fast native execution with powerful AI assistance.
        </p>
      </section>
    </main>
  );
}

