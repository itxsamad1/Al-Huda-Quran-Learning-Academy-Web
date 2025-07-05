import Link from "next/link";
import { FaCheck, FaStar, FaGift, FaCrown, FaRocket, FaWhatsapp, FaHeadphones, FaBook } from "react-icons/fa";

export default function PackagesPage() {
  const packages = [
    {
      name: "Free Trial",
      price: "$0",
      duration: "3 Days",
      badge: "🎁 Popular",
      badgeColor: "bg-green-500",
      features: [
        "3 Days Free Access",
        "1-on-1 Live Session",
        "Course Material Access",
        "No Credit Card Required",
        "WhatsApp Support",
        "Flexible Timing"
      ],
      buttonText: "Start Free Trial",
      buttonColor: "bg-green-600 hover:bg-green-700",
      description: "Perfect way to experience our teaching quality",
      icon: <FaGift className="text-3xl text-green-600" />
    },
    {
      name: "Basic Plan",
      price: "$39",
      duration: "per month",
      badge: "💎 Best Value",
      badgeColor: "bg-blue-500",
      features: [
        "3 Classes per Week",
        "1-on-1 Personal Tutor",
        "Course Materials Included",
        "Progress Tracking",
        "Email Support",
        "Flexible Scheduling",
        "Monthly Assessment"
      ],
      buttonText: "Choose Basic",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      description: "Ideal for consistent learning progress",
      icon: <FaBook className="text-3xl text-blue-600" />
    },
    {
      name: "Premium Plan",
      price: "$69",
      duration: "per month",
      badge: "⭐ Most Popular",
      badgeColor: "bg-purple-500",
      features: [
        "5 Classes per Week",
        "Priority Scheduling",
        "Dedicated Tutor",
        "WhatsApp Support",
        "Weekly Progress Reports",
        "Additional Practice Materials",
        "Monthly Parent Meeting",
        "Certificate of Completion"
      ],
      buttonText: "Choose Premium",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      description: "Accelerated learning with premium support",
      icon: <FaStar className="text-3xl text-purple-600" />
    },
    {
      name: "Elite Plan",
      price: "$99",
      duration: "per month",
      badge: "👑 Elite",
      badgeColor: "bg-amber-500",
      features: [
        "Daily Classes (7 days/week)",
        "Multiple Course Access",
        "Expert Tutor Team",
        "24/7 WhatsApp Support",
        "Weekly Assessment",
        "Personalized Learning Path",
        "Priority Support",
        "Monthly Video Call Review",
        "Ijazah Certification Track"
      ],
      buttonText: "Choose Elite",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      description: "Ultimate Islamic education experience",
      icon: <FaCrown className="text-3xl text-amber-600" />
    }
  ];

  const features = [
    {
      icon: <FaCheck className="text-2xl text-green-600" />,
      title: "No Long-term Commitment",
      description: "Cancel anytime with no cancellation fees"
    },
    {
      icon: <FaWhatsapp className="text-2xl text-green-600" />,
      title: "24/7 Support",
      description: "Get help whenever you need it via WhatsApp"
    },
    {
      icon: <FaHeadphones className="text-2xl text-green-600" />,
      title: "Personalized Learning",
      description: "Customized curriculum based on your goals"
    },
    {
      icon: <FaRocket className="text-2xl text-green-600" />,
      title: "Fast Progress",
      description: "Structured learning path for quick results"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Learning Package</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Start your Quran learning journey with our flexible and affordable packages designed for all ages
          </p>
          <div className="bg-amber-100 text-emerald-800 p-4 rounded-lg mt-8 inline-block">
            <p className="text-lg font-semibold">🎁 All packages include a FREE 3-day trial!</p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  index === 2 ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {/* Package Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-6 text-center relative">
                  {pkg.badge && (
                    <div className={`absolute top-0 left-0 right-0 ${pkg.badgeColor} text-white text-sm font-bold py-1`}>
                      {pkg.badge}
                    </div>
                  )}
                  <div className="mt-6">
                    {pkg.icon}
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold mb-1">{pkg.price}</div>
                    <p className="text-emerald-100 text-sm">{pkg.duration}</p>
                  </div>
                </div>

                {/* Package Body */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm text-center">{pkg.description}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/student-form"
                    className={`w-full text-white text-center py-3 rounded-lg transition-all duration-300 font-semibold shadow-md block ${pkg.buttonColor}`}
                  >
                    {pkg.buttonText}
                  </Link>
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
            Why Choose Our Packages?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 bg-gradient-to-r from-emerald-100 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">Flexible Payment Options</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Monthly Billing</h3>
              <p className="text-gray-700 text-sm">Pay month-to-month with no long-term commitment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Family Discounts</h3>
              <p className="text-gray-700 text-sm">Special rates for multiple family members</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Secure Payment</h3>
              <p className="text-gray-700 text-sm">All transactions are secure and encrypted</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-emerald-800 mb-4">Need a Custom Package?</h3>
            <p className="text-gray-700 mb-4">
              We understand that every student has unique needs. Contact us to discuss a personalized package
              that fits your specific requirements and budget.
            </p>
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
            >
              Contact Us for Custom Package
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8">
            Join thousands of students who have chosen Al-Huda Quran Academy for their Islamic education
          </p>
          <Link
            href="/student-form"
            className="bg-white text-amber-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Free Trial Today
          </Link>
        </div>
      </section>
    </div>
  );
}