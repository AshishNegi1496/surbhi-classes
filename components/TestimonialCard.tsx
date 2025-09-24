'use client'

interface TestimonialCardProps {
  quote: string;
  name: string;
  details: string;
  subject: string;
  className?: string;
}

const TestimonialCard = ({ quote, name, details, subject, className = '' }: TestimonialCardProps) => (
  <div className={`p-6 rounded-xl ${className}`}>
    <p className="text-gray-700 italic mb-4">&quot;{quote}&quot;</p>
    <p className="text-black font-bold">{name}</p>
    <p className="text-gray-500 text-sm">{details} - {subject}</p>
  </div>
);

export default TestimonialCard;
