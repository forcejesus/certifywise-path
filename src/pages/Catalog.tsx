import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/ui/CourseCard';
import { Search, Filter, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Données simulées pour le catalogue de cours
const catalogCourses = [
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Azure Fundamentals',
    description: 'Maîtrisez les fondamentaux des services cloud et de l\'implémentation Azure, en vous concentrant sur les services de base et les concepts de sécurité.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop',
    category: 'Cloud',
    duration: '25 heures',
    students: 12453,
    certificationPartner: 'Microsoft',
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
    id: 'gcp-cloud-engineer',
    title: 'Google Cloud Professional Cloud Engineer',
    description: 'Concevez, développez et gérez des infrastructures sécurisées sur Google Cloud Platform.',
    image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2070&auto=format&fit=crop',
    category: 'Cloud',
    duration: '35 heures',
    students: 5432,
    certificationPartner: 'Google',
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
  {
    id: 'kubernetes-certification',
    title: 'Administrateur Kubernetes Certifié',
    description: 'Maîtrisez le déploiement, la maintenance et le dépannage des clusters Kubernetes.',
    image: 'https://images.unsplash.com/photo-1646627927952-65824749ef49?q=80&w=2071&auto=format&fit=crop',
    category: 'DevOps',
    duration: '38 heures',
    students: 4231,
    certificationPartner: 'CNCF',
    isNew: true,
  },
  {
    id: 'machine-learning-certification',
    title: 'Certification Ingénieur Machine Learning',
    description: 'Construisez et déployez des modèles de machine learning pour des applications du monde réel.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop',
    category: 'IA & Machine Learning',
    duration: '50 heures',
    students: 5827,
    certificationPartner: 'TensorFlow',
    isNew: false,
  },
];

// Catégories de filtre simulées
const categories = ['Tous', 'Cloud', 'Développement Web', 'Sécurité', 'Data Science', 'DevOps', 'IA & Machine Learning'];
const certifications = ['Tous', 'Microsoft', 'Amazon', 'Google', 'CompTIA', 'Meta', 'IBM', 'CNCF', 'TensorFlow'];
const durations = ['Tous', 'Moins de 30 heures', '30-40 heures', 'Plus de 40 heures'];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedCertification, setSelectedCertification] = useState('Tous');
  const [selectedDuration, setSelectedDuration] = useState('Tous');
  const [showFilters, setShowFilters] = useState(false);

  // Filtrer les cours en fonction de la recherche et des filtres
  const filteredCourses = catalogCourses.filter((course) => {
    // Filtre de requête de recherche
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !course.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filtre de catégorie
    if (selectedCategory !== 'Tous' && course.category !== selectedCategory) {
      return false;
    }
    
    // Filtre de certification
    if (selectedCertification !== 'Tous' && course.certificationPartner !== selectedCertification) {
      return false;
    }
    
    // Filtre de durée
    if (selectedDuration !== 'Tous') {
      const hours = parseInt(course.duration);
      if (selectedDuration === 'Moins de 30 heures' && hours >= 30) {
        return false;
      } else if (selectedDuration === '30-40 heures' && (hours < 30 || hours > 40)) {
        return false;
      } else if (selectedDuration === 'Plus de 40 heures' && hours <= 40) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden relative">
      {/* Éléments d'arrière-plan décoratifs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Cours de Certification
            </h1>
            <p className="text-muted-foreground max-w-3xl text-balance">
              Parcourez notre catalogue complet de cours de certification reconnus par l'industrie. Filtrez par catégorie, organisme de certification, ou recherchez des compétences spécifiques.
            </p>
          </div>
          
          {/* Section de recherche et de filtre */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher des cours..."
                  className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <button
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                Filtres
              </button>
            </div>
            
            {/* Filtres pour ordinateur */}
            <div className="hidden md:flex flex-wrap gap-6 mb-6">
              <div>
                <div className="font-medium text-sm mb-2">Catégorie</div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        'px-3 py-1 text-sm rounded-full transition-colors',
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="font-medium text-sm mb-2">Organisme de Certification</div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <button
                      key={cert}
                      onClick={() => setSelectedCertification(cert)}
                      className={cn(
                        'px-3 py-1 text-sm rounded-full transition-colors',
                        selectedCertification === cert
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      )}
                    >
                      {cert}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="font-medium text-sm mb-2">Durée</div>
                <div className="flex flex-wrap gap-2">
                  {durations.map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setSelectedDuration(duration)}
                      className={cn(
                        'px-3 py-1 text-sm rounded-full transition-colors',
                        selectedDuration === duration
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      )}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Filtres pour mobile (pliables) */}
            <div className={cn(
              'md:hidden space-y-6 bg-card p-4 rounded-lg border mb-6',
              showFilters ? 'block' : 'hidden'
            )}>
              <div>
                <div className="font-medium text-sm mb-2">Catégorie</div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        'px-3 py-1 text-sm rounded-full transition-colors',
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="font-medium text-sm mb-2">Organisme de Certification</div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <button
                      key={cert}
                      onClick={() => setSelectedCertification(cert)}
                      className={cn(
                        'px-3 py-1 text-sm rounded-full transition-colors',
                        selectedCertification === cert
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      )}
                    >
                      {cert}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="font-medium text-sm mb-2">Durée</div>
                <div className="flex flex-wrap gap-2">
                  {durations.map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setSelectedDuration(duration)}
                      className={cn(
                        'px-3 py-1 text-sm rounded-full transition-colors',
                        selectedDuration === duration
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      )}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Affichage de {filteredCourses.length} cours sur {catalogCourses.length}</span>
            </div>
          </div>
          
          {/* Grille de cours avec animation d'apparition */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className="opacity-0 animate-fade-up" 
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <CourseCard 
                    {...course}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white/50 backdrop-blur-sm rounded-2xl border border-white/70 shadow-sm">
              <div className="mb-4 p-4 rounded-full bg-secondary/50 text-muted-foreground">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Aucun cours trouvé</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                Nous n'avons trouvé aucun cours correspondant à vos critères de recherche. Essayez d'ajuster vos filtres ou votre requête de recherche.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Tous');
                  setSelectedCertification('Tous');
                  setSelectedDuration('Tous');
                }}
                className="text-primary font-medium px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                Effacer tous les filtres
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
