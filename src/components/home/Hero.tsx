
import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-80"></div>
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div 
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground mb-6 animate-fade-in"
            style={{ '--index': '0' } as React.CSSProperties}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-foreground"></span>
            </span>
            Launching our new Microsoft Azure certification courses
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-balance mb-6 animate-fade-in"
            style={{ '--index': '1' } as React.CSSProperties}
          >
            Accelerate Your Career With Industry-Recognized 
            <span className="relative inline-block px-2 text-primary">
              Certifications
              <svg className="absolute inset-x-0 -bottom-1 w-full h-2 text-primary/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="currentColor" />
              </svg>
            </span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in"
            style={{ '--index': '2' } as React.CSSProperties}
          >
            Gain in-demand skills with our compact, focused learning paths. Courses designed in partnership with tech leaders for maximum industry recognition.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ '--index': '3' } as React.CSSProperties}
          >
            <AnimatedButton 
              size="lg" 
              className="min-w-[180px]"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Explore Courses
            </AnimatedButton>
            <AnimatedButton 
              variant="outline" 
              size="lg"
              className="min-w-[180px]"
            >
              For Business
            </AnimatedButton>
          </div>
          
          <div 
            className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in"
            style={{ '--index': '4' } as React.CSSProperties}
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-sm text-muted-foreground">Certification Courses</div>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Industry Partners</div>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1">50k+</div>
              <div className="text-sm text-muted-foreground">Certified Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
