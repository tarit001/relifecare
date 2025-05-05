import React from 'react';

const Patient_Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('https://www.tgmch.ac.in/assets/img/slider/2-opd.jpg')] bg-cover bg-center relative pt-24">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
          Comprehensive Healthcare at Your Fingertips
        </h1>
        <p className="text-xl mb-8 font-light">Experience compassionate care with modern facilities.</p>
        <a
          href="/explore-us"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition shadow-md"
        >
          Get Started <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </section>
  );
};

export default Patient_Hero;
