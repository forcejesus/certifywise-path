
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Categories from '@/components/home/Categories';
import TestimonialSection from '@/components/home/TestimonialSection';

const Index = () => {
  // Effet pour créer des animations d'entrée
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Éléments d'arrière-plan décoratifs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Effet de grille légère */}
        <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Blobs décoratifs avec animations */}
        <div className="blob-effect w-[600px] h-[600px] top-10 right-1/4 from-blue-200/30 to-blue-300/10"></div>
        <div className="blob-effect w-[500px] h-[500px] bottom-20 left-1/4 from-indigo-200/30 to-indigo-300/10"></div>
        <div className="blob-effect w-[700px] h-[700px] top-1/2 left-2/3 from-purple-200/20 to-purple-300/5"></div>
        
        {/* Gradient de fond */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 opacity-80"></div>
        
        {/* Points décoratifs */}
        <div className="absolute top-20 left-10 w-40 h-40 dot-pattern opacity-[0.15]"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 dot-pattern opacity-[0.15] rotate-12"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCourses />
        <Categories />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
