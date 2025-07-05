export default function DownloadsPage() {
  const resources = [
    { name: "Complete Quran PDF", link: "#" },
    { name: "Surah Yaseen", link: "#" },
    { name: "Class Material Pack", link: "#" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6">Downloads</h2>
      <ul className="space-y-4">
        {resources.map((r) => (
          <li key={r.name} className="border p-4 rounded bg-white flex justify-between items-center">
            <span>{r.name}</span>
            <a
              href={r.link}
              className="bg-secondary text-white px-4 py-2 rounded hover:opacity-90"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}