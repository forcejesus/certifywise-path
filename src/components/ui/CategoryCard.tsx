
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  courseCount: number;
  className?: string;
}

const CategoryCard = ({
  id,
  title,
  description,
  icon,
  courseCount,
  className,
}: CategoryCardProps) => {
  return (
    <Link
      to={`/catalog?category=${id}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg p-6 transition-all duration-300',
        'bg-card text-card-foreground',
        'hover:shadow-elevated active:shadow-subtle',
        'border border-border/50 h-full',
        'transform-gpu hover:-translate-y-1 active:translate-y-0',
        className
      )}
    >
      <div className="mb-4 p-3 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      
      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="mt-auto flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{courseCount} courses</span>
        <div className="transform group-hover:translate-x-1 transition-transform duration-300">
          <ArrowRight className="w-4 h-4 text-primary" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
