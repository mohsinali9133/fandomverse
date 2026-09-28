import React from 'react'
const CATEGORIES = [
  { name: 'Anime', tagline: 'Stories beyond the screen', icon: Sparkles, from: 'from-red-600', to: 'to-rose-900' },
  { name: 'Gaming', tagline: 'Press start on discovery', icon: Gamepad2, from: 'from-blue-600', to: 'to-slate-900' },
  { name: 'Movies', tagline: 'Every frame has a story', icon: Clapperboard, from: 'from-amber-600', to: 'to-slate-900' },
  { name: 'TV Shows', tagline: 'Your next obsession', icon: Tv, from: 'from-emerald-600', to: 'to-slate-900' },
  { name: 'K-Pop', tagline: 'Rhythm, visuals, fandom', icon: Music2, from: 'from-pink-600', to: 'to-slate-900' },
  { name: 'Comics', tagline: 'Panels packed with power', icon: BookOpen, from: 'from-orange-600', to: 'to-slate-900' },
  { name: 'Manga', tagline: 'Turn the next page', icon: BookMarked, from: 'from-slate-600', to: 'to-slate-900' },
];
import {
  Sparkles, Search, Heart, ShoppingBag, Menu, X, Compass, Users, Film,
  Calendar, Store, Gamepad2, Clapperboard, Tv, Music2, BookOpen, BookMarked,
  ArrowUpRight, Play, MapPin, ChevronDown, Star, Users2, Boxes, Radio, Mail,
} from 'lucide-react';

const SlideAnim = () => {
  return (
      <div className="relative overflow-hidden border-y border-white/10 bg-white/[.02] py-4">

  <style>{`
    @keyframes fv-marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `}</style>

  {/* Left Fade */}
  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050505] to-transparent" />

  {/* Right Fade */}
  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050505] to-transparent" />

  <div
    className="flex w-max gap-4 whitespace-nowrap"
    style={{
      animation: 'fv-marquee 25s linear infinite',
    }}
  >

    {[...CATEGORIES, ...CATEGORIES].map((c, i) => {

      const Icon = c.icon;

      return (
        <div
          key={i}
          className="group cursor-pointer relative flex w-[290px] items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[.08]"
        >

          {/* Glow */}
          <div
            className={`absolute -left-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br ${c.from} ${c.to} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-50`}
          />

          {/* Icon */}
          <div
            className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${c.from} ${c.to} shadow-lg`}
          >
            <Icon
              size={21}
              strokeWidth={1.8}
              className="text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
          </div>

          {/* Text */}
          <div className="relative min-w-0">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              {c.name}
            </h3>

            <p className="mt-1 text-[10px] tracking-wide text-white/40">
              {c.tagline}
            </p>
          </div>

          {/* Small Arrow */}
          <span className="absolute right-3 top-3 text-xs text-white/20 transition-all duration-300 group-hover:right-2 group-hover:text-white/70">
            ↗
          </span>

        </div>
      );
    })}

  </div>
</div>
  )
}

export default SlideAnim