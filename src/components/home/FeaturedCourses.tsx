
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseCard from '../ui/CourseCard';
import AnimatedButton from '../ui/AnimatedButton';

// Mock data for featured courses
const featuredCourses = [
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Azure Fundamentals',
    description: 'Master the fundamentals of cloud services and Azure implementation, focusing on core services and security concepts.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop',
    category: 'Cloud',
    duration: '25 hours',
    students: 12453,
    certificationPartner: 'Microsoft',
    featured: true,
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
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">Featured Certifications</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our most popular courses, designed in collaboration with industry leaders to help you gain recognized credentials.
            </p>
          </div>
          <Link 
            to="/catalog" 
            className="group hidden md:inline-flex items-center text-sm font-medium text-primary mt-4 md:mt-0 hover:underline"
          >
            View all courses
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
          <AnimatedButton as={Link} to="/catalog" size="lg">
            Browse All Courses
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
