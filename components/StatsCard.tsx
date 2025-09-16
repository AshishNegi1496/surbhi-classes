interface StatsCardProps {
  number: string;
  label: string;
}

export const StatsCard = ({ number, label }: StatsCardProps) => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-blue-600">{number}</h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
};