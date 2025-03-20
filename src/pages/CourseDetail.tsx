
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ChevronLeft, Clock, Users, Award, Book, CheckCircle2, Play, Globe, Download, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock course data (in a real app, this would be fetched from an API)
const coursesData = {
  'azure-fundamentals': {
    title: 'Microsoft Azure Fundamentals',
    description: 'Master the fundamentals of cloud services and Microsoft Azure implementation. This comprehensive course focuses on cloud concepts, core Azure services, security, privacy, compliance, and trust. Perfect for IT professionals beginning to work with cloud-based solutions and services.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop',
    category: 'Cloud',
    duration: '25 hours',
    students: 12453,
    certificationPartner: 'Microsoft',
    certificationCode: 'AZ-900',
    price: 199,
    isNew: true,
    highlights: [
      'Understand cloud concepts and models',
      'Learn core Azure services and solutions',
      'Master security, privacy, compliance, and trust',
      'Understand Azure pricing and support',
      'Prepare for the official AZ-900 certification exam'
    ],
    modules: [
      {
        title: 'Cloud Concepts',
        lessons: [
          'Introduction to Cloud Computing',
          'Cloud Service Models (IaaS, PaaS, SaaS)',
          'Public, Private, and Hybrid Cloud',
          'Cloud Benefits and Considerations'
        ]
      },
      {
        title: 'Core Azure Services',
        lessons: [
          'Azure Architecture and Components',
          'Compute Services (VMs, Containers, Functions)',
          'Storage Services and Solutions',
          'Networking and Content Delivery'
        ]
      },
      {
        title: 'Security & Compliance',
        lessons: [
          'Azure Identity Services',
          'Security Tools and Features',
          'Governance Methodologies',
          'Privacy, Compliance, and Data Protection'
        ]
      },
      {
        title: 'Azure Pricing & Support',
        lessons: [
          'Subscription Types and Management',
          'Cost Management and Service Level Agreements',
          'Service Lifecycle in Azure',
          'Support Options and Community Resources'
        ]
      },
      {
        title: 'Certification Preparation',
        lessons: [
          'Exam Structure and Format',
          'Study Strategies and Resources',
          'Practice Questions and Assessments',
          'Final Exam Preparation'
        ]
      }
    ],
    instructors: [
      {
        name: 'Jennifer Wilson',
        role: 'Azure Solutions Architect',
        bio: '15+ years experience in cloud architecture with Microsoft certification expertise',
        avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
      }
    ]
  },
  'aws-solutions-architect': {
    title: 'AWS Solutions Architect Associate',
    description: 'Learn how to design and deploy scalable, highly available systems on AWS infrastructure. This in-depth course covers the full spectrum of AWS services, focusing on best practices for architecture design, security, and optimization.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
    category: 'Cloud',
    duration: '40 hours',
    students: 8765,
    certificationPartner: 'Amazon',
    certificationCode: 'SAA-C03',
    price: 299,
    highlights: [
      'Design and deploy scalable AWS infrastructure',
      'Implement security controls and data protection',
      'Create automated and elastic architectures',
      'Choose appropriate AWS services for applications',
      'Optimize systems for cost-effectiveness and performance'
    ],
    modules: [
      {
        title: 'AWS Fundamentals',
        lessons: [
          'AWS Global Infrastructure',
          'AWS Account Setup and Management',
          'IAM and Account Security',
          'AWS Command Line Interface'
        ]
      },
      {
        title: 'Compute Services',
        lessons: [
          'EC2 and Instance Selection',
          'Auto Scaling and Elastic Load Balancing',
          'Containers on AWS (ECS and EKS)',
          'Serverless Computing with Lambda'
        ]
      },
      {
        title: 'Storage Solutions',
        lessons: [
          'S3 Storage Classes and Features',
          'EBS, EFS, and Storage Gateway',
          'Database Selection (RDS, DynamoDB, Redshift)',
          'Data Migration and Transfer Services'
        ]
      },
      {
        title: 'Networking',
        lessons: [
          'VPC Design and Implementation',
          'Routing, Security Groups, and NACLs',
          'Direct Connect and VPN Options',
          'Route 53 and DNS Management'
        ]
      },
      {
        title: 'Architecture Design',
        lessons: [
          'High Availability and Fault Tolerance',
          'Decoupling Mechanisms',
          'Cost Optimization Strategies',
          'Operational Excellence and Monitoring'
        ]
      }
    ],
    instructors: [
      {
        name: 'Robert Chen',
        role: 'AWS Certified Solutions Architect',
        bio: 'Cloud consultant with 10+ years experience implementing AWS solutions',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    ]
  }
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get course data based on the id parameter
  const course = id ? coursesData[id as keyof typeof coursesData] : null;
  
  // If course not found, display error message
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
                Back to catalog
              </Link>
            </div>
            
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
              <p className="text-muted-foreground mb-8">
                Sorry, we couldn't find the course you're looking for.
              </p>
              <AnimatedButton as={Link} to="/catalog">
                Browse All Courses
              </AnimatedButton>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              Back to catalog
            </Link>
          </div>
          
          {/* Course Header */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                  {course.category}
                </span>
                
                {course.isNew && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/90 text-white">
                    New
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
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-muted-foreground" />
                  <span>{course.certificationPartner} Certified</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Last updated 1 month ago</span>
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
                    <div className="text-3xl font-bold">${course.price}</div>
                    <div className="text-sm text-muted-foreground line-through">${course.price + 100}</div>
                  </div>
                  
                  <AnimatedButton className="w-full mb-3 justify-center">
                    Enroll Now
                  </AnimatedButton>
                  
                  <AnimatedButton variant="outline" className="w-full mb-6 justify-center">
                    Try Free Preview
                  </AnimatedButton>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span>Full Lifetime Access</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Download className="w-4 h-4 text-muted-foreground" />
                      <span>Downloadable Resources</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span>Certificate of Completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Course content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* What you'll learn */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
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
              
              {/* Course content */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Course Content</h2>
                <div className="space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border border-border/50 rounded-lg overflow-hidden">
                      <div className="bg-secondary/50 px-6 py-4 flex justify-between items-center">
                        <h3 className="font-medium">{module.title}</h3>
                        <span className="text-sm text-muted-foreground">{module.lessons.length} lessons</span>
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
              
              {/* Instructor */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Instructor</h2>
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
              {/* Requirements sidebar */}
              <div className="bg-card border border-border/50 rounded-lg p-6 shadow-subtle mb-6">
                <h3 className="font-medium text-lg mb-4">Requirements</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Basic understanding of cloud computing concepts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Familiarity with IT infrastructure and networking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-primary mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>No prior experience with {course.certificationPartner} services required</span>
                  </li>
                </ul>
              </div>
              
              {/* Certification details */}
              <div className="bg-card border border-border/50 rounded-lg p-6 shadow-subtle">
                <h3 className="font-medium text-lg mb-4">Certification Details</h3>
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{course.certificationCode}</div>
                    <div className="text-sm text-muted-foreground">
                      Official {course.certificationPartner} Certification
                    </div>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  Upon completion, you'll be prepared to take the official {course.certificationCode} certification exam and add this credential to your professional profile.
                </p>
                <a 
                  href="#" 
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Learn more about this certification →
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
