export default function AboutPage() {
  const teachers = [
    {
      name: "Ustadh Ahmad",
      degree: "Al-Azhar University",
      bio: "10+ years teaching Quran and Tajweed online.",
    },
    {
      name: "Ustadha Fatima",
      degree: "Islamic University of Madinah",
      bio: "Specialist in Quran Memorization (Hifz).",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6">About Us</h2>
      <p className="mb-8">
        Al-Huda Quran Learning Academy is dedicated to providing quality Quran
        education online, guided by experienced and qualified teachers.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {teachers.map((t) => (
          <div
            key={t.name}
            className="border p-6 rounded shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-1">{t.name}</h3>
            <p className="text-sm italic mb-2">{t.degree}</p>
            <p>{t.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}