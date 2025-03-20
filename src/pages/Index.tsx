
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Categories from '@/components/home/Categories';
import TestimonialSection from '@/components/home/TestimonialSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
      {/* Éléments d'arrière-plan décoratifs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-2/3 w-[700px] h-[700px] bg-purple-200/20 rounded-full blur-3xl"></div>
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
