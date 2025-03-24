
import React from 'react';
import { ArrowRight, Award, Star, TrendingUp, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseCard from '../ui/CourseCard';
import AnimatedButton from '../ui/AnimatedButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

// Données simulées pour les cours mis en avant
const featuredCourses = [
  {
    id: 'azure-administrator',
    title: 'Microsoft Azure Administrator (AZ-104)',
    description: 'Tout pour réussir votre certification Microsoft Azure Administrator (AZ-104). Labs pratiques et examens blancs inclus.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop',
    category: 'Microsoft Azure',
    duration: '35 heures',
    students: 12453,
    certificationPartner: 'Microsoft',
    rating: 4.8,
    reviews: 1245,
    featured: true,
    isNew: true,
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect - Associate',
    description: 'Préparation complète à l\'examen AWS Solutions Architect Associate (SAA-C03) avec un taux de réussite de 95%.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
    category: 'AWS',
    duration: '40 heures',
    students: 9865,
    certificationPartner: 'Amazon',
    rating: 4.9,
    reviews: 2156,
    isNew: false,
  },
  {
    id: 'comptia-security-plus',
    title: 'CompTIA Security+ (SY0-601)',
    description: 'Formation complète pour préparer et réussir votre examen CompTIA Security+, certification fondamentale en cybersécurité.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersécurité',
    duration: '32 heures',
    students: 7342,
    certificationPartner: 'CompTIA',
    rating: 4.7,
    reviews: 987,
    isNew: false,
  },
  {
    id: 'google-cloud-engineer',
    title: 'Google Cloud Professional Cloud Architect',
    description: 'Préparez-vous à l\'examen Google Cloud Professional Cloud Architect, l\'une des certifications cloud les mieux rémunérées.',
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?q=80&w=2070&auto=format&fit=crop',
    category: 'Google Cloud',
    duration: '38 heures',
    students: 5629,
    certificationPartner: 'Google',
    rating: 4.8,
    reviews: 756,
    isNew: true,
  },
  {
    id: 'java-programming',
    title: 'Oracle Certified Professional: Java SE Programmer',
    description: 'Certification Java SE 11 Programmer I et II : maîtrisez Java et préparez-vous aux examens officiels Oracle.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop',
    category: 'Programmation',
    duration: '45 heures',
    students: 6835,
    certificationPartner: 'Oracle',
    rating: 4.6,
    reviews: 968,
    isNew: false,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-50">
      {/* Fond avec effets */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-slate-50"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 animate-on-scroll">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <Award className="w-4 h-4 mr-1.5" /> Certifications les plus demandées
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">Certifications Populaires</h2>
            <p className="text-slate-600 max-w-2xl">
              Nos certifications les plus suivies, avec un taux de réussite exceptionnel. Préparations complètes aux examens officiels.
            </p>
          </div>
          <Link 
            to="/catalog" 
            className="group hidden md:inline-flex items-center text-sm font-medium text-primary mt-4 md:mt-0 hover:underline"
          >
            Voir toutes les certifications
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
            className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg py-6 px-8 hover:scale-105 transition-transform duration-300"
          >
            <Link to="/catalog" className="flex items-center">
              Explorer toutes nos certifications
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedButton>
        </div>
        
        {/* Bannière avec statistiques */}
        <div className="mt-24 p-8 rounded-xl border border-slate-200 bg-white shadow-sm">
          <h3 className="text-xl font-semibold text-center mb-8 text-slate-900">Pourquoi choisir nos formations certifiantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold mb-2 text-emerald-600">93%</div>
              <div className="text-slate-700">de taux de réussite aux examens</div>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 mb-4">
                <Star className="w-8 h-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold mb-2 text-amber-500">4.8/5</div>
              <div className="text-slate-700">satisfaction des apprenants</div>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold mb-2 text-blue-600">+40%</div>
              <div className="text-slate-700">d'augmentation salariale après certification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
