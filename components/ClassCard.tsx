'use client'

interface ClassCardProps {
  title: string;
  ageRange: string;
  level: string;
  time: string;
  days: string;
  features: string[];
  className?: string;
}

const ClassCard = ({ title, ageRange, level, time, days, features, className = '' }: ClassCardProps) => (
  <div className={`bg-white shadow-lg rounded-xl p-6 ${className}`}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-500 mb-1">{ageRange} | {level}</p>
    <p className="text-gray-500 mb-2">{days} | {time}</p>
    <ul className="list-disc list-inside text-gray-600">
      {features.map((f, i) => <li key={i}>{f}</li>)}
    </ul>
  </div>
);

export default ClassCard;
