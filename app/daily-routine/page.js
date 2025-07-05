export default function DailyRoutinePage() {
  const prayers = ["Fajr", "Zohar", "Asr", "Maghrib", "Esha"];
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Daily Routine</h2>
      <ul className="space-y-4">
        {prayers.map((p) => (
          <li
            key={p}
            className="border p-4 rounded bg-white flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <span className="font-semibold text-lg">{p}</span>
            <span className="mt-2 md:mt-0 text-sm text-gray-600">
              Recite morning/evening Duas and memorize selected Surahs.
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}