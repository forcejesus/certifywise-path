
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
        'group relative flex flex-col overflow-hidden rounded-lg p-6 transition-all duration-300',
        'bg-gradient-to-br from-white to-white/70 backdrop-blur-sm',
        'shadow-sm hover:shadow-elevated active:shadow-subtle',
        'border border-white/70 h-full',
        'transform-gpu hover:-translate-y-1 active:translate-y-0',
        className
      )}
    >
      {isNew && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
          <Sparkles className="h-3 w-3 mr-1" />
          Nouveau
        </div>
      )}
      
      <div className="mb-4 p-3 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-indigo-500/20 text-primary">
        {icon}
      </div>
      
      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="mt-auto flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          {courseCount} {courseCount > 1 ? 'cours' : 'cours'}
        </span>
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary transform group-hover:translate-x-1 transition-transform duration-300">
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
      
      {/* Effet de brillance lors du survol */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full"></div>
    </Link>
  );
};

export default CategoryCard;
