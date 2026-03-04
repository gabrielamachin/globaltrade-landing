import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Who We Are', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Estimator', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-300 ${
      isScrolled ? 'bg-[#003366] py-3 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-tighter">
          <Globe className="text-[#FF8C00]" size={28} />
          <span className="flex">Global<span className="text-[#FF8C00]">Trade</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name} className="m-0 p-0">
                <a 
                  href={link.href}
                  className="text-white no-underline text-sm font-semibold hover:text-[#FF8C00] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white bg-transparent border-none cursor-pointer flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#003366] border-t border-white/10 w-full absolute top-full left-0 shadow-xl">
          <ul className="flex flex-col items-center py-8 gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white no-underline text-lg font-bold hover:text-[#FF8C00]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;