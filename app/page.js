import Link from "next/link";
import { FaBookOpen, FaGraduationCap, FaUsers, FaClock, FaHeart, FaStar, FaGift } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to Al-Huda Quran Learning Academy
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-4xl mx-auto">
              Learn the Holy Quran online with certified teachers from the comfort of your home. 
              Start your journey toward spiritual enlightenment today.
            </p>
            <div className="bg-amber-100 text-emerald-800 p-4 rounded-lg mb-8 inline-block">
              <p className="text-lg font-semibold">🎁 Free 3-Day Trial Available!</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/student-form"
              className="bg-amber-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-amber-600 transition-colors shadow-lg"
            >
              Apply for Online Quran Classes
            </Link>
            <Link
              href="/packages"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white hover:text-emerald-800 transition-colors"
            >
              View Our Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-12">
            Why Choose Al-Huda Quran Academy?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-emerald-50 rounded-lg shadow-md">
              <FaGraduationCap className="text-5xl text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Certified Teachers</h3>
              <p className="text-gray-700">Learn from qualified instructors with Ijazah and years of teaching experience.</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg shadow-md">
              <FaClock className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Flexible Timing</h3>
              <p className="text-gray-700">Choose your preferred time slots that fit your schedule and time zone.</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg shadow-md">
              <FaUsers className="text-5xl text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">One-on-One Classes</h3>
              <p className="text-gray-700">Personalized attention with individual lessons tailored to your learning pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-12">
            Our Courses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Noorani Qaida", desc: "Perfect for beginners to learn Arabic letters and pronunciation", icon: "📚" },
              { title: "Quran Reading", desc: "Learn to read the Quran with proper pronunciation and fluency", icon: "📖" },
              { title: "Quran Memorization", desc: "Memorize the Holy Quran with effective techniques", icon: "🧠" },
              { title: "Tajweed", desc: "Master the rules of Quranic recitation and pronunciation", icon: "🎵" },
              { title: "Islamic Studies", desc: "Learn about Islamic history, Hadith, and Fiqh", icon: "🕌" },
              { title: "Arabic Language", desc: "Understand the beautiful Arabic language of the Quran", icon: "🔤" },
            ].map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.desc}</p>
                <Link
                  href="/services"
                  className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Benefits of Learning Quran Online
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the spiritual and practical benefits of learning the Holy Quran from home
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "Spiritual growth and connection with Allah",
                "Improved Arabic language skills",
                "Better understanding of Islamic teachings",
                "Increased focus and concentration",
                "Peace of mind and inner tranquility"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FaStar className="text-amber-500 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Start Your Journey Today</h3>
              <p className="text-gray-700 mb-6">
                Join thousands of students who have transformed their lives through Quran learning. 
                Our experienced teachers will guide you every step of the way.
              </p>
              <Link
                href="/student-form"
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-block"
              >
                Begin Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Fatima Ahmad", feedback: "الحمد لله، I learned to read Quran beautifully. The teachers are very patient and knowledgeable.", rating: 5 },
              { name: "Ahmed Hassan", feedback: "My son memorized 5 Surahs in just 3 months. Excellent teaching method!", rating: 5 },
              { name: "Aisha Khan", feedback: "The online classes are so convenient. I can learn while managing my household duties.", rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.feedback}&rdquo;</p>
                <p className="font-semibold text-emerald-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-400">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Quran Learning Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            Join our academy today and experience the joy of learning the Holy Quran with expert guidance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/student-form"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Free Trial Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white hover:text-amber-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 