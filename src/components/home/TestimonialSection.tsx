
import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

// Mock data for testimonials
const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Cloud Architect',
    company: 'TechNova Systems',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    testimonial: 'The AWS certification course was incredibly practical. I applied what I learned immediately in my job, and within three months, I received a promotion.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Frontend Developer',
    company: 'PixelPerfect',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    testimonial: 'The React course helped me fill critical knowledge gaps. The course was precise, focused, and exactly what I needed without any fluff.',
    rating: 5
  },
  {
    id: '3',
    name: 'David Rodriguez',
    role: 'Security Specialist',
    company: 'SecureEdge',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    testimonial: 'The cybersecurity certification was challenging but extremely rewarding. It gave me the confidence to lead security initiatives at my company.',
    rating: 4
  },
  {
    id: '4',
    name: 'Lisa Wong',
    role: 'Data Scientist',
    company: 'DataDrive Analytics',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    testimonial: 'The data science certification helped me transition from analytics to machine learning. The hands-on projects were particularly valuable.',
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from professionals who transformed their careers with our certification courses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              {...testimonial}
              className="h-full"
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png" alt="Microsoft Azure" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png" alt="Google Cloud" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Oracle_logo.svg/1200px-Oracle_logo.svg.png" alt="Oracle" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Our certification courses are recognized by leading technology companies worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
