
import React from 'react';
import { ArrowRight, Cloud, Code, Database, ShieldCheck, Cpu, Server, Layers, LineChart, Award, Globe, Terminal, Library } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryCard from '../ui/CategoryCard';
import AnimatedButton from '../ui/AnimatedButton';

// Données simulées pour les catégories de certifications
const categories = [
  {
    id: 'cloud-computing',
    title: 'AWS & Cloud Computing',
    description: 'Certifications AWS, Azure et Google Cloud pour maîtriser les infrastructures cloud.',
    icon: <Cloud className="h-6 w-6" />,
    courseCount: 45,
    isNew: false,
    certificationPartners: ['AWS', 'Microsoft', 'Google'],
  },
  {
    id: 'microsoft-azure',
    title: 'Microsoft Azure',
    description: 'Toutes les certifications Microsoft Azure : Fundamentals, Administrator, Developer et Solutions Architect.',
    icon: <Server className="h-6 w-6" />,
    courseCount: 38,
    isNew: true,
    certificationPartners: ['Microsoft'],
  },
  {
    id: 'data-science',
    title: 'Data Science & BI',
    description: 'Certifications en Data Science, PowerBI et outils d\'analyse pour professionnels.',
    icon: <Database className="h-6 w-6" />,
    courseCount: 29,
    isNew: false,
    certificationPartners: ['Microsoft', 'IBM', 'Tableau'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersécurité',
    description: 'Certifications CompTIA, CISSP et autres standards en sécurité informatique.',
    icon: <ShieldCheck className="h-6 w-6" />,
    courseCount: 32,
    isNew: true,
    certificationPartners: ['CompTIA', 'ISC2', 'Cisco'],
  },
  {
    id: 'programming',
    title: 'Langages de Programmation',
    description: 'Certifications Java, Python, C#, et .NET reconnues par l\'industrie.',
    icon: <Code className="h-6 w-6" />,
    courseCount: 36,
    isNew: false,
    certificationPartners: ['Oracle', 'Microsoft', 'Python Institute'],
  },
  {
    id: 'devops',
    title: 'DevOps & SRE',
    description: 'Certifications en DevOps, CI/CD, Docker, Kubernetes et GitOps.',
    icon: <Server className="h-6 w-6" />,
    courseCount: 21,
    isNew: false,
    certificationPartners: ['Docker', 'Kubernetes', 'GitLab'],
  },
  {
    id: 'linux',
    title: 'Linux & Administration',
    description: 'Certifications Linux Foundation, RHEL et administration système.',
    icon: <Terminal className="h-6 w-6" />,
    courseCount: 27,
    isNew: false,
    certificationPartners: ['Linux Foundation', 'Red Hat', 'LPI'],
  },
  {
    id: 'project-management',
    title: 'Gestion de Projet IT',
    description: 'Certifications PMP, PRINCE2, Scrum et méthodologies agiles.',
    icon: <Library className="h-6 w-6" />,
    courseCount: 19,
    isNew: false,
    certificationPartners: ['PMI', 'Scrum Alliance', 'Axelos'],
  },
];

const Categories = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Fond avec effets */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-slate-50/30 to-slate-100/30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 animate-on-scroll">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-yellow-500" />
              <span className="text-slate-700 font-medium text-lg">Certifications Reconnues Mondialement</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">Devenez un professionnel certifié</h2>
            <p className="text-slate-600 max-w-2xl">
              Nos formations préparent aux certifications les plus demandées sur le marché du travail. Rejoignez plus de 50 000 professionnels certifiés grâce à nos parcours d'excellence.
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <CategoryCard 
                {...category}
              />
            </div>
          ))}
        </div>
        
        {/* Bannière promotionnelle */}
        <div className="mt-20 rounded-2xl p-8 bg-gradient-to-r from-slate-800 to-slate-700 text-white flex flex-col md:flex-row justify-between items-center animate-on-scroll">
          <div className="mb-6 md:mb-0 md:max-w-lg">
            <h3 className="text-2xl font-bold mb-3">Solutions pour les entreprises</h3>
            <p className="text-white/90 mb-0">
              Formez vos équipes avec nos programmes de certifications. Des parcours personnalisés pour les compétences spécifiques dont votre entreprise a besoin.
            </p>
          </div>
          <AnimatedButton 
            className="bg-white text-slate-800 hover:bg-white/90 transition-colors py-3 px-5 font-medium"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            <Link to="/business">Solutions Entreprises</Link>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Categories;
