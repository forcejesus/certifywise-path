
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  courseCount: number;
  isNew?: boolean;
  className?: string;
}

const CategoryCard = ({
  id,
  title,
  description,
  icon,
  courseCount,
  isNew = false,
  className,
}: CategoryCardProps) => {
  return (
    <Link
      to={`/catalog?category=${id}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl p-6 transition-all duration-300',
        'bg-gradient-to-br from-white via-white/90 to-white/80 backdrop-blur-md',
        'shadow-sm hover:shadow-lg active:shadow-md',
        'border border-white/50 h-full',
        'transform-gpu hover:-translate-y-2 active:translate-y-0',
        className
      )}
    >
      {/* Effet de halo d'arrière-plan */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-indigo-500/5 to-purple-500/5 opacity-70"></div>
      
      {/* Badge Nouveau */}
      {isNew && (
        <div className="absolute -top-1 -right-1 z-10">
          <div className="relative flex items-center px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-medium rounded-br-xl rounded-tl-xl shadow-md">
            <Sparkles className="h-3 w-3 mr-1.5 animate-pulse" />
            <span className="tracking-wide">Nouveau</span>
            {/* Petit triangle décoratif */}
            <div className="absolute -bottom-1.5 -left-0 w-0 h-0 border-t-8 border-l-8 border-amber-700/50 border-transparent"></div>
          </div>
        </div>
      )}
      
      {/* Icône avec effet de brillance */}
      <div className="relative mb-5 p-3.5 w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden">
        {/* Fond avec gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-indigo-500/20 to-purple-500/20 animate-gradient-slow"></div>
        {/* Effet de brillance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full"></div>
        {/* Icône avec ombre portée */}
        <div className="relative z-10 text-primary text-xl drop-shadow-sm">
          {icon}
        </div>
      </div>
      
      {/* Titre avec animation au survol */}
      <h3 className="text-xl font-semibold mb-2.5 group-hover:text-primary transition-colors duration-300 tracking-tight">
        {title}
      </h3>
      
      {/* Description avec meilleure lisibilité */}
      <p className="text-sm text-muted-foreground/90 mb-5 line-clamp-3">
        {description}
      </p>
      
      {/* Footer avec nombre de cours et flèche */}
      <div className="mt-auto flex justify-between items-center">
        <span className="text-sm font-medium text-muted-foreground bg-primary/5 px-2.5 py-1 rounded-full">
          {courseCount} {courseCount > 1 ? 'cours' : 'cours'}
        </span>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-indigo-500/20 text-primary transform group-hover:translate-x-1 transition-all duration-300 group-hover:shadow-md">
          <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      
      {/* Effets de brillance lors du survol */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full"></div>
      
      {/* Dégradé de bordure au survol */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-transparent bg-origin-border rounded-xl"></div>
      
      {/* Ombre extérieure au survol */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl bg-gradient-to-br from-primary/50 via-indigo-500/50 to-purple-500/50 blur-xl transform scale-90 group-hover:scale-110"></div>
    </Link>
  );
};

export default CategoryCard;
