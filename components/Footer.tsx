import Link from 'next/link';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
  ],
  classes: [
    { label: 'Mathematics', href: '/classes/math' },
    { label: 'Science', href: '/classes/science' },
    { label: 'English', href: '/classes/english' },
      { label: 'Hindi', href: '/classes/Hindi' },
    { label: 'Sanskrit', href: '/classes/Sanskrit' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Surabhi Classes</h2>
            <p className="text-gray-400 mb-4">
              Empowering students with quality education since 2008.
            </p>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4 capitalize">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Surabhi Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};