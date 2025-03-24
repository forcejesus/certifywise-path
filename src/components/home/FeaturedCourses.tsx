
import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseCard from '../ui/CourseCard';
import AnimatedButton from '../ui/AnimatedButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

// Données simulées pour les cours mis en avant
const featuredCourses = [
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Azure Fundamentals',
    description: 'Maîtrisez les fondamentaux des services cloud et de l\'implémentation Azure, en vous concentrant sur les services de base et les concepts de sécurité.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop',
    category: 'Cloud',
    duration: '25 heures',
    students: 12453,
    certificationPartner: 'Microsoft',
    featured: true,
    isNew: true,
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Solutions Architect Associate',
    description: 'Apprenez à concevoir et déployer des systèmes évolutifs et hautement disponibles sur l\'infrastructure AWS.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
    category: 'Cloud',
    duration: '40 heures',
    students: 8765,
    certificationPartner: 'Amazon',
    isNew: false,
  },
  {
    id: 'react-advanced',
    title: 'Développement React Avancé',
    description: 'Maîtrisez les modèles avancés et les optimisations de performance dans les applications React.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    category: 'Développement Web',
    duration: '30 heures',
    students: 6723,
    certificationPartner: 'Meta',
    isNew: false,
  },
  {
    id: 'cybersecurity-fundamentals',
    title: 'Fondamentaux de la Cybersécurité',
    description: 'Établissez une base solide dans les concepts de cybersécurité, l\'identification des menaces et les mesures de protection.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    category: 'Sécurité',
    duration: '35 heures',
    students: 9342,
    certificationPartner: 'CompTIA',
    isNew: false,
  },
  {
    id: 'data-science-python',
    title: 'Data Science avec Python',
    description: 'Analysez et interprétez des données complexes à l\'aide de Python et de ses puissantes bibliothèques.',
    image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070&auto=format&fit=crop',
    category: 'Data Science',
    duration: '45 heures',
    students: 7629,
    certificationPartner: 'IBM',
    isNew: false,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fond avec effets */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/70 to-indigo-50/50"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 animate-on-scroll">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <TrendingUp className="w-4 h-4 mr-1.5" /> Formations les plus populaires
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 neo-gradient">Certifications Populaires</h2>
            <p className="text-muted-foreground max-w-2xl">
              Nos cours les plus populaires, conçus en collaboration avec les leaders de l'industrie pour vous aider à obtenir des certifications reconnues.
            </p>
          </div>
          <Link 
            to="/catalog" 
            className="group hidden md:inline-flex items-center text-sm font-medium text-primary mt-4 md:mt-0 hover:underline"
          >
            Voir tous les cours
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        {/* Carousel pour les appareils mobiles */}
        <div className="md:hidden w-full mb-10">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredCourses.map((course) => (
                <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <CourseCard {...course} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4" />
            <CarouselNext className="absolute right-4" />
          </Carousel>
        </div>
        
        {/* Grille pour les tablettes et ordinateurs */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course, index) => (
            <div 
              key={course.id} 
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
        
        {/* Bouton d'action */}
        <div className="flex justify-center mt-12 animate-on-scroll">
          <AnimatedButton 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md hover:shadow-lg py-6 px-8 hover:scale-105 transition-transform duration-300"
          >
            <Link to="/catalog" className="flex items-center">
              Explorer tous les cours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedButton>
        </div>
        
        {/* Badges statistiques */}
        <div className="mt-24 flex flex-wrap justify-center gap-x-16 gap-y-8 animate-on-scroll">
          <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm shadow-sm rounded-xl px-8 py-6 border border-gray-100">
            <div className="text-4xl font-bold mb-2 text-primary">94%</div>
            <div className="text-muted-foreground text-center">de taux de réussite aux examens</div>
          </div>
          <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm shadow-sm rounded-xl px-8 py-6 border border-gray-100">
            <div className="text-4xl font-bold mb-2 text-indigo-600">+40%</div>
            <div className="text-muted-foreground text-center">d'évolution salariale moyenne</div>
          </div>
          <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm shadow-sm rounded-xl px-8 py-6 border border-gray-100">
            <div className="text-4xl font-bold mb-2 text-purple-600">4.8/5</div>
            <div className="text-muted-foreground text-center">satisfaction des apprenants</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
