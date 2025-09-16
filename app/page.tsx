import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { StatsCard } from '../components/StatsCard';
import { ClassCard } from '../components/ClassCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Excellence in Education
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering students with personalized learning experience
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary">Start Free Trial</Button>
            <Button variant="secondary">View Classes</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <StatsCard number="15+" label="Years Experience" />
          <StatsCard number="500+" label="Students Taught" />
          <StatsCard number="98%" label="Success Rate" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                title={feature.title}
                icon={feature.icon}
              >
                {feature.description}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <ClassCard key={index} {...classItem} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

const features = [
  {
    icon: "👩‍🏫",
    title: "Expert Teachers",
    description: "Learn from experienced educators passionate about teaching"
  },
  {
    icon: "👥",
    title: "Small Batches",
    description: "Personal attention with maximum 15 students per batch"
  },
  {
    icon: "📚",
    title: "Structured Learning",
    description: "Well-planned curriculum aligned with board standards"
  }
];

const classes = [
  {
    title: "Mathematics Excellence",
    ageRange: "Grade 8-10",
    level: "Advanced",
    time: "4:00 PM - 5:30 PM",
    days: "Mon, Wed, Fri",
    features: ["Interactive Problem Solving", "Regular Tests", "Doubt Clearing Sessions"]
  },
  {
    title: "Science Mastery",
    ageRange: "Grade 9-10",
    level: "Intermediate",
    time: "5:30 PM - 7:00 PM",
    days: "Tue, Thu, Sat",
    features: ["Practical Demonstrations", "Lab Work", "Conceptual Learning"]
  },
  {
    title: "English Foundation",
    ageRange: "Grade 6-8",
    level: "Basic",
    time: "3:00 PM - 4:30 PM",
    days: "Mon, Wed, Fri",
    features: ["Grammar Focus", "Reading Comprehension", "Writing Skills"]
  }
];

const testimonials = [
  {
    quote: "My daughter's grades improved significantly after joining Surabhi Classes.",
    name: "Priya Singh",
    details: "Parent of Grade 9 Student",
    subject: "Mathematics"
  },
  {
    quote: "The teachers are very patient and explain concepts thoroughly.",
    name: "Rahul Kumar",
    details: "Parent of Grade 8 Student",
    subject: "Science"
  },
  {
    quote: "Best coaching institute in the area. Highly recommended!",
    name: "Sneha Patel",
    details: "Parent of Grade 10 Student",
    subject: "English"
  }
];