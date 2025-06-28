import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    { name: 'Web Development', href: '#' },
    { name: 'App Development', href: '#' },
    { name: 'API Development', href: '#' },
    { name: 'Cloud Computing', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden transition-colors duration-300 grid-background">
      {/* Enhanced background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-400/15 to-orange-500/15 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content - Reduced padding */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Logo and Tagline - Reduced margin */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">APIMAN</h2>
            <p className="text-lg text-gray-300 dark:text-gray-400 font-medium">
              Crafting the architects of tomorrow's technology
            </p>
          </div>

          {/* Footer Grid - Reduced gap and padding */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-300 dark:text-gray-400 text-sm">info@apiman.edu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-300 dark:text-gray-400 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-300 dark:text-gray-400 text-sm">123 Tech Street, Silicon Valley</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Programs</h3>
              <ul className="space-y-2">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a 
                      href={program.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter - Reduced content */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Stay Updated</h3>
              <p className="text-gray-300 dark:text-gray-400 mb-3 text-sm">Subscribe for updates and insights.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white text-sm"
                />
                <button className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Social Links - Reduced margin */}
          <div className="text-center mb-6">
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-gray-300 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Reduced padding */}
        <div className="border-t border-gray-800 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                © 2024 APIMAN. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-orange-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-orange-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-orange-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;