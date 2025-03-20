
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-50 to-blue-50 pt-16 pb-8 border-t border-border/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Infos Entreprise */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 font-display text-xl font-medium"
            >
              <span className="bg-primary text-white h-8 w-8 flex items-center justify-center rounded">FC</span>
              Format Plus
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Formations compactes avec certifications reconnues par l'industrie pour accélérer votre carrière.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Cours</h3>
            <ul className="space-y-2 text-sm">
              {['Cloud Computing', 'Développement Web', 'Data Science', 'Cybersécurité', 'DevOps', 'Toutes les Catégories'].map((item) => (
                <li key={item}>
                  <Link to={`/catalog?category=${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              {['Blog', 'Témoignages', 'Partenaires', 'Centre d\'Aide', 'Conseils Carrière', 'Pour les Entreprises'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Restez Informé</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Abonnez-vous à notre newsletter pour les dernières mises à jour de cours et les actualités du secteur.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-background flex-grow px-3 py-2 text-sm rounded-l-md border border-border/80 focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-3 py-2 rounded-r-md hover:brightness-105 transition-all"
                aria-label="S'abonner"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Format Plus. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Confidentialité</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Conditions</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
