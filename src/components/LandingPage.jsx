import React, { useState } from 'react';
import {
  Sparkles, Search, Heart, ShoppingBag, Menu, X, Compass, Users, Film,
  Calendar, Store, Gamepad2, Clapperboard, Tv, Music2, BookOpen, BookMarked,
  ArrowUpRight, Play, MapPin, ChevronDown, Star, Users2, Boxes, Radio, Mail,
} from 'lucide-react';
import ExploreSection from './exploreSec';
import HeroSection from './heroSection';
import SlideAnim from './SlideAnim';
import Paragraph from './paragraph';
import Char from './Char';
import Header from './Header';
import Footer from './Footer';
import TrailerSec from './TrailerSec';




const EVENTS = [
  { date: '2026-10-10', title: 'Fandom Night', location: 'Neo City Hall', desc: 'Panels, showcases and fan activities across every hub.' },
  { date: '2026-10-24', title: 'Spotlight Showcase', location: 'Harbor Arts Center', desc: 'A curated look at the newest character and story drops.' },
  { date: '2026-11-17', title: 'Creator Meetup', location: 'Pixel Park', desc: 'Meet the people behind the galleries, trailers and lore.' },
];

const MERCH = [
  { name: 'Fandom Core Tee', price: '$18–$28', from: 'from-red-600', to: 'to-slate-900' },
  { name: 'Nebula Hoodie', price: '$42–$58', from: 'from-blue-600', to: 'to-slate-900' },
  { name: 'Pixel Badge Set', price: '$9–$14', from: 'from-amber-600', to: 'to-slate-900' },
  { name: 'Collector Art Card', price: '$6–$10', from: 'from-emerald-600', to: 'to-slate-900' },
];

const FAQ = [
  { q: 'What is FandomVerse?', a: 'A single portal that brings anime, gaming, movies, TV, K-Pop, comics and manga into one place.' },
  { q: 'Can I buy merchandise here?', a: 'You can add demo items to a temporary cart — checkout is intentionally not included yet.' },
  { q: 'How do I find something fast?', a: 'Use the search icon in the header, or jump straight to a category from the grid below.' },
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

export default function FandomVerseLandingPage() {
  const [openFaq, setOpenFaq] = useState(0);

 

  return (
    <div>
      {/* ================= HEADER ================= */}
      <Header/>

      {/* ================= HERO ================= */}
     <HeroSection/>
      {/* ================= TICKER ================= */}
   <SlideAnim/>

      {/* ================= UNIVERSES ================= */}
      <div>
      <ExploreSection/>
      </div>

      {/* ================= CHARACTERS ================= */}
   <Char/>

      {/* ================= TRAILERS ================= */}
      <TrailerSec/>

      {/* ================= EVENTS ================= */}
      <section id="events" className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <SectionIntro eyebrow="Mark the date"title={<>What's next on <br/> the calendar.</>} />
          <div className="relative ml-3 border-l border-white/10 pl-8">
            {EVENTS.map((ev, i) => (
              <div key={ev.title} className="relative pb-10 last:pb-0">
                <span className={`absolute -left-[41px] top-1 h-3 w-3 rounded-full ring-4 ring-slate-950 ${i % 2 === 0 ? 'bg-red-600' : 'bg-blue-600'}`} />
                <p className="text-xs    uppercase tracking-widest text-white/40">
                  {new Date(ev.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">{ev.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-white/45"><MapPin size={14} /> {ev.location}</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-white/5 bg-white/[.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 sm:px-8 md:grid-cols-4">
          {[
            { icon: Boxes, value: '7', label: 'Fandom hubs' },
            { icon: Users2, value: '35+', label: 'Original characters' },
            { icon: Radio, value: 'Live', label: 'Event calendar' },
            { icon: Star, value: '1,248+', label: 'Simulated visitors' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <s.icon className="h-5 w-5 shrink-0 text-red-500" />
              <div>
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs text-white/40">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MERCH ================= */}
      <section id="merch" className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <SectionIntro eyebrow="Collector corner"  title={<>Take the universe home <br /> with you.</>} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MERCH.map((item, i) => (
            <div key={item.name} className={`overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
              <div className={`bg-gradient-to-br ${item.from} ${item.to} ${i === 0 ? 'aspect-[4/3]' : 'aspect-square'}`} />
              <div className="flex items-center justify-between p-4">
                <p className="   text-white">{item.name}</p>
                <span className="shrink-0 rounded-full bg-red-600/15 px-3 py-1 text-xs    text-red-400">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-8">
        <SectionIntro eyebrow="Before you dive in" title="Questions people actually ask." />
        <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[.02]">
          {FAQ.map((f, i) => (
            <div key={f.q}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="   text-white">{f.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-white/40 transition ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && <p className="px-5 pb-5 text-sm leading-6 text-white/50">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-red-600/20 via-slate-950 to-blue-700/20 p-8 sm:p-14">
          <p className="text-xs    uppercase tracking-[0.3em] text-white/50">Join the multiverse</p>
          <h2 className="mt-4 max-w-2xl text-3xl   uppercase leading-tight text-white sm:text-5xl">
            Your next fandom is one click away.
          </h2>
          <form className="mt-7 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
              <input type="email" required placeholder="you@fandomverse.demo" className="w-full rounded-full border border-white/15 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-red-500/50" />
            </label>
            <button type="submit" className="rounded-full bg-white px-6 py-3 text-sm    text-slate-950 transition hover:bg-red-100">
              Notify me
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
     <footer className="relative overflow-hidden border-t border-white/10 bg-black pt-16">

  {/* Background Glow */}
  <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 pb-10 sm:px-8">

    {/* Main Footer */}
   <Footer/>
  

  </div>
</footer>
    </div>
  );
}