import Link from "next/link";
import { FaBookOpen, FaGraduationCap, FaClock, FaUsers, FaAward, FaChalkboardTeacher, FaHeadphones, FaBook } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Noorani Qaida",
      duration: "3-6 months",
      price: "Starting from $50/month",
      description: "Perfect foundation for beginners to learn Arabic letters, pronunciation, and basic reading skills",
      features: [
        "Arabic alphabet recognition",
        "Proper pronunciation",
        "Basic reading skills",
        "Individual attention",
        "Progress tracking"
      ],
      icon: "📚",
      suitable: "Ages 5+ | Beginners"
    },
    {
      title: "Quran Reading with Tajweed",
      duration: "8-12 months",
      price: "Starting from $80/month",
      description: "Learn to read the Holy Quran with proper pronunciation and beautiful recitation following Tajweed rules",
      features: [
        "Tajweed rules application",
        "Proper pronunciation",
        "Fluent recitation",
        "Makharij (articulation points)",
        "Beautiful voice modulation"
      ],
      icon: "📖",
      suitable: "Post-Qaida | All ages"
    },
    {
      title: "Quran Memorization (Hifz)",
      duration: "2-4 years",
      price: "Starting from $120/month",
      description: "Complete memorization of the Holy Quran with proper retention techniques and regular revision",
      features: [
        "Structured memorization plan",
        "Daily revision schedule",
        "Retention techniques",
        "Regular assessments",
        "Ijazah certification"
      ],
      icon: "🧠",
      suitable: "All ages | Dedicated students"
    },
    {
      title: "Islamic Studies",
      duration: "Ongoing",
      price: "Starting from $60/month",
      description: "Comprehensive Islamic education including Hadith, Fiqh, Seerah, and Islamic history",
      features: [
        "Hadith studies",
        "Islamic jurisprudence (Fiqh)",
        "Prophet's biography (Seerah)",
        "Islamic history",
        "Akhlaq (Islamic ethics)"
      ],
      icon: "🕌",
      suitable: "All ages | General knowledge"
    },
    {
      title: "Arabic Language",
      duration: "6-12 months",
      price: "Starting from $70/month",
      description: "Learn classical Arabic to understand the Quran and Islamic literature directly",
      features: [
        "Arabic grammar (Nahw)",
        "Vocabulary building",
        "Reading comprehension",
        "Writing skills",
        "Quranic Arabic focus"
      ],
      icon: "🔤",
      suitable: "Teen & Adult | Language enthusiasts"
    },
    {
      title: "Adult Classes",
      duration: "Flexible",
      price: "Starting from $90/month",
      description: "Specialized classes for adults with flexible scheduling and personalized learning approach",
      features: [
        "Flexible timings",
        "Personalized curriculum",
        "Adult-focused teaching",
        "Professional approach",
        "Weekend availability"
      ],
      icon: "👨‍🎓",
      suitable: "Adults | Working professionals"
    }
  ];

  const features = [
    {
      icon: <FaChalkboardTeacher className="text-4xl text-emerald-600 mb-4" />,
      title: "Expert Teachers",
      description: "All our teachers are certified with Ijazah and have years of teaching experience"
    },
    {
      icon: <FaHeadphones className="text-4xl text-blue-600 mb-4" />,
      title: "One-on-One Classes",
      description: "Personalized attention with individual lessons tailored to your pace and schedule"
    },
    {
      icon: <FaClock className="text-4xl text-amber-600 mb-4" />,
      title: "Flexible Timings",
      description: "Choose class times that work best for you across different time zones"
    },
    {
      icon: <FaAward className="text-4xl text-purple-600 mb-4" />,
      title: "Certification",
      description: "Receive certificates upon completion of courses and Ijazah for memorization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Comprehensive Quran and Islamic education services tailored to students of all ages and backgrounds
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-6 text-center">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-emerald-100 text-sm">{service.suitable}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="font-semibold text-emerald-700">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">Price:</span>
                      <span className="font-bold text-blue-700">{service.price}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">What You&apos;ll Learn:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-emerald-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/student-form"
                      className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-center py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-semibold shadow-md block"
                    >
                      Enroll Now
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full bg-white border-2 border-emerald-600 text-emerald-600 text-center py-3 rounded-lg hover:bg-emerald-50 transition-all duration-300 font-semibold block"
                    >
                      Get More Info
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8">
            Start with a free 3-day trial and experience our quality Islamic education
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/student-form"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              href="/packages"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white hover:text-amber-600 transition-colors"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}