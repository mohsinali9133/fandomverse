import React from 'react';
import { Sparkles, Gamepad2, Clapperboard, Tv, Music2, BookOpen, BookMarked, ArrowUpRight } from 'lucide-react';
import Paragraph from './paragraph';

const CATEGORIES = [
  { name: 'Anime', tagline: 'Stories beyond the screen', icon: Sparkles, image: 'images/1.jpg' },
  { name: 'Gaming', tagline: 'Press start on discovery', icon: Gamepad2, image: 'images/2.jpg' },
  { name: 'Movies', tagline: 'Every frame has a story', icon: Clapperboard,  image: 'images/3.jpg' },
  { name: 'TV Shows', tagline: 'Your next obsession', icon: Tv,  image: 'images/4.jpg' },
  { name: 'K-Pop', tagline: 'Rhythm, visuals, fandom', icon: Music2, image: 'images/5.jpg' },
  { name: 'Comics', tagline: 'Panels packed with power', icon: BookOpen,  image: 'images/6.jpg' },
  { name: 'Manga', tagline: 'Turn the next page', icon: BookMarked,  image: 'images/7.jpg' },
];

// 1. SECTION INTRO COMPONENT (Ye missing hone ki wajah se crash ho raha tha)
function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="mb-12 f2 flex items-center flex-col text-center">
      <span className="text-[15px] f2 uppercase tracking-widest text-red-500">{eyebrow}</span>
      <h2 className="mt-2 md:text-[6vw] f1 uppercase tracking-tight text-white sm:text-5xl">{title}</h2>
      <Paragraph p={description}/>
    </div>
  );
}

// 2. MAIN COMPONENT
export default function ExploreSection() {
  return (
    <section id="explore" className="mx-auto f2 max-w-7xl px-4 py-20 sm:px-8">
      <SectionIntro
        eyebrow="Seven worlds, one portal"
        title="Pick your universe."
        description="Every hub ships with its own stories, characters, events and merch."
      />
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Featured Card */}
        <a 
          href="#" 
          className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 p-6 sm:min-h-[520px]"
        >
          <img 
            src={CATEGORIES[0].image} 
            alt={CATEGORIES[0].name}
            className="absolute inset-0  w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>

            <div className="relative rounded-2xl bg-black/40 p-5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 group-hover:bg-black/50 group-hover:border-white/20">
              <h3 className="text-3xl  uppercase tracking-tight text-white sm:text-4xl">
                {CATEGORIES[0].name}
              </h3>
              <p className="mt-1 max-w-xs text-sm text-white/80">
                {CATEGORIES[0].tagline}
              </p>
            </div>
          </div>

          <ArrowUpRight className="absolute right-5 top-5 z-10 h-5 w-5 text-white/70 opacity-0 transition group-hover:opacity-100" />
        </a>

        {/* Remaining Grid Cards */}
        <div className="grid grid-cols-2 gap-4 sm:col-span-2 sm:grid-rows-3">
          {CATEGORIES.slice(1).map((c) => {
            const IconComponent = c.icon;
            return (
              <a 
                key={c.name} 
                href="#" 
                className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-white/10 p-4"
              >
                <img 
                  src={c.image} 
                  alt={c.name}
                  className="absolute inset-0 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/20" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>

                  <div className="rounded-xl bg-black/40 p-3 backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:bg-black/50">
                    <h3 className="text-base  uppercase tracking-tight text-white">
                      {c.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/80 line-clamp-1">
                      {c.tagline}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}