
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Award, Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  students: number;
  certificationPartner?: string;
  rating?: number;
  reviews?: number;
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
  rating = 0,
  reviews = 0,
  className,
  featured = false,
  isNew = false,
}: CourseCardProps) => {
  return (
    <Link 
      to={`/course/${id}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg transition-all duration-300',
        'bg-white text-slate-900',
        'hover:shadow-md active:shadow-sm',
        'border border-slate-200 h-full',
        'transform-gpu hover:-translate-y-1 active:translate-y-0',
        featured ? 'md:col-span-2 lg:col-span-2' : '',
        className
      )}
    >
      <div className="relative h-48 overflow-hidden border-b border-slate-100">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transition-all duration-400 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-900/90 text-white">
            {category}
          </span>
          
          {isNew && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/90 text-white">
              Nouveau
            </span>
          )}
        </div>
        
        {certificationPartner && (
          <div className="absolute bottom-3 right-3">
            <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm">
              <Award className="w-3.5 h-3.5 text-yellow-500" />
              <span className="text-slate-800">{certificationPartner} Certified</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-medium leading-tight mb-2 text-slate-900 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-2 mb-4">{description}</p>
        
        {rating > 0 && (
          <div className="flex items-center mb-3">
            <div className="flex items-center mr-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star 
                  key={index} 
                  className={cn(
                    'w-4 h-4',
                    index < Math.floor(rating) 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : index < rating 
                        ? 'text-yellow-400 fill-yellow-400 opacity-50' 
                        : 'text-slate-300'
                  )} 
                />
              ))}
            </div>
            <span className="text-sm font-medium text-slate-700">{rating.toFixed(1)}</span>
            {reviews > 0 && (
              <span className="text-xs text-slate-500 ml-1">({reviews.toLocaleString()})</span>
            )}
          </div>
        )}
        
        <div className="mt-auto flex items-center justify-between text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()} étudiants</span>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white/20 to-transparent" />
    </Link>
  );
};

export default CourseCard;
