import React, { useState } from 'react'
import { Play } from 'lucide-react';
import Paragraph from './Paragraph';

  
    const TRAILERS = [
  { title: 'Kaia Chronicles — First Look', status: 'upcoming', embed: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  { title: 'Nova Chronicles — Recently Released', status: 'recently released', embed: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  { title: 'Avery Chronicles — Teaser', status: 'upcoming', embed: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
];


function SectionIntro({ eyebrow, title, description, action }) {
  return (
    <div className="mb-12 f2 flex items-center flex-col text-center">
      <span className="text-[15px] f2 uppercase tracking-widest text-red-500">{eyebrow}</span>
      <h2 className="mt-2 md:text-[5.5vw] f1 uppercase tracking-tight text-white sm:text-5xl">{title}</h2>
      <Paragraph p={description}/>
      {action}
    </div>
  );
}


const TrailerSec = () => {

      const [activeTrailer, setActiveTrailer] = useState(TRAILERS[0]);
  
  return (
<section id="trailers" className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <SectionIntro eyebrow="Now screening" title={<>Trailers worth clearing your <br/> evening for.</>} />
        <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
            <div className="aspect-video">
              <iframe
                key={activeTrailer.title}
                className="h-full w-full border-0"
                src={activeTrailer.embed}
                title={activeTrailer.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between p-5">
              <h3 className="text-xl font-black text-white">{activeTrailer.title}</h3>
              <span className={`shrink-0 rounded-full px-3 py-1 text-[10px]    uppercase tracking-wider ${activeTrailer.status === 'upcoming' ? 'bg-blue-600/20 text-blue-300' : 'bg-red-600/20 text-red-300'}`}>
                {activeTrailer.status}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {TRAILERS.filter((t) => t.title !== activeTrailer.title).map((t) => (
              <button key={t.title} onClick={() => setActiveTrailer(t)} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-3 text-left transition hover:border-white/25 hover:bg-white/[.06]">
                <div className="relative flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-900">
                  <Play className="h-5 w-5 text-white/80" fill="currentColor" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm    text-white">{t.title}</p>
                  <p className="text-xs capitalize text-white/40">{t.status}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>  )
}

export default TrailerSec