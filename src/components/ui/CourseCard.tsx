
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Award, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  students: number;
  certificationPartner?: string;
  className?: string;
  featured?: boolean;
  isNew?: boolean;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  category,
  duration,
  students,
  certificationPartner,
  className,
  featured = false,
  isNew = false,
}: CourseCardProps) => {
  return (
    <Link 
      to={`/course/${id}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg transition-all duration-300',
        'bg-card text-card-foreground',
        'hover:shadow-elevated active:shadow-subtle',
        'border border-border/50 h-full',
        'transform-gpu hover:-translate-y-1 active:translate-y-0',
        featured ? 'md:col-span-2 lg:col-span-2' : '',
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transition-all duration-400 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
            {category}
          </span>
          
          {isNew && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/90 text-white">
              New
            </span>
          )}
        </div>
        
        {certificationPartner && (
          <div className="absolute bottom-3 right-3">
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-xs px-2 py-1 rounded text-xs font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>{certificationPartner} Certified</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-medium leading-tight mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>
        
        <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()} students</span>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/5 to-transparent" />
    </Link>
  );
};

export default CourseCard;
