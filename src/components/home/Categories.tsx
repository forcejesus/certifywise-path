
import React from 'react';
import { ArrowRight, Cloud, Code, Database, ShieldCheck, Cpu, Server, Layers, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryCard from '../ui/CategoryCard';

// Mock data for course categories
const categories = [
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Master cloud platforms from AWS, Azure, and Google Cloud.',
    icon: <Cloud className="h-6 w-6" />,
    courseCount: 45,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Build modern web applications with the latest frameworks.',
    icon: <Code className="h-6 w-6" />,
    courseCount: 38,
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analyze data and build machine learning models.',
    icon: <Database className="h-6 w-6" />,
    courseCount: 29,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems and networks from digital attacks.',
    icon: <ShieldCheck className="h-6 w-6" />,
    courseCount: 32,
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    description: 'Create intelligent systems that learn and adapt.',
    icon: <Cpu className="h-6 w-6" />,
    courseCount: 24,
  },
  {
    id: 'devops',
    title: 'DevOps & SRE',
    description: 'Streamline development and operations processes.',
    icon: <Server className="h-6 w-6" />,
    courseCount: 21,
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description: 'Build scalable and maintainable software systems.',
    icon: <Layers className="h-6 w-6" />,
    courseCount: 27,
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Turn data into actionable business insights.',
    icon: <LineChart className="h-6 w-6" />,
    courseCount: 19,
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-secondary/30 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">Explore by Category</h2>
            <p className="text-muted-foreground max-w-2xl">
              Browse our comprehensive collection of courses across various tech domains. Each category contains curated certification paths.
            </p>
          </div>
          <Link 
            to="/catalog" 
            className="group hidden md:inline-flex items-center text-sm font-medium text-primary mt-4 md:mt-0 hover:underline"
          >
            View all categories
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
