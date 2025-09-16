import Link from 'next/link';
import { Button } from './Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/classes', label: 'Classes' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' }
];

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-blue-800">Surabhi Classes</h1>
        <span className="ml-2 text-sm text-gray-600">Excellence in Education</span>
      </div>
      <div className="hidden md:flex space-x-6">
        {navLinks.map(link => (
          <Link 
            key={link.href} 
            href={link.href} 
            className="text-gray-700 hover:text-blue-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Button variant="primary">Get Started</Button>
    </nav>
  );
};