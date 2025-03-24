
import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { Award, Quote, Sparkles, CheckCircle2, Medal, BookOpen } from 'lucide-react';

// Données simulées pour les témoignages de certifications
const testimonials = [
  {
    id: '1',
    name: 'Sophie Martin',
    role: 'Architecte Cloud',
    company: 'TechNova Systems',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    testimonial: 'J\'ai obtenu ma certification AWS Solutions Architect du premier coup grâce au parcours de formation. Les quiz et examens blancs reproduisent parfaitement les conditions de l\'examen.',
    certifications: ['AWS Solutions Architect - Associate'],
    rating: 5
  },
  {
    id: '2',
    name: 'Michel Chen',
    role: 'Ingénieur DevOps',
    company: 'PixelPerfect',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    testimonial: 'J\'ai décroché ma certification Microsoft Azure Administrator en seulement 6 semaines. Les labs pratiques m\'ont donné l\'expérience nécessaire pour réussir avec un score de 920/1000.',
    certifications: ['Microsoft Azure Administrator'],
    rating: 5
  },
  {
    id: '3',
    name: 'David Rodriguez',
    role: 'Responsable Sécurité IT',
    company: 'SecureEdge',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    testimonial: 'Après avoir validé ma certification CompTIA Security+, j\'ai pu négocier une augmentation de 15%. La formation couvre parfaitement tous les points du programme officiel.',
    certifications: ['CompTIA Security+'],
    rating: 4
  },
  {
    id: '4',
    name: 'Léa Durand',
    role: 'Data Scientist',
    company: 'DataDrive Analytics',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    testimonial: 'La préparation à la certification Google Professional Data Engineer était complète et efficace. J\'ai particulièrement apprécié l\'approche basée sur des cas pratiques réels.',
    certifications: ['Google Professional Data Engineer'],
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Arrière-plan stylisé */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 mb-4">
            <Medal className="w-4 h-4 mr-1.5 text-yellow-500" /> Succès de nos certifiés
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Témoignages de réussite</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Découvrez les témoignages de professionnels qui ont obtenu leurs certifications grâce à nos formations et ont transformé leur carrière.
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
                className="h-full hover:shadow-md transition-shadow duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Statistiques */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 animate-on-scroll">
          <div className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-slate-100 bg-white text-center">
            <div className="p-3 rounded-full bg-emerald-50 mb-4">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="text-4xl font-bold mb-2 text-slate-900">25K+</div>
            <div className="text-slate-600">Certifications obtenues</div>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-slate-100 bg-white text-center">
            <div className="p-3 rounded-full bg-blue-50 mb-4">
              <Medal className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold mb-2 text-slate-900">93%</div>
            <div className="text-slate-600">Taux de réussite</div>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-slate-100 bg-white text-center">
            <div className="p-3 rounded-full bg-purple-50 mb-4">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-4xl font-bold mb-2 text-slate-900">150+</div>
            <div className="text-slate-600">Parcours certifiants</div>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-slate-100 bg-white text-center">
            <div className="p-3 rounded-full bg-amber-50 mb-4">
              <Award className="h-8 w-8 text-amber-500" />
            </div>
            <div className="text-4xl font-bold mb-2 text-slate-900">25+</div>
            <div className="text-slate-600">Organismes partenaires</div>
          </div>
        </div>
        
        {/* Partenaires de certification */}
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-xl font-semibold mb-8 text-slate-800">Certifications reconnues par les leaders technologiques</h3>
          <div className="py-6 px-8 rounded-xl border border-slate-100 shadow-sm bg-white flex flex-wrap justify-center gap-10 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-10 opacity-80 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png" alt="Microsoft Azure" className="h-10 opacity-80 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png" alt="Google Cloud" className="h-8 opacity-80 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" alt="Oracle" className="h-8 opacity-80 hover:opacity-100 transition-all" />
            <img src="https://www.comptia.org/images/default-source/guidebooks/comptia-logo-rgb-300dpi.png" alt="CompTIA" className="h-10 opacity-80 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Cisco_logo.svg/1024px-Cisco_logo.svg.png" alt="Cisco" className="h-8 opacity-80 hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
