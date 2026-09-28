import React from 'react'
import Paragraph from './paragraph';


const CHARACTERS = [
  { name: 'Kaia Ren', series: 'Kaia Chronicles', tag: 'Anime', initials: 'KR' },
  { name: 'Nova Byte', series: 'Nova Chronicles', tag: 'Gaming', initials: 'NB' },
  { name: 'Avery Cole', series: 'Avery Chronicles', tag: 'Movies', initials: 'AC' },
  { name: 'Maya Quinn', series: 'Maya Chronicles', tag: 'TV Shows', initials: 'MQ' },
  { name: 'Hana Moon', series: 'Hana Chronicles', tag: 'K-Pop', initials: 'HM' },
  { name: 'Vega Knight', series: 'Vega Chronicles', tag: 'Comics', initials: 'VK' },
];

function SectionIntro({ eyebrow, title, description, action }) {
  return (
    <div className="mb-12 f2 flex items-center flex-col text-center">
      <span className="text-[15px] f2 uppercase tracking-widest text-red-500">{eyebrow}</span>
      <h2 className="mt-2 md:text-[6vw] f1 uppercase tracking-tight text-white sm:text-5xl">{title}</h2>
      <Paragraph p={description}/>
      {action}
    </div>
  );
}
const Char = () => {
    
  return (
       <section id="characters" className="border-t border-white/5 bg-slate-900/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionIntro eyebrow="Faces of the multiverse" title="Characters fans are already talking about." />
        </div>
        <div className="no-scrollbar flex gap-5 overflow-x-auto px-4 pb-4 sm:px-8">
          {CHARACTERS.map((c, i) => (
            <div key={c.name} className={`group relative flex w-[190px] shrink-0 flex-col justify-end overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-5 sm:w-[220px] sm:aspect-[3/4] ${i % 2 === 1 ? 'sm:mt-8' : ''}`}>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-xl font-black">{c.initials}</div>
              <p className="text-[10px]    uppercase tracking-widest text-red-500">{c.tag}</p>
              <h4 className="mt-1 text-lg font-black text-white">{c.name}</h4>
              <p className="truncate text-xs text-white/45">{c.series}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Char