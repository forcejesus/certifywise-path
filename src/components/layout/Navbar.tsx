
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Search, User } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

const NavLinks = [
  { title: 'Home', path: '/' },
  { title: 'Catalog', path: '/catalog' },
  { title: 'For Business', path: '/business' },
  { title: 'About', path: '/about' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-3 bg-background/80 backdrop-blur-lg shadow-subtle' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 font-display text-xl font-medium"
          >
            <span className="bg-primary text-white h-8 w-8 flex items-center justify-center rounded">CW</span>
            CertifyWise
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 text-sm rounded-md transition-colors',
                  location.pathname === link.path
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                )}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <AnimatedButton variant="ghost" size="sm" className="gap-2" icon={<User className="h-4 w-4" />}>
              Log in
            </AnimatedButton>
            
            <AnimatedButton variant="primary" size="sm">
              Get Started
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-x-0 bg-background/95 backdrop-blur-sm border-b border-border/50 transition-all duration-300 ease-in-out overflow-hidden md:hidden',
          isMobileMenuOpen ? 'top-[57px] opacity-100 h-auto' : 'top-[57px] opacity-0 h-0'
        )}
      >
        <div className="container px-4 py-4 flex flex-col space-y-3">
          {NavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-3 rounded-md transition-colors',
                location.pathname === link.path
                  ? 'bg-accent text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              )}
            >
              {link.title}
            </Link>
          ))}
          
          <div className="pt-2 mt-2 border-t border-border/30 flex flex-col space-y-3">
            <AnimatedButton variant="ghost" size="sm" className="w-full justify-center" icon={<User className="h-4 w-4" />}>
              Log in
            </AnimatedButton>
            
            <AnimatedButton variant="primary" size="sm" className="w-full justify-center">
              Get Started
            </AnimatedButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
