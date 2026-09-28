import React from 'react'
import {
  Sparkles, Search, Heart, ShoppingBag, Menu, X, Compass, Users, Film,
  Calendar, Store, Gamepad2, Clapperboard, Tv, Music2, BookOpen, BookMarked,
  ArrowUpRight, Play, MapPin, ChevronDown, Star, Users2, Boxes, Radio, Mail,
} from 'lucide-react';

const Footer = () => {
  return (
 <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 shadow-lg shadow-red-600/20">
            <Sparkles className="h-5 w-5 fill-white text-white" />
          </div>

          <div>
            <h2 className="text-xl font-black tracking-tight text-white">
              Fandom<span className="text-red-600">Verse</span>
            </h2>

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              Your fandom universe
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
          Discover characters, stories, trailers, events and everything
          you love across the worlds of fandom.
        </p>

        {/* Social / Status */}
        <div className="mt-6 flex items-center gap-3">

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs text-white/50">
              Fandom is alive
            </span>
          </div>

        </div>
      </div>


      {/* Discover */}
      <div>
        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
          Discover
        </h3>

        <div className="space-y-3">

          <a
            href="/"
            className="group flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <span>Home</span>
            <span className="translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </a>

          <a
            href="/explore"
            className="group flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <span>Explore</span>
            <span className="translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </a>

          <a
            href="/trailers"
            className="group flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <span>Trailers</span>
            <span className="translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </a>

          <a
            href="/merchandise"
            className="group flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <span>Merch Store</span>
            <span className="translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </a>

        </div>
      </div>


      {/* Fandom */}
      <div>
        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
          Fandom
        </h3>

        <div className="space-y-3">

          <a
            href="/#characters"
            className="group flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <span>Characters</span>
            <span className="translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </a>

          <a
            href="/#events"
            className="group flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <span>Events</span>
            <span className="translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </a>

          <a
            href="/bookmarks"
            className="group flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <span>Bookmarks</span>
            <span className="translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </a>

          <a
            href="/category/anime"
            className="group flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <span>Categories</span>
            <span className="translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </a>

        </div>
      </div>


      {/* Categories */}
      <div>
        <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
          Categories
        </h3>

        <div className="grid grid-cols-2 gap-y-3">

          <a
            href="/category/anime"
            className="text-sm text-white/40 transition hover:text-red-500"
          >
            Anime
          </a>

          <a
            href="/category/gaming"
            className="text-sm text-white/40 transition hover:text-blue-500"
          >
            Gaming
          </a>

          <a
            href="/category/movies"
            className="text-sm text-white/40 transition hover:text-amber-500"
          >
            Movies
          </a>

          <a
            href="/category/tv-shows"
            className="text-sm text-white/40 transition hover:text-emerald-500"
          >
            TV Shows
          </a>

          <a
            href="/category/k-pop"
            className="text-sm text-white/40 transition hover:text-pink-500"
          >
            K-Pop
          </a>

          <a
            href="/category/comics"
            className="text-sm text-white/40 transition hover:text-orange-500"
          >
            Comics
          </a>

          <a
            href="/category/manga"
            className="text-sm text-white/40 transition hover:text-slate-300"
          >
            Manga
          </a>

        </div>
      </div>

    </div>

  )
}

export default Footer