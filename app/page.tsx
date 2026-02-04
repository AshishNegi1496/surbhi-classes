'use client';

import { useState } from 'react';
import Navbar  from '../components/Navbar';
import { Footer } from '../components/Footer';
import  Button  from '../components/Button';
import  Card  from '../components/Card';
import ClassCard  from '../components/ClassCard';
import TestimonialCard  from '../components/TestimonialCard';
import { ContactForm } from '../components/ContactForm';
import { motion, AnimatePresence  } from 'framer-motion';
import { FaUserTie, FaEnvelope, FaPhoneAlt, FaBriefcase } from 'react-icons/fa';
export default function Home() {

   const [showContact, setShowContact] = useState(false);
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-r from-blue-100/50 to-indigo-100/50 py-24 px-8">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Excellence in Education
          </h1>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            Empowering students with personalized learning experience
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="primary" className="hover:scale-105 transition-transform">Start Free Trial</Button>
            <Button variant="secondary" className="hover:scale-105 transition-transform">View Classes</Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card title={feature.title} icon={feature.icon} className="hover:shadow-xl transition-shadow">
                  {feature.description}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-24 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Our Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {classes.map((cls, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <ClassCard {...cls} className="hover:shadow-xl transition-all transform hover:-translate-y-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <TestimonialCard {...t} className="bg-white backdrop-blur-sm bg-opacity-80 hover:shadow-xl transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Tutor Section */}
      <section id="tutor" className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Meet Your Tutor
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <FaUserTie className="text-5xl text-blue-600" />
              <h3 className="text-3xl font-semibold text-gray-800">Surabhi Jain</h3>
              <p className="text-gray-500">Expert Educator & Mentor</p>

              <div className="mt-4 space-y-2 text-gray-700">
                <p className="flex items-center justify-center gap-2">
                  <FaBriefcase className="text-blue-500" /> 13 Years Experience
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FaEnvelope className="text-blue-500" /> jainsurabhi811@gmail.com
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FaPhoneAlt className="text-blue-500" /> +91 99819 50909
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <Button
            variant="primary"
            className="mx-auto hover:scale-105 transition-transform"
            onClick={() => setShowContact(!showContact)}
          >
            {showContact ? 'Hide Contact Form' : 'Show Contact Form'}
          </Button>

          <AnimatePresence>
            {showContact && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-8"
              >
                <ContactForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Sample data
const features = [
  { icon: "👩‍🏫", title: "Expert Teachers", description: "Learn from experienced educators passionate about teaching" },
  { icon: "👥", title: "Small Batches", description: "Personal attention with maximum 15 students per batch" },
  { icon: "📚", title: "Structured Learning", description: "Well-planned curriculum aligned with board standards" }
];

const classes = [
  { title: "Mathematics Excellence", ageRange: "Grade 8-10", level: "Advanced", time: "4:00 PM - 5:30 PM", days: "Mon, Wed, Fri", features: ["Interactive Problem Solving", "Regular Tests", "Doubt Clearing Sessions"] },
  { title: "Science Mastery", ageRange: "Grade 9-10", level: "Intermediate", time: "5:30 PM - 7:00 PM", days: "Tue, Thu, Sat", features: ["Practical Demonstrations", "Lab Work", "Conceptual Learning"] },
  { title: "English Foundation", ageRange: "Grade 6-8", level: "Basic", time: "3:00 PM - 4:30 PM", days: "Mon, Wed, Fri", features: ["Grammar Focus", "Reading Comprehension", "Writing Skills"] }
];

const testimonials = [
  { quote: "My daughter's grades improved significantly after joining Surabhi Classes.", name: "Priya Singh", details: "Parent of Grade 9 Student", subject: "Mathematics" },
  { quote: "The teachers are very patient and explain concepts thoroughly.", name: "Rahul Kumar", details: "Parent of Grade 8 Student", subject: "Science" },
  { quote: "Best coaching institute in the area. Highly recommended!", name: "Sneha Patel", details: "Parent of Grade 10 Student", subject: "English" }
];
