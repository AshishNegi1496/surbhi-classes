interface ClassCardProps {
  title: string;
  ageRange: string;
  level: string;
  time: string;
  days: string;
  features: string[];
}

export const ClassCard = ({ 
  title, 
  ageRange, 
  level, 
  time, 
  days, 
  features 
}: ClassCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{ageRange} • {level}</p>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Time</p>
        <p className="font-medium">{time}</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Days</p>
        <p className="font-medium">{days}</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Features</p>
        <ul className="text-sm list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};