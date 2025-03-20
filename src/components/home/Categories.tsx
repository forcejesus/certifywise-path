
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
  },
  {
    id: 'web-development',
    title: 'Développement Web',
    description: 'Créez des applications web modernes avec les frameworks les plus récents.',
    icon: <Code className="h-6 w-6" />,
    courseCount: 38,
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analysez les données et construisez des modèles de machine learning.',
    icon: <Database className="h-6 w-6" />,
    courseCount: 29,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersécurité',
    description: 'Protégez les systèmes et réseaux contre les attaques numériques.',
    icon: <ShieldCheck className="h-6 w-6" />,
    courseCount: 32,
  },
  {
    id: 'ai-machine-learning',
    title: 'IA & Machine Learning',
    description: 'Créez des systèmes intelligents qui apprennent et s\'adaptent.',
    icon: <Cpu className="h-6 w-6" />,
    courseCount: 24,
  },
  {
    id: 'devops',
    title: 'DevOps & SRE',
    description: 'Rationalisez les processus de développement et d\'exploitation.',
    icon: <Server className="h-6 w-6" />,
    courseCount: 21,
  },
  {
    id: 'software-engineering',
    title: 'Ingénierie Logicielle',
    description: 'Construisez des systèmes logiciels évolutifs et maintenables.',
    icon: <Layers className="h-6 w-6" />,
    courseCount: 27,
  },
  {
    id: 'data-analytics',
    title: 'Analyse de Données',
    description: 'Transformez les données en informations commerciales exploitables.',
    icon: <LineChart className="h-6 w-6" />,
    courseCount: 19,
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">Explorer par Catégorie</h2>
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
