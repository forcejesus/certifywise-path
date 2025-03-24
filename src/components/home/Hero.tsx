
import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Award, CheckCircle2 } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 overflow-hidden relative">
      {/* Éléments d'arrière-plan */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent opacity-80"></div>
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Éléments décoratifs flottants */}
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10 backdrop-blur-3xl border border-white/20 animate-[floating_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-24 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/10 to-indigo-400/10 backdrop-blur-3xl border border-white/20 animate-[floating_8s_ease-in-out_infinite_1s]"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div 
            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-xl bg-accent/70 text-accent-foreground mb-6 animate-fade-in shimmer"
            style={{ '--index': '0' } as React.CSSProperties}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-foreground"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Lancement de nos nouveaux cours de certification Microsoft Azure
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-balance mb-6 animate-fade-in"
            style={{ '--index': '1' } as React.CSSProperties}
          >
            Accélérez votre carrière avec des 
            <span className="relative inline-block px-2 neo-gradient highlight-glow font-extrabold">
              Certifications
              <svg className="absolute inset-x-0 -bottom-1 w-full h-2 text-primary/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="currentColor" />
              </svg>
            </span>
            reconnues
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in"
            style={{ '--index': '2' } as React.CSSProperties}
          >
            Acquérez des compétences recherchées grâce à nos parcours d'apprentissage compacts et ciblés. Formations conçues en partenariat avec les leaders technologiques pour une reconnaissance maximale.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-5 animate-fade-in"
            style={{ '--index': '3' } as React.CSSProperties}
          >
            <AnimatedButton 
              size="lg" 
              className="min-w-[200px] py-6 text-base font-semibold hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md hover:shadow-lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              <Link to="/catalog">Explorer les cours</Link>
            </AnimatedButton>
            <AnimatedButton 
              variant="outline" 
              size="lg"
              className="min-w-[200px] py-6 text-base font-semibold hover:bg-white/80 hover:border-primary/50 hover:text-primary transition-all duration-300 glassmorphic-blur"
            >
              <Link to="/business">Pour les entreprises</Link>
            </AnimatedButton>
          </div>
          
          {/* Avantages en forme de badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 animate-fade-in"
               style={{ '--index': '4' } as React.CSSProperties}>
            <div className="flex flex-col items-center group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200/60 mb-3 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold mb-1 group-hover:text-primary transition-colors">150+</div>
              <div className="text-sm text-muted-foreground">Cours certifiants</div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 border border-indigo-200/60 mb-3 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold mb-1 group-hover:text-indigo-600 transition-colors">25+</div>
              <div className="text-sm text-muted-foreground">Partenaires industriels</div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-200/60 mb-3 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold mb-1 group-hover:text-purple-600 transition-colors">50k+</div>
              <div className="text-sm text-muted-foreground">Professionnels certifiés</div>
            </div>
          </div>
          
          {/* Bannière flottante avec marques partenaires */}
          <div className="mt-20 w-full overflow-hidden glassmorphic-blur py-4 px-6 rounded-2xl animated-border-gradient animate-on-scroll">
            <div className="flex items-center justify-center space-x-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-90 transition-all" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png" alt="Microsoft Azure" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-90 transition-all" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png" alt="Google Cloud" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-90 transition-all" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-90 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
