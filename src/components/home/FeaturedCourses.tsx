
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseCard from '../ui/CourseCard';
import AnimatedButton from '../ui/AnimatedButton';

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
    <section className="py-20 relative bg-gradient-to-b from-white to-blue-50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">Certifications Populaires</h2>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              {...course}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <AnimatedButton size="lg">
            <Link to="/catalog">Explorer tous les cours</Link>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
