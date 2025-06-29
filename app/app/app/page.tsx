export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-4xl font-bold text-emea-dark">
          Willkommen bei Michael Shakra
        </h1>
        <p className="text-xl text-emea-dark/80 max-w-xl mx-auto">
          Ich baue Brücken zwischen Europa und dem Orient – klar, persönlich, strategisch.
        </p>
        <a
          href="https://emeatrade.de"
          className="inline-block bg-emea-blue text-white px-6 py-3 rounded-md hover:bg-emea-dark transition"
        >
          Zur Firmenwebsite
        </a>
      </div>
    </main>
  );
}
