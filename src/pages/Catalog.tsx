
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/ui/CourseCard';
import { Search, Filter, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for the catalog courses
const catalogCourses = [
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Azure Fundamentals',
    description: 'Master the fundamentals of cloud services and Azure implementation, focusing on core services and security concepts.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop',
    category: 'Cloud',
    duration: '25 hours',
    students: 12453,
    certificationPartner: 'Microsoft',
    isNew: true,
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Solutions Architect Associate',
    description: 'Learn how to design and deploy scalable, highly available systems on AWS infrastructure.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
    category: 'Cloud',
    duration: '40 hours',
    students: 8765,
    certificationPartner: 'Amazon',
  },
  {
    id: 'gcp-cloud-engineer',
    title: 'Google Cloud Professional Cloud Engineer',
    description: 'Design, develop, and manage secure infrastructures on Google Cloud Platform.',
    image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2070&auto=format&fit=crop',
    category: 'Cloud',
    duration: '35 hours',
    students: 5432,
    certificationPartner: 'Google',
  },
  {
    id: 'react-advanced',
    title: 'Advanced React Development',
    description: 'Master advanced patterns and performance optimizations in React applications.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    category: 'Web Development',
    duration: '30 hours',
    students: 6723,
    certificationPartner: 'Meta',
  },
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Fundamentals',
    description: 'Establish a strong foundation in cybersecurity concepts, threat identification, and protective measures.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    category: 'Security',
    duration: '35 hours',
    students: 9342,
    certificationPartner: 'CompTIA',
  },
  {
    id: 'data-science-python',
    title: 'Data Science with Python',
    description: 'Analyze and interpret complex data using Python and its powerful libraries.',
    image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070&auto=format&fit=crop',
    category: 'Data Science',
    duration: '45 hours',
    students: 7629,
    certificationPartner: 'IBM',
  },
  {
    id: 'kubernetes-certification',
    title: 'Certified Kubernetes Administrator',
    description: 'Master Kubernetes cluster deployment, maintenance, and troubleshooting.',
    image: 'https://images.unsplash.com/photo-1646627927952-65824749ef49?q=80&w=2071&auto=format&fit=crop',
    category: 'DevOps',
    duration: '38 hours',
    students: 4231,
    certificationPartner: 'CNCF',
    isNew: true,
  },
  {
    id: 'machine-learning-certification',
    title: 'Machine Learning Engineer Certification',
    description: 'Build and deploy machine learning models for real-world applications.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop',
    category: 'AI & Machine Learning',
    duration: '50 hours',
    students: 5827,
    certificationPartner: 'TensorFlow',
  },
];

// Mock filter categories
const categories = ['All', 'Cloud', 'Web Development', 'Security', 'Data Science', 'DevOps', 'AI & Machine Learning'];
const certifications = ['All', 'Microsoft', 'Amazon', 'Google', 'CompTIA', 'Meta', 'IBM', 'CNCF', 'TensorFlow'];
const durations = ['All', 'Under 30 hours', '30-40 hours', 'Over 40 hours'];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCertification, setSelectedCertification] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // Filter courses based on search and filters
  const filteredCourses = catalogCourses.filter((course) => {
    // Search query filter
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !course.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== 'All' && course.category !== selectedCategory) {
      return false;
    }
    
    // Certification filter
    if (selectedCertification !== 'All' && course.certificationPartner !== selectedCertification) {
      return false;
    }
    
    // Duration filter
    if (selectedDuration !== 'All') {
      const hours = parseInt(course.duration);
      if (selectedDuration === 'Under 30 hours' && hours >= 30) {
        return false;
      } else if (selectedDuration === '30-40 hours' && (hours < 30 || hours > 40)) {
        return false;
      } else if (selectedDuration === 'Over 40 hours' && hours <= 40) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Certification Courses</h1>
            <p className="text-muted-foreground max-w-3xl">
              Browse our comprehensive catalog of industry-recognized certification courses. Filter by category, certification provider, or search for specific skills.
            </p>
          </div>
          
          {/* Search and filter section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search courses..."
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
                Filters
              </button>
            </div>
            
            {/* Desktop filters */}
            <div className="hidden md:flex flex-wrap gap-6 mb-6">
              <div>
                <div className="font-medium text-sm mb-2">Category</div>
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
                <div className="font-medium text-sm mb-2">Certification Provider</div>
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
                <div className="font-medium text-sm mb-2">Duration</div>
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
            
            {/* Mobile filters (collapsible) */}
            <div className={cn(
              'md:hidden space-y-6 bg-card p-4 rounded-lg border mb-6',
              showFilters ? 'block' : 'hidden'
            )}>
              <div>
                <div className="font-medium text-sm mb-2">Category</div>
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
                <div className="font-medium text-sm mb-2">Certification Provider</div>
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
                <div className="font-medium text-sm mb-2">Duration</div>
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
              <span>Showing {filteredCourses.length} of {catalogCourses.length} courses</span>
            </div>
          </div>
          
          {/* Courses grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  {...course}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <div className="mb-4 p-3 rounded-full bg-secondary/50 text-muted-foreground">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">No courses found</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                We couldn't find any courses matching your search criteria. Try adjusting your filters or search query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedCertification('All');
                  setSelectedDuration('All');
                }}
                className="text-primary font-medium hover:underline"
              >
                Clear all filters
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
