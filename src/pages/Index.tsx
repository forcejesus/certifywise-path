
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Categories from '@/components/home/Categories';
import TestimonialSection from '@/components/home/TestimonialSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
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
