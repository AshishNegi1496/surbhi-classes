interface TestimonialCardProps {
  quote: string;
  name: string;
  details: string;
  subject: string;
}

export const TestimonialCard = ({ 
  quote, 
  name, 
  details, 
  subject 
}: TestimonialCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <p className="text-gray-600 italic mb-4">{quote}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{details}</p>
        <p className="text-sm text-blue-600">{subject}</p>
      </div>
    </div>
  );
};