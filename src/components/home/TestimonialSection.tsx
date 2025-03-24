
import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { Sparkles, Quote } from 'lucide-react';

// Données simulées pour les témoignages
const testimonials = [
  {
    id: '1',
    name: 'Sophie Martin',
    role: 'Architecte Cloud',
    company: 'TechNova Systems',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    testimonial: 'Le cours de certification AWS était incroyablement pratique. J\'ai appliqué ce que j\'ai appris immédiatement dans mon travail, et en trois mois, j\'ai reçu une promotion.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michel Chen',
    role: 'Développeur Frontend',
    company: 'PixelPerfect',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    testimonial: 'Le cours React m\'a aidé à combler des lacunes critiques. La formation était précise, ciblée et exactement ce dont j\'avais besoin sans superflu.',
    rating: 5
  },
  {
    id: '3',
    name: 'David Rodriguez',
    role: 'Spécialiste en Sécurité',
    company: 'SecureEdge',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    testimonial: 'La certification en cybersécurité était stimulante mais extrêmement gratifiante. Elle m\'a donné la confiance nécessaire pour diriger des initiatives de sécurité dans mon entreprise.',
    rating: 4
  },
  {
    id: '4',
    name: 'Léa Durand',
    role: 'Data Scientist',
    company: 'DataDrive Analytics',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    testimonial: 'La certification en data science m\'a aidée à passer de l\'analyse au machine learning. Les projets pratiques étaient particulièrement précieux.',
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fond avec effets */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50/60 to-blue-50/60"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-indigo-200/30 rotate-12">
        <Quote className="w-64 h-64" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 text-blue-200/30 -rotate-12">
        <Quote className="w-80 h-80" />
      </div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4">
            <Sparkles className="w-4 h-4 mr-1.5" /> Témoignages d'apprenants
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neo-gradient">Histoires de Réussite</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de professionnels qui ont transformé leur carrière grâce à nos cours de certification.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="animate-on-scroll" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TestimonialCard 
                {...testimonial}
                className="h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-on-scroll">
          <h3 className="text-xl font-semibold mb-8 text-gray-700">Nos cours de certification sont reconnus par les principales entreprises technologiques</h3>
          <div className="py-6 px-8 rounded-2xl glassmorphic-blur inline-flex flex-wrap justify-center gap-10 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png" alt="Microsoft Azure" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png" alt="Google Cloud" className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Oracle_logo.svg/1200px-Oracle_logo.svg.png" alt="Oracle" className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
