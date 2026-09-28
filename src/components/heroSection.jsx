import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import Paragraph from './Paragraph';

const HeroSection = () => {
  return (
    <section className="  w-full min-h-[90vh] flex flex-col items-center justify-start overflow-hidden px-4 pt-16 pb-12 text-center sm:px-8">
         <img src="images/blur.png" className='absolute -top-150 rotate-180' alt="" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full flex flex-col items-center justify-center z-0 select-none pointer-events-none whitespace-nowrap">
        {/* Yahan aapka f1 class hai jo thunder font apply karega */}
        <h1 className="f1 text-[13vw] sm:text-[11vw] lg:text-[10rem] xl:text-[12rem] uppercase leading-[0.9] tracking-tighter w-full">
          <span className="block bg-gradient-to-b from-white via-white/90 to-white/10 bg-clip-text text-transparent">
            One Universe
          </span>
          <span className="block mt-2 sm:mt-0 bg-gradient-to-b from-red-600  to-black/20 bg-clip-text text-transparent">
            Infinite Fandoms
          </span>
        </h1>
      </div>

      {/* 3. HERO IMAGE - UPAR (Z-10) - Overlaps the text */}
      <div className="relative z-10 w-full max-w-[85vw] sm:max-w-[60vw] md:max-w-[60vw] mx-auto mt-24 sm:mt-20 md:mt-40 flex justify-center pointer-events-none">
        
        {/* Image Drop Shadow to separate it from the text */}
        <img
          src="images/anime.png"
          className="relative w-full h-auto object-contain"
          alt="FandomVerse Hero"
        />

        {/* Bottom Fade to blend character legs naturally into the section below */}
        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      
      {/* 4. CONTENT & BUTTONS - SABSE AAGAY (Z-20) */}
      {/* -mt-8 (Negative margin) use kiya hai taki buttons thoda image ke fade hue hisse ke upar aayein */}
      <div className="relative z-20  flex flex-col items-center max-w-2xl mx-auto px-4">
        <div className="text-base sm:text-lg text-slate-300/90 font-medium leading-relaxed drop-shadow-md">
          <Paragraph p='Discover iconic characters, epic stories, unforgettable moments, and everything your favorite worlds have to offer.' />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#explore"
            className="group relative flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
          >
            Explore Categories
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#trailers"
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10 hover:scale-105"
          >
            <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-red-500" />
            Watch Trailers
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;