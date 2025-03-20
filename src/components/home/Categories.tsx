
import React from 'react';
import { ArrowRight, Cloud, Code, Database, ShieldCheck, Cpu, Server, Layers, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryCard from '../ui/CategoryCard';

// Données simulées pour les catégories de cours
const categories = [
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Maîtrisez les plateformes cloud d\'AWS, Azure et Google Cloud.',
    icon: <Cloud className="h-6 w-6" />,
    courseCount: 45,
    isNew: false,
  },
  {
    id: 'web-development',
    title: 'Développement Web',
    description: 'Créez des applications web modernes avec les frameworks les plus récents.',
    icon: <Code className="h-6 w-6" />,
    courseCount: 38,
    isNew: true,
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analysez les données et construisez des modèles de machine learning.',
    icon: <Database className="h-6 w-6" />,
    courseCount: 29,
    isNew: false,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersécurité',
    description: 'Protégez les systèmes et réseaux contre les attaques numériques.',
    icon: <ShieldCheck className="h-6 w-6" />,
    courseCount: 32,
    isNew: true,
  },
  {
    id: 'ai-machine-learning',
    title: 'IA & Machine Learning',
    description: 'Créez des systèmes intelligents qui apprennent et s\'adaptent.',
    icon: <Cpu className="h-6 w-6" />,
    courseCount: 24,
    isNew: false,
  },
  {
    id: 'devops',
    title: 'DevOps & SRE',
    description: 'Rationalisez les processus de développement et d\'exploitation.',
    icon: <Server className="h-6 w-6" />,
    courseCount: 21,
    isNew: false,
  },
  {
    id: 'software-engineering',
    title: 'Ingénierie Logicielle',
    description: 'Construisez des systèmes logiciels évolutifs et maintenables.',
    icon: <Layers className="h-6 w-6" />,
    courseCount: 27,
    isNew: false,
  },
  {
    id: 'data-analytics',
    title: 'Analyse de Données',
    description: 'Transformez les données en informations commerciales exploitables.',
    icon: <LineChart className="h-6 w-6" />,
    courseCount: 19,
    isNew: false,
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-indigo-50/50 to-blue-50/50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium inline-flex items-center mb-3">
              <span className="mr-1.5 relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Parcours certifiants
            </div>
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-indigo-700 bg-clip-text text-transparent">Explorer par Catégorie</h2>
            <p className="text-muted-foreground max-w-2xl">
              Parcourez notre collection complète de cours dans différents domaines technologiques. Chaque catégorie contient des parcours de certification sélectionnés.
            </p>
          </div>
          <Link 
            to="/catalog" 
            className="group hidden md:inline-flex items-center text-sm font-medium text-primary mt-4 md:mt-0 hover:underline"
          >
            Voir toutes les catégories
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id} 
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
