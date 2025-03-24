
import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Award, CheckCircle2, Globe, ShieldCheck, TrendingUp } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 overflow-hidden relative">
      {/* Bannière de fond */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-indigo-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      {/* Éléments d'arrière-plan décoratifs avec overlay */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div 
            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-xl bg-accent/70 text-accent-foreground mb-6 animate-fade-in shimmer"
            style={{ '--index': '0' } as React.CSSProperties}
          >
            <Award className="w-3.5 h-3.5 mr-1.5 text-yellow-500" /> 
            <span>Préparation aux certifications mondialement reconnues</span>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-balance mb-6 animate-fade-in text-slate-900"
            style={{ '--index': '1' } as React.CSSProperties}
          >
            Votre avenir professionnel passe par des 
            <span className="relative inline-block px-2 text-primary font-extrabold">
              Certifications
              <svg className="absolute inset-x-0 -bottom-1 w-full h-2 text-primary/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="currentColor" />
              </svg>
            </span>
            de référence
          </h1>
          
          <p 
            className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 animate-fade-in"
            style={{ '--index': '2' } as React.CSSProperties}
          >
            Préparez-vous efficacement aux examens de certification AWS, Microsoft, Google Cloud, Java, Python, DevOps et bien plus. Nos cours sont développés par des experts certifiés et reconnus par les leaders technologiques.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-5 animate-fade-in"
            style={{ '--index': '3' } as React.CSSProperties}
          >
            <AnimatedButton 
              size="lg" 
              className="min-w-[200px] py-6 text-base font-semibold hover:scale-105 transition-transform duration-300 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              <Link to="/catalog">Parcourir les certifications</Link>
            </AnimatedButton>
            <AnimatedButton 
              variant="outline" 
              size="lg"
              className="min-w-[200px] py-6 text-base font-semibold hover:bg-white/80 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Link to="/certification-guide">Guide des certifications</Link>
            </AnimatedButton>
          </div>
          
          {/* Stats et points clés */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 animate-fade-in"
               style={{ '--index': '4' } as React.CSSProperties}>
            <div className="flex flex-col items-center group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 border border-blue-100 mb-3 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold mb-1 group-hover:text-primary transition-colors">150+</div>
              <div className="text-sm text-slate-600">Certifications</div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 mb-3 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold mb-1 group-hover:text-indigo-600 transition-colors">25+</div>
              <div className="text-sm text-slate-600">Partenaires certifiants</div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 mb-3 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold mb-1 group-hover:text-emerald-600 transition-colors">93%</div>
              <div className="text-sm text-slate-600">Taux de réussite</div>
            </div>
          </div>
          
          {/* Bannière avec logos de certification */}
          <div className="mt-20 w-full py-6 px-8 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-slate-100 animate-on-scroll">
            <p className="text-sm text-slate-500 mb-4 text-center">Nos certifications sont reconnues par les leaders du marché</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png" alt="Microsoft Azure" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png" alt="Google Cloud" className="h-6 md:h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft-logo.svg/512px-Microsoft-logo.svg.png" alt="Microsoft" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Cisco_logo.svg/1024px-Cisco_logo.svg.png" alt="Cisco" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" alt="Oracle" className="h-6 md:h-8 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
          
          {/* Avantages */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left animate-on-scroll">
            <div className="flex flex-col p-6 rounded-xl border border-slate-100 bg-white/90 backdrop-blur-sm shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Préparation complète</h3>
              </div>
              <p className="text-sm text-slate-600">Tout ce dont vous avez besoin pour réussir votre examen de certification du premier coup.</p>
            </div>
            
            <div className="flex flex-col p-6 rounded-xl border border-slate-100 bg-white/90 backdrop-blur-sm shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Contenu officiel</h3>
              </div>
              <p className="text-sm text-slate-600">Matériel pédagogique conforme aux exigences des organismes certificateurs.</p>
            </div>
            
            <div className="flex flex-col p-6 rounded-xl border border-slate-100 bg-white/90 backdrop-blur-sm shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Support expert</h3>
              </div>
              <p className="text-sm text-slate-600">Accès à des instructeurs certifiés pour répondre à toutes vos questions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
