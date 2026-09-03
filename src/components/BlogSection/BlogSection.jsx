import React, { useState, useEffect, useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  User,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { fetchPublicBlogs, getInitialBlogs } from "../../api/blogApi";

export default function BlogSection() {
  const [blogsList, setBlogsList] = useState(() => getInitialBlogs());
  const [isLoading, setIsLoading] = useState(() => blogsList.length === 0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadData = () => {
      fetchPublicBlogs().then((data) => {
        if (isMounted) {
          if (Array.isArray(data)) {
            setBlogsList(data);
          }
          setIsLoading(false);
        }
      });
    };

    loadData();
    window.addEventListener("storage", loadData);
    window.addEventListener("focus", loadData);

    return () => {
      isMounted = false;
      window.removeEventListener("storage", loadData);
      window.removeEventListener("focus", loadData);
    };
  }, []);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(blogsList.length / 3)), [blogsList.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Automatic slide interval every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, totalPages]);

  // Get current 3 visible blogs based on index
  const visibleBlogs = useMemo(
    () => blogsList.slice(currentIndex * 3, currentIndex * 3 + 3),
    [blogsList, currentIndex]
  );

  return (
    <section
      className="py-12 lg:py-16 bg-slate-50/70 overflow-hidden font-sans border-t border-slate-200/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ================= CENTERED SECTION HEADER ================= */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
            <BookOpen size={14} className="text-orange-500" />
            <span>UROLOGY INSIGHTS & RESOURCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
           Expert Articles for Better Urological Health
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Explore specialist-led insights on kidney stone prevention, prostate health, urinary conditions, male wellness, advanced treatments, and everyday urological care from Dr. Vinish Kumar Singh.
          </p>

          {/* Centered Navigation Buttons (Only if multiple pages exist) */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Articles"
                className="w-10 h-10 rounded-2xl bg-white hover:bg-[#103F7C] hover:text-white text-slate-700 border border-slate-200/90 shadow-2xs flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Articles"
                className="w-10 h-10 rounded-2xl bg-white hover:bg-[#103F7C] hover:text-white text-slate-700 border border-slate-200/90 shadow-2xs flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </ScrollReveal>

        {/* ================= 3-CARDS CAROUSEL GRID ================= */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 text-slate-400">
            <div className="w-8 h-8 border-3 border-orange-500 border-t-transparent rounded-full animate-spin mb-2" />
            <p className="text-xs font-semibold">Loading medical insights...</p>
          </div>
        ) : blogsList.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200/80 p-8 max-w-lg mx-auto shadow-2xs">
            <BookOpen className="w-10 h-10 text-orange-400 mx-auto mb-3 opacity-80" />
            <h3 className="font-extrabold text-slate-800 text-base">No Published Articles Available</h3>
            <p className="text-xs text-slate-500 mt-1">Check back soon for new urology insights & resources.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-5 mb-8">
            {visibleBlogs.map((blog, index) => (
              <ScrollReveal
                key={blog.id}
                variant="scale-up"
                delay={index * 120}
                className="h-full"
              >
                <article
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Blog Image Container */}
                    <NavLink to={`/blog/${blog.slug}`} className="block relative h-56 sm:h-64 overflow-hidden bg-slate-100/90 p-2.5 flex items-center justify-center">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full h-full object-contain rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                    </NavLink>

                    {/* Article Content */}
                    <div className="p-6">
                      {/* Category Pill Tag */}
                      <div className="mb-2">
                        <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-100">
                          {blog.category}
                        </span>
                      </div>

                      {/* Meta info: Date & Read time */}
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-400 mb-3">
                        <span className="flex items-center gap-1.5 text-orange-600 font-bold">
                          <Calendar size={13} />
                          <span>{blog.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                          <Clock size={13} />
                          <span>{blog.readTime}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-[#103F7C] transition-colors mb-2.5 line-clamp-2">
                        <NavLink to={`/blog/${blog.slug}`}>
                          {blog.title}
                        </NavLink>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Author & Read Link */}
                  <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3 bg-white">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                        <User size={12} />
                      </div>
                      <span className="text-xs font-bold text-slate-700 truncate">
                        {blog.author}
                      </span>
                    </div>

                    <NavLink
                      to={`/blog/${blog.slug}`}
                      className="text-xs font-extrabold text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-1 shrink-0 group-hover:translate-x-0.5"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </NavLink>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* ================= CAROUSEL DOTS INDICATOR ================= */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#103F7C]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}