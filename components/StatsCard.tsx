'use client'

interface StatsCardProps {
  number: string;
  label: string;
}

const StatsCard = ({ number, label }: StatsCardProps) => (
  <div className="bg-white shadow-lg rounded-xl p-6 text-center">
    <h3 className="text-3xl font-bold text-blue-600">{number}</h3>
    <p className="text-gray-600 mt-2">{label}</p>
  </div>
);

export default StatsCard;
