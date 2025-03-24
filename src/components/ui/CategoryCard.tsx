
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  courseCount: number;
  isNew?: boolean;
  className?: string;
  certificationPartners?: string[];
}

const CategoryCard = ({
  id,
  title,
  description,
  icon,
  courseCount,
  isNew = false,
  certificationPartners = [],
  className,
}: CategoryCardProps) => {
  return (
    <Link
      to={`/catalog?category=${id}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl p-6 transition-all duration-300',
        'bg-white',
        'shadow-sm hover:shadow-md active:shadow-sm',
        'border border-slate-100 h-full',
        'transform-gpu hover:-translate-y-1 active:translate-y-0',
        className
      )}
    >
      {/* Badge Nouveau */}
      {isNew && (
        <div className="absolute -top-1 -right-1 z-10">
          <div className="relative flex items-center px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-br-xl rounded-tl-xl shadow-sm">
            <Sparkles className="h-3 w-3 mr-1.5" />
            <span className="tracking-wide">Nouveau</span>
            {/* Petit triangle décoratif */}
            <div className="absolute -bottom-1.5 -left-0 w-0 h-0 border-t-8 border-l-8 border-yellow-600/50 border-transparent"></div>
          </div>
        </div>
      )}
      
      {/* Icône avec effet de brillance */}
      <div className="relative mb-5 p-3.5 w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden bg-slate-50">
        {/* Icône avec ombre portée */}
        <div className="relative z-10 text-slate-700">
          {icon}
        </div>
      </div>
      
      {/* Titre avec animation au survol */}
      <h3 className="text-xl font-semibold mb-2.5 group-hover:text-primary transition-colors duration-300 tracking-tight text-slate-900">
        {title}
      </h3>
      
      {/* Description avec meilleure lisibilité */}
      <p className="text-sm text-slate-600 mb-5 line-clamp-3">
        {description}
      </p>
      
      {/* Liste des partenaires de certification */}
      {certificationPartners && certificationPartners.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {certificationPartners.map((partner, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
            >
              <Award className="w-3 h-3 mr-1" />
              {partner}
            </span>
          ))}
        </div>
      )}
      
      {/* Footer avec nombre de cours et flèche */}
      <div className="mt-auto flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700 bg-slate-50 px-2.5 py-1 rounded-full">
          {courseCount} {courseCount > 1 ? 'certifications' : 'certification'}
        </span>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-700 transform group-hover:translate-x-1 transition-all duration-300 group-hover:text-primary">
          <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
