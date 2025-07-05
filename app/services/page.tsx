export default function ServicesPage() {
  const services = [
    {
      title: "Noorani Qaida",
      duration: "3 months",
      price: "$50",
    },
    {
      title: "Quran Reading with Tajweed",
      duration: "1 year",
      price: "$200",
    },
    {
      title: "Quran Memorization (Hifz)",
      duration: "2-3 years",
      price: "$600",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="border p-6 rounded shadow-sm bg-white hover:shadow-md transition-shadow flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="mb-2">Duration: {s.duration}</p>
            <p className="font-bold mb-4">{s.price}</p>
            <a
              href="/contact"
              className="mt-auto bg-secondary text-white text-center py-2 rounded hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}