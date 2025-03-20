
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Categories from '@/components/home/Categories';
import TestimonialSection from '@/components/home/TestimonialSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      {/* Éléments d'arrière-plan décoratifs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/4 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
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
