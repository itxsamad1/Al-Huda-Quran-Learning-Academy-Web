import Link from "next/link";

export default function HomePage() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-beige to-white flex flex-col items-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
        Welcome to Al-Huda Quran Learning Academy
      </h1>
      <p className="max-w-2xl mx-auto mb-8">
        Learn Quran online with qualified teachers from the comfort of your home. Start your journey toward spiritual enlightenment today.
      </p>
      <Link
        href="/student-form"
        className="bg-secondary text-white px-8 py-4 rounded shadow hover:opacity-90"
      >
        Apply for Online Quran Classes
      </Link>
    </section>
  );
}