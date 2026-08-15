export function StatsSection() {
  const stats = [
    { value: "2–4", label: "potrzebujesz trenerów" },
    { value: "20–50K", label: "zysku właścicielskiego miesięcznie" },
    { value: "50–150 m²", label: "powierzchni" },
    { value: "500–5000 zł", label: "czynszu miesięcznie" },
    { value: "70%", label: "marży" },
    { value: "87%", label: "osób otwiera kolejną placówkę" },
  ];

  return (
    <section className="relative z-10 w-full border-y border-gray-200 bg-white shadow-sm mt-12">
      <div className="grid w-full grid-cols-2 divide-x divide-y divide-gray-200 sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center bg-white px-4 py-8 text-center transition-colors hover:bg-gray-50"
          >
            <span className="whitespace-nowrap text-3xl font-bold text-gray-900 sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-3 text-sm font-medium text-gray-500">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}