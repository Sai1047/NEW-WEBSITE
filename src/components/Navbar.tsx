import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const Logo = () => (
    <div className="flex items-center gap-2">
      <img src="https://i.ibb.co.com/9J1HzXK/unnamed-Photoroom.png" alt="SJ IT LTD Logo" className="h-12 w-auto object-contain" />
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 font-sans top-0 border-b ${scrolled ? 'bg-[#0f172a] shadow-xl border-white/5' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo />
          </div>

          <div className="flex-1 flex justify-center">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <div className="relative group/nav cursor-pointer flex items-center space-x-1">
                <a href="#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }} className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2">Product</a>
                <ChevronDown className="w-4 h-4 text-slate-300 group-hover/nav:text-cyan-400 transition-colors" />
                
                {/* Dropdown Menu */}
                <div className="absolute top-10 left-0 w-48 bg-[#0f172a] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 pt-2 pb-2">
                  <a href="#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Software</a>
                  <a href="#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Hardware</a>
                  <a href="#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Cloud Tools</a>
                </div>
              </div>

              <div className="relative group/nav cursor-pointer flex items-center space-x-1">
                <a href="#solution" onClick={(e) => { e.preventDefault(); scrollToSection('solution'); }} className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2">Solution</a>
                <ChevronDown className="w-4 h-4 text-slate-300 group-hover/nav:text-cyan-400 transition-colors" />
                
                {/* Dropdown Menu */}
                <div className="absolute top-10 left-0 w-48 bg-[#0f172a] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 pt-2 pb-2">
                  <a href="#solution" onClick={(e) => { e.preventDefault(); scrollToSection('solution'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Enterprise</a>
                  <a href="#solution" onClick={(e) => { e.preventDefault(); scrollToSection('solution'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Small Business</a>
                </div>
              </div>

              <div className="relative group/nav cursor-pointer flex items-center space-x-1">
                <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }} className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2">Service</a>
                <ChevronDown className="w-4 h-4 text-slate-300 group-hover/nav:text-cyan-400 transition-colors" />
                
                {/* Dropdown Menu */}
                <div className="absolute top-10 left-0 w-48 bg-[#0f172a] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 pt-2 pb-2">
                  <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">IT Consulting</a>
                  <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Web Development</a>
                  <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">SEO</a>
                </div>
              </div>

              <div className="relative group/nav cursor-pointer flex items-center space-x-1">
                <a href="#outsourcing" onClick={(e) => { e.preventDefault(); scrollToSection('outsourcing'); }} className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2">Outsourcing</a>
                <ChevronDown className="w-4 h-4 text-slate-300 group-hover/nav:text-cyan-400 transition-colors" />
                
                {/* Dropdown Menu */}
                <div className="absolute top-10 left-0 w-48 bg-[#0f172a] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 pt-2 pb-2">
                  <a href="#outsourcing" onClick={(e) => { e.preventDefault(); scrollToSection('outsourcing'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Virtual Assistant</a>
                  <a href="#outsourcing" onClick={(e) => { e.preventDefault(); scrollToSection('outsourcing'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">BPO Services</a>
                </div>
              </div>

              <div className="relative group/nav cursor-pointer flex items-center space-x-1">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2">Learn More</a>
                <ChevronDown className="w-4 h-4 text-slate-300 group-hover/nav:text-cyan-400 transition-colors" />
                
                <div className="absolute top-10 left-0 w-48 bg-[#0f172a] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 pt-2 pb-2">
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">About Us</a>
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Pricing</a>
                </div>
              </div>

              <a href="#" className="font-medium text-base text-slate-200 hover:text-cyan-400 transition-colors py-2">Career</a>
            </div>
          </div>

          <div className="hidden lg:flex">
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 text-base rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0f172a] absolute top-full left-0 w-full border-b border-white/10 shadow-xl pb-4">
          <div className="px-4 py-4 space-y-2 text-white">
            <a href="#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5">Product</a>
            <a href="#solution" onClick={(e) => { e.preventDefault(); scrollToSection('solution'); }} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5">Solution</a>
            <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5">Service</a>
            <a href="#outsourcing" onClick={(e) => { e.preventDefault(); scrollToSection('outsourcing'); }} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5">Outsourcing</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5">Learn More</a>
            <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5">Career</a>
            <button onClick={() => scrollToSection('contact')} className="w-full mt-4 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
