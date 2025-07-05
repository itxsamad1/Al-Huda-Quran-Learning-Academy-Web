export default function PackagesPage() {
  const packages = [
    {
      name: "Free Trial",
      price: "$0",
      features: ["3 Days", "1-on-1 Session", "No Credit Card Required"],
    },
    {
      name: "Standard",
      price: "$30/mo",
      features: ["3 Classes per Week", "Course Materials", "Email Support"],
    },
    {
      name: "Premium",
      price: "$50/mo",
      features: ["5 Classes per Week", "Priority Scheduling", "WhatsApp Support"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6">Packages</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((p) => (
          <div
            key={p.name}
            className="border p-6 rounded shadow-sm bg-white hover:shadow-md transition-shadow flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-2xl font-bold mb-4">{p.price}</p>
            <ul className="mb-6 space-y-1 flex-1">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <a
              href="/payment"
              className="bg-secondary text-white text-center py-2 rounded hover:opacity-90"
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}