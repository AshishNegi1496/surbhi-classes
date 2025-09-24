'use client'

interface CardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, icon, children, className = '' }: CardProps) => (
  <div className={`p-6 rounded-xl shadow-lg ${className}`}>
    <h3 className="text-black text-2xl mb-4">{icon} {title}</h3>
    <p className="text-gray-700">{children}</p>
  </div>
);

export default Card;
