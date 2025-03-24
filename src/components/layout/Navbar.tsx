
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Menu, X, Search, User, BookOpen, Sparkles, Shield, ChevronDown,
  BookMarked, Building2, Info, Home
} from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavLinks = [
  { title: 'Accueil', path: '/', icon: <Home className="h-4 w-4" /> },
  { title: 'Catalogue', path: '/catalog', icon: <BookMarked className="h-4 w-4" /> },
  { title: 'Entreprises', path: '/business', icon: <Building2 className="h-4 w-4" /> },
  { title: 'À propos', path: '/about', icon: <Info className="h-4 w-4" /> },
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

  // Fermer le menu mobile lors du changement de routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-2 bg-background/95 backdrop-blur-xl shadow-md border-b border-border/30' 
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 font-display text-xl font-bold transition-all hover:scale-105 duration-300"
          >
            <span className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-indigo-600 shadow-lg overflow-hidden">
              <Shield className="h-5 w-5 text-white absolute" />
              <Sparkles className="h-4 w-4 text-yellow-200 absolute animate-pulse opacity-70" style={{ right: '25%', top: '25%' }} />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
            </span>
            <div className="flex flex-col items-start leading-none">
              <span className="relative font-bold tracking-tight bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                Format Plus
              </span>
              <span className="text-xs text-muted-foreground font-medium">Formation professionnelle</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {NavLinks.map((link) => (
                <NavigationMenuItem key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      'group flex items-center gap-1.5 px-4 py-2 text-sm rounded-md transition-all duration-200 relative',
                      location.pathname === link.path
                        ? 'text-primary font-medium bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      {link.icon}
                      {link.title}
                    </span>
                    {location.pathname === link.path && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/60 rounded-full"></span>
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/60 rounded-full scale-x-0 transition-transform group-hover:scale-x-100 origin-left"></span>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              aria-label="Rechercher"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Separator orientation="vertical" className="h-8" />
            
            <AnimatedButton 
              variant="ghost" 
              size="sm" 
              className="gap-2 font-medium" 
              icon={<User className="h-4 w-4" />}
            >
              Connexion
            </AnimatedButton>
            
            <AnimatedButton 
              variant="primary" 
              size="sm" 
              className="bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 shadow-md"
            >
              Démarrer
            </AnimatedButton>
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div 
        className={cn(
          'fixed inset-x-0 bg-background/95 backdrop-blur-xl border-b border-border/50 transition-all duration-300 ease-in-out overflow-hidden md:hidden',
          isMobileMenuOpen ? 'top-[57px] opacity-100 h-auto' : 'top-[57px] opacity-0 h-0'
        )}
      >
        <div className="container px-4 py-4 flex flex-col space-y-2">
          {NavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-3 rounded-md transition-colors flex items-center gap-3',
                location.pathname === link.path
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              )}
            >
              <span className="flex items-center gap-2.5">
                {link.icon}
                {link.title}
              </span>
              {location.pathname === link.path && (
                <span className="ml-auto">
                  <ChevronDown className="h-4 w-4 text-primary" />
                </span>
              )}
            </Link>
          ))}
          
          <div className="pt-3 mt-3 border-t border-border/30 flex flex-col space-y-3">
            <button className="flex items-center gap-2 text-sm text-muted-foreground px-4 py-3 rounded-md hover:bg-accent/50 hover:text-foreground transition-colors">
              <Search className="h-4 w-4" />
              Rechercher
            </button>
            
            <AnimatedButton 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start px-4 py-3" 
              icon={<User className="h-4 w-4" />}
            >
              Connexion
            </AnimatedButton>
            
            <AnimatedButton 
              variant="primary" 
              size="sm" 
              className="w-full justify-center bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 shadow-md"
            >
              Démarrer
            </AnimatedButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
