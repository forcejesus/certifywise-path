
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
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
  rating,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col p-6 rounded-lg transition-all duration-300',
        'glass-card hover:shadow-elevated',
        'border border-border/40',
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
                index < rating ? 'text-amber-400 fill-amber-400' : 'text-muted'
              )} 
            />
          ))}
        </div>
      </div>
      
      <blockquote className="text-base mb-6 italic">"{testimonial}"</blockquote>
      
      <div className="mt-auto flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img 
            src={avatar} 
            alt={name}
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <div className="font-medium text-sm">{name}</div>
          <div className="text-xs text-muted-foreground">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
