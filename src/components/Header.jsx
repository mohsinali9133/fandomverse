import React, { useState } from 'react'
import {
  Sparkles, Search, Heart, ShoppingBag, Menu, X, Compass, Users, Film,
  Calendar, Store, Gamepad2, Clapperboard, Tv, Music2, BookOpen, BookMarked,
  ArrowUpRight, Play, MapPin, ChevronDown, Star, Users2, Boxes, Radio, Mail,
} from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);

  const navLinks = [
    { name: 'Explore', href: '#explore', icon: Compass },
    { name: 'Characters', href: '#characters', icon: Users },
    { name: 'Trailers', href: '#trailers', icon: Film },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Merch Store', href: '#merch', icon: Store },
  ];

  // Categories Dropdown Data
  const categories = [
    { name: 'Anime', href: '#anime', icon: Tv },
    { name: 'Gaming', href: '#gaming', icon: Gamepad2 },
    { name: 'Movies', href: '#movies', icon: Clapperboard },
    { name: 'TV Shows', href: '#tv', icon: Play },
    { name: 'K-Pop', href: '#kpop', icon: Music2 },
    { name: 'Comics', href: '#comics', icon: BookOpen },
    { name: 'Manga', href: '#manga', icon: BookMarked },
  ];

  return (
    <header className="sticky top-0 z-40 max-w-7xl mx-auto px-4 sm:px-8 py-4">
      <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-lg sm:px-7">
        
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center gap-2.5 text-xl font-black tracking-tight text-white">
          <div className="rounded-xl bg-red-600 p-1.5 shadow-md shadow-red-500/20">
            <Sparkles className="h-5 w-5 fill-white" />
          </div>
          <span>Fandom<span className="text-red-600">Verse</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm text-slate-100 xl:flex">
          
          {/* Categories Hover Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 transition hover:text-red-500 font-medium">
              Categories <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-48 rounded-2xl border border-white/10 bg-black/90 p-2 backdrop-blur-xl opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible shadow-xl shadow-black/50">
              {categories.map((c) => (
                <a key={c.name} href={c.href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-red-500">
                  <c.icon className="h-4 w-4" />
                  {c.name}
                </a>
              ))}
            </div>
          </div>

          {navLinks.map((l) => (
            <a key={l.name} href={l.href} className="transition hover:text-red-500 font-medium">{l.name}</a>
          ))}
        </nav>

        {/* Desktop Icons & Login Button */}
        <div className="hidden items-center gap-1.5 sm:flex">
          <button aria-label="Search" className="rounded-full p-2.5 text-white/80 transition hover:bg-white/10 hover:text-white">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Favorites" className="rounded-full p-2.5 text-white/80 transition hover:bg-white/10 hover:text-white">
            <Heart className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="rounded-full p-2.5 text-white/80 transition hover:bg-white/10 hover:text-white">
            <ShoppingBag className="h-5 w-5" />
          </button>
          
          {/* Login Button Add kiya gaya hai */}
          <button className="ml-2 cursor-pointer  rounded-full bg-red-600 px-6 py-2 text-sm font-bold text-white transition-all hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-full p-2 text-white xl:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="mt-3 space-y-1 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-lg xl:hidden max-h-[80vh] overflow-y-auto custom-scrollbar">
          
          {/* Mobile Categories Accordion */}
          <div>
            <button 
              onClick={() => setMobileCatsOpen(!mobileCatsOpen)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <Boxes className="h-4 w-4 text-red-500" /> Categories
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileCatsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileCatsOpen && (
              <div className="mt-1 space-y-1 pl-4 border-l border-white/10 ml-5">
                {categories.map((c) => (
                  <a key={c.name} href={c.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-red-500">
                    <c.icon className="h-4 w-4" /> {c.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="my-2 h-px w-full bg-white/10" />

          {/* Normal Links */}
          {navLinks.map((l) => (
            <a key={l.name} href={l.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10">
              <l.icon className="h-4 w-4 text-red-500" /> {l.name}
            </a>
          ))}

          <div className="my-2 h-px w-full bg-white/10" />

          {/* Mobile Login Button */}
          <button className="mt-4 flex w-full items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-500">
            Login to Account
          </button>
        </div>
      )}
    </header>
  )
}

export default Header