
import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Experience from './components/Experience';
import BlogSection from './components/BlogSection';
import Testimonial from './components/Testimonialsection';
import FaqSection from './components/FaqSection';
import Footer  from './components/Footer';
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Expertise />
      <Works />
      <Experience />
      <BlogSection/>
      <Testimonial/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}

export default App;
