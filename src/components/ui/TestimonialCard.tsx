
import React from 'react';
import { cn } from '@/lib/utils';
import { Star, Award } from 'lucide-react';

interface TestimonialCardProps {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
  certifications?: string[];
  rating: number;
  className?: string;
}

const TestimonialCard = ({
  id,
  name,
  role,
  company,
  avatar,
  testimonial,
  certifications = [],
  rating,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col p-6 rounded-lg transition-all duration-300',
        'bg-white shadow-sm border border-slate-100',
        className
      )}
    >
      <div className="mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star 
              key={index} 
              className={cn(
                'w-4 h-4',
                index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'
              )} 
            />
          ))}
        </div>
      </div>
      
      <blockquote className="text-base mb-6 italic text-slate-700">"{testimonial}"</blockquote>
      
      {certifications && certifications.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
            >
              <Award className="w-3 h-3 mr-1 text-blue-600" />
              {cert}
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-auto flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-slate-200">
          <img 
            src={avatar} 
            alt={name}
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <div className="font-medium text-sm text-slate-900">{name}</div>
          <div className="text-xs text-slate-500">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
