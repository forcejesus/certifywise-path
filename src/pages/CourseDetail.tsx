
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ChevronLeft, Clock, Users, Award, Book, CheckCircle2, Play, Globe, Download, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

// Données de cours fictives (dans une application réelle, elles seraient récupérées via une API)
const coursesData = {
  'azure-fundamentals': {
    title: 'Microsoft Azure Fundamentals',
    description: 'Maîtrisez les fondamentaux des services cloud et de l\'implémentation Microsoft Azure. Ce cours complet se concentre sur les concepts cloud, les services Azure de base, la sécurité, la confidentialité, la conformité et la confiance. Parfait pour les professionnels de l\'informatique qui commencent à travailler avec des solutions et services basés sur le cloud.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop',
    category: 'Cloud',
    duration: '25 heures',
    students: 12453,
    certificationPartner: 'Microsoft',
    certificationCode: 'AZ-900',
    price: 199,
    isNew: true,
    highlights: [
      'Comprendre les concepts et modèles du cloud',
      'Apprendre les services et solutions Azure de base',
      'Maîtriser la sécurité, la confidentialité, la conformité et la confiance',
      'Comprendre la tarification et le support Azure',
      'Préparer l\'examen de certification officiel AZ-900'
    ],
    modules: [
      {
        title: 'Concepts Cloud',
        lessons: [
          'Introduction au Cloud Computing',
          'Modèles de services cloud (IaaS, PaaS, SaaS)',
          'Cloud public, privé et hybride',
          'Avantages et considérations du cloud'
        ]
      },
      {
        title: 'Services Azure de base',
        lessons: [
          'Architecture et composants Azure',
          'Services de calcul (VMs, Conteneurs, Functions)',
          'Services et solutions de stockage',
          'Réseau et diffusion de contenu'
        ]
      },
      {
        title: 'Sécurité et conformité',
        lessons: [
          'Services d\'identité Azure',
          'Outils et fonctionnalités de sécurité',
          'Méthodologies de gouvernance',
          'Confidentialité, conformité et protection des données'
        ]
      },
      {
        title: 'Tarification et support Azure',
        lessons: [
          'Types et gestion d\'abonnements',
          'Gestion des coûts et accords de niveau de service',
          'Cycle de vie des services dans Azure',
          'Options de support et ressources communautaires'
        ]
      },
      {
        title: 'Préparation à la certification',
        lessons: [
          'Structure et format de l\'examen',
          'Stratégies d\'étude et ressources',
          'Questions pratiques et évaluations',
          'Préparation finale à l\'examen'
        ]
      }
    ],
    instructors: [
      {
        name: 'Jennifer Wilson',
        role: 'Architecte Solutions Azure',
        bio: 'Plus de 15 ans d\'expérience en architecture cloud avec expertise en certification Microsoft',
        avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
      }
    ]
  },
  'aws-solutions-architect': {
    title: 'AWS Solutions Architect Associate',
    description: 'Apprenez à concevoir et déployer des systèmes évolutifs et hautement disponibles sur l\'infrastructure AWS. Ce cours approfondi couvre l\'ensemble des services AWS, en mettant l\'accent sur les meilleures pratiques de conception d\'architecture, de sécurité et d\'optimisation.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
    category: 'Cloud',
    duration: '40 heures',
    students: 8765,
    certificationPartner: 'Amazon',
    certificationCode: 'SAA-C03',
    price: 299,
    isNew: false,
    highlights: [
      'Concevoir et déployer une infrastructure AWS évolutive',
      'Implémenter des contrôles de sécurité et la protection des données',
      'Créer des architectures automatisées et élastiques',
      'Choisir les services AWS appropriés pour les applications',
      'Optimiser les systèmes pour la rentabilité et les performances'
    ],
    modules: [
      {
        title: 'Fondamentaux AWS',
        lessons: [
          'Infrastructure mondiale AWS',
          'Configuration et gestion de compte AWS',
          'IAM et sécurité du compte',
          'Interface de ligne de commande AWS'
        ]
      },
      {
        title: 'Services de calcul',
        lessons: [
          'EC2 et sélection d\'instances',
          'Auto Scaling et Elastic Load Balancing',
          'Conteneurs sur AWS (ECS et EKS)',
          'Informatique sans serveur avec Lambda'
        ]
      },
      {
        title: 'Solutions de stockage',
        lessons: [
          'Classes et fonctionnalités de stockage S3',
          'EBS, EFS et Storage Gateway',
          'Sélection de base de données (RDS, DynamoDB, Redshift)',
          'Services de migration et de transfert de données'
        ]
      },
      {
        title: 'Réseau',
        lessons: [
          'Conception et implémentation de VPC',
          'Routage, groupes de sécurité et NACL',
          'Options Direct Connect et VPN',
          'Route 53 et gestion DNS'
        ]
      },
      {
        title: 'Conception d\'architecture',
        lessons: [
          'Haute disponibilité et tolérance aux pannes',
          'Mécanismes de découplage',
          'Stratégies d\'optimisation des coûts',
          'Excellence opérationnelle et surveillance'
        ]
      }
    ],
    instructors: [
      {
        name: 'Robert Chen',
        role: 'Architecte Solutions AWS Certifié',
        bio: 'Consultant cloud avec plus de 10 ans d\'expérience dans l\'implémentation de solutions AWS',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    ]
  }
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Obtenir les données du cours en fonction du paramètre id
  const course = id ? coursesData[id as keyof typeof coursesData] : null;
  
  // Si le cours n'est pas trouvé, afficher un message d'erreur
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex items-center mb-8">
              <Link 
                to="/catalog" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Retour au catalogue
              </Link>
            </div>
            
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <h1 className="text-2xl font-bold mb-4">Cours introuvable</h1>
              <p className="text-muted-foreground mb-8">
                Désolé, nous n'avons pas pu trouver le cours que vous recherchez.
              </p>
              <AnimatedButton>
                <Link to="/catalog">Parcourir tous les cours</Link>
              </AnimatedButton>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center mb-8">
            <Link 
              to="/catalog" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Retour au catalogue
            </Link>
          </div>
          
          {/* En-tête du cours */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                  {course.category}
                </span>
                
                {course.isNew && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/90 text-white">
                    Nouveau
                  </span>
                )}
                
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                  {course.certificationCode}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{course.students.toLocaleString()} étudiants</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-muted-foreground" />
                  <span>Certifié {course.certificationPartner}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Mis à jour il y a 1 mois</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden bg-card border border-border/50 shadow-subtle">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-3xl font-bold">{course.price}€</div>
                    <div className="text-sm text-muted-foreground line-through">{course.price + 100}€</div>
                  </div>
                  
                  <AnimatedButton className="w-full mb-3 justify-center">
                    S'inscrire maintenant
                  </AnimatedButton>
                  
                  <AnimatedButton variant="outline" className="w-full mb-6 justify-center">
                    Essayer gratuitement
                  </AnimatedButton>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span>Accès à vie complet</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Download className="w-4 h-4 text-muted-foreground" />
                      <span>Ressources téléchargeables</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span>Certificat d'achèvement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contenu du cours */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Ce que vous apprendrez */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Ce que vous apprendrez</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 text-primary">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Contenu du cours */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Contenu du cours</h2>
                <div className="space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border border-border/50 rounded-lg overflow-hidden">
                      <div className="bg-secondary/50 px-6 py-4 flex justify-between items-center">
                        <h3 className="font-medium">{module.title}</h3>
                        <span className="text-sm text-muted-foreground">{module.lessons.length} leçons</span>
                      </div>
                      <div className="px-6 py-2 divide-y divide-border/30">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="py-3 flex items-center gap-3">
                            <Play className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Instructeur */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Instructeur</h2>
                {course.instructors.map((instructor, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={instructor.avatar} 
                        alt={instructor.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{instructor.name}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{instructor.role}</p>
                      <p className="text-sm">{instructor.bio}</p>
                    </div>
                  </div>
                ))}
              </section>
            </div>
            
            <div className="lg:col-span-1">
              {/* Exigences */}
              <div className="bg-card border border-border/50 rounded-lg p-6 shadow-subtle mb-6">
                <h3 className="font-medium text-lg mb-4">Prérequis</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Compréhension de base des concepts de cloud computing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Familiarité avec l'infrastructure IT et le réseau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Aucune expérience préalable avec les services {course.certificationPartner} requise</span>
                  </li>
                </ul>
              </div>
              
              {/* Détails de certification */}
              <div className="bg-card border border-border/50 rounded-lg p-6 shadow-subtle">
                <h3 className="font-medium text-lg mb-4">Détails de la certification</h3>
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{course.certificationCode}</div>
                    <div className="text-sm text-muted-foreground">
                      Certification officielle {course.certificationPartner}
                    </div>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  À la fin, vous serez préparé à passer l'examen de certification officiel {course.certificationCode} et à ajouter cette référence à votre profil professionnel.
                </p>
                <a 
                  href="#" 
                  className="text-sm text-primary font-medium hover:underline"
                >
                  En savoir plus sur cette certification →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
