
import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

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
    <section className="py-20 relative bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Histoires de Réussite</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de professionnels qui ont transformé leur carrière grâce à nos cours de certification.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              {...testimonial}
              className="h-full"
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png" alt="Microsoft Azure" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png" alt="Google Cloud" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Oracle_logo.svg/1200px-Oracle_logo.svg.png" alt="Oracle" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Nos cours de certification sont reconnus par les principales entreprises technologiques du monde entier
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
