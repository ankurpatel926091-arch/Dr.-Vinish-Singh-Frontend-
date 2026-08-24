import React, { useState, useEffect, useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  Maximize2,
  Play,
  X,
  Calendar,
  ArrowRight,
  Video,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

const categories = [
  "All",
  "Photos",
  "Videos",
  "Surgical Setup",
  "Doctor & Care",
  "Clinic Facilities",
];

const SkeletonCard = () => (
  <div className="bg-slate-800/80 rounded-3xl overflow-hidden shadow-sm border border-slate-700/50 h-80 sm:h-96 flex flex-col justify-end relative animate-pulse">
    <div className="absolute inset-0 bg-slate-700/50" />
    <div className="absolute top-4 left-4 w-28 h-6 rounded-full bg-slate-600/70" />
    <div className="relative z-10 p-4 space-y-2 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent">
      <div className="w-4/5 h-4 rounded bg-slate-600/80" />
      <div className="w-1/2 h-3 rounded bg-slate-600/60" />
    </div>
  </div>
);

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [galleryList, setGalleryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [brokenMedia, setBrokenMedia] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  // Fetch active gallery items from backend API
  const fetchPublicGallery = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const getApiUrls = () => {
        const urls = [];
        if (import.meta.env.VITE_API_BASE_URL) {
          urls.push(import.meta.env.VITE_API_BASE_URL);
        }
        if (
          typeof window !== "undefined" &&
          (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
        ) {
          urls.push("http://localhost:5000/api");
        }
        urls.push("https://dr-vinish-backend.onrender.com/api");
        return urls;
      };

      const apiUrls = getApiUrls();
      const isOnlineProd =
        typeof window !== "undefined" &&
        window.location.hostname !== "localhost" &&
        window.location.hostname !== "127.0.0.1";

      let fetchedData = null;

      for (const baseUrl of apiUrls) {
        try {
          const res = await fetch(`${baseUrl}/gallery/public`);
          if (res.ok) {
            const json = await res.json();
            if (json && json.success && Array.isArray(json.data)) {
              fetchedData = json.data.map((item) => {
                let mediaUrl = item.url;
                if (typeof mediaUrl === "string") {
                  if (
                    mediaUrl.includes("localhost:5000") ||
                    mediaUrl.includes("127.0.0.1:5000")
                  ) {
                    if (isOnlineProd) {
                      const cleanPath = mediaUrl.replace(
                        /^https?:\/\/(localhost|127\.0\.0\.1):5000/,
                        ""
                      );
                      const pathWithSlash = cleanPath.startsWith("/")
                        ? cleanPath
                        : `/${cleanPath}`;
                      mediaUrl = `https://dr-vinish-backend.onrender.com${pathWithSlash}`;
                    }
                  } else if (
                    mediaUrl.startsWith("/uploads/") ||
                    mediaUrl.startsWith("uploads/")
                  ) {
                    const cleanPath = mediaUrl.startsWith("/") ? mediaUrl : `/${mediaUrl}`;
                    mediaUrl = `${baseUrl.replace(/\/api$/, "")}${cleanPath}`;
                  } else if (mediaUrl.startsWith("http://")) {
                    if (isOnlineProd) {
                      mediaUrl = mediaUrl.replace("http://", "https://");
                    }
                  }
                }
                return {
                  id: item._id || item.id,
                  type: item.type || "photo",
                  title: item.title,
                  category: item.category || "Photos",
                  media: mediaUrl,
                  tag: item.tag || item.category,
                };
              });
              break;
            }
          }
        } catch (err) {
          // Try next URL fallback
        }
      }

      if (fetchedData !== null) {
        setGalleryList(fetchedData);
      } else {
        setError("Unable to load gallery. Please try again.");
      }
    } catch (err) {
      console.error("Public Gallery API Error:", err.message);
      setError("Unable to load gallery. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPublicGallery();
  }, [fetchPublicGallery]);

  const filteredItems = useMemo(() => {
    return galleryList.filter((item) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "Photos") return item.type === "photo" || item.category === "Photos";
      if (activeCategory === "Videos") return item.type === "video" || item.category === "Videos";
      return item.category === activeCategory;
    });
  }, [galleryList, activeCategory]);

  const getCategoryCount = useCallback(
    (catName) => {
      if (catName === "All") return galleryList.length;
      if (catName === "Photos")
        return galleryList.filter(
          (item) => item.type === "photo" || item.category === "Photos"
        ).length;
      if (catName === "Videos")
        return galleryList.filter(
          (item) => item.type === "video" || item.category === "Videos"
        ).length;
      return galleryList.filter((item) => item.category === catName).length;
    },
    [galleryList]
  );

  const handleMediaError = (id) => {
    setBrokenMedia((prev) => ({ ...prev, [id]: true }));
  };

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setZoomLevel(1);
    setRotation(0);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    setZoomLevel(1);
    setRotation(0);
  }, []);

  const nextMedia = useCallback(
    (e) => {
      e?.stopPropagation();
      if (filteredItems.length === 0) return;
      setSelectedIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
      setZoomLevel(1);
      setRotation(0);
    },
    [filteredItems.length]
  );

  const prevMedia = useCallback(
    (e) => {
      e?.stopPropagation();
      if (filteredItems.length === 0) return;
      setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
      setZoomLevel(1);
      setRotation(0);
    },
    [filteredItems.length]
  );

  const handleZoomIn = (e) => {
    e?.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e) => {
    e?.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleRotate = (e) => {
    e?.stopPropagation();
    setRotation((prev) => (prev + 90) % 360);
  };

  // Keyboard Arrow Keys Navigation & Escape to Close
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevMedia();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextMedia();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, prevMedia, nextMedia, closeLightbox]);

  const handleCardMouseEnter = (e, type) => {
    if (type === "video") {
      const video = e.currentTarget.querySelector("video");
      if (video) {
        video.play().catch(() => {});
      }
    }
  };

  const handleCardMouseLeave = (e, type) => {
    if (type === "video") {
      const video = e.currentTarget.querySelector("video");
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  const currentMediaItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section className="bg-slate-50/60 min-h-screen font-sans">
      {/* ================= HERO HEADER ================= */}
      <div className="relative bg-gradient-to-b from-[#103F7C] to-[#0d3364] text-white py-12 lg:py-16 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

        <ScrollReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-orange-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            <span>Infrastructure &amp; Clinical Care</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Clinic Photo &amp; Video Gallery
          </h1>

          <p className="mt-2 text-blue-100 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
            Explore state-of-the-art laser urology equipment, modern surgical setup, patient care facilities, and procedure videos in Lucknow.
          </p>
        </ScrollReveal>
      </div>

      {/* ================= MAIN GALLERY SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        {/* Category Filter Tabs */}
        <ScrollReveal variant="fade-up" delay={100} className="flex items-center justify-center sm:justify-start flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#103F7C] text-white shadow-md shadow-blue-900/20"
                    : "bg-white text-slate-600 hover:text-[#103F7C] hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {cat === "Photos" && <ImageIcon size={13} />}
                {cat === "Videos" && <Video size={13} />}
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 text-[10px] rounded-full font-bold ${
                    activeCategory === cat ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Loading State: Skeleton Grid */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="py-16 text-center bg-white rounded-3xl border border-rose-200/80 shadow-xs max-w-md mx-auto my-8 p-6">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-3">
              <AlertCircle size={24} />
            </div>
            <h3 className="text-base font-bold text-slate-800">Unable to load gallery</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">{error}</p>
            <button
              type="button"
              onClick={fetchPublicGallery}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#103F7C] hover:bg-blue-900 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <RefreshCw size={14} />
              <span>Retry Again</span>
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredItems.length === 0 && (
          <div className="py-16 text-center bg-white rounded-3xl border border-slate-200 shadow-xs max-w-md mx-auto my-8 p-6">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#103F7C] flex items-center justify-center mx-auto mb-3">
              <ImageIcon size={24} />
            </div>
            <h3 className="text-base font-bold text-slate-800">No gallery items available</h3>
            <p className="text-xs text-slate-500 mt-1">There are no photos or videos in this category right now.</p>
          </div>
        )}

        {/* Actual Gallery Media Grid */}
        {!loading && !error && filteredItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredItems.map((item, idx) => (
              <ScrollReveal key={item.id} variant="scale-up" delay={idx * 60} className="h-full">
                <div
                  onClick={() => openLightbox(idx)}
                  onMouseEnter={(e) => handleCardMouseEnter(e, item.type)}
                  onMouseLeave={(e) => handleCardMouseLeave(e, item.type)}
                  className="group relative cursor-pointer bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/90 hover:border-orange-400/50 transition-all duration-500 hover:-translate-y-1.5 h-80 sm:h-96 flex flex-col justify-end"
                >
                  {/* Media Display */}
                  {item.type === "photo" ? (
                    brokenMedia[item.id] ? (
                      <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                        <ImageIcon size={32} className="mb-2 opacity-50 text-slate-500" />
                        <span className="text-xs font-semibold text-slate-400">Media unavailable</span>
                      </div>
                    ) : (
                      <img
                        src={item.media}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                        onError={() => handleMediaError(item.id)}
                      />
                    )
                  ) : (
                    <div className="absolute inset-0 w-full h-full">
                      <video
                        src={item.media}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover object-[center_28%] opacity-90 group-hover:opacity-100 transition-all duration-300"
                        onError={() => handleMediaError(item.id)}
                      />
                    </div>
                  )}

                  {/* Floating Action Badge */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    {item.type === "photo" ? (
                      <div className="w-12 h-12 rounded-full bg-white/95 text-[#103F7C] shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 border border-white/60">
                        <Maximize2 size={20} className="text-[#103F7C]" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-orange-500/95 text-white flex items-center justify-center shadow-xl border-2 border-white/60 group-hover:scale-110 transition-all duration-300">
                        <Play size={24} className="ml-1 fill-white" />
                      </div>
                    )}
                  </div>

                  {/* Overlay Text */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 flex items-end justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-bold text-xs sm:text-sm leading-snug truncate drop-shadow-sm">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-orange-300 font-semibold uppercase tracking-wider mt-0.5 flex items-center gap-1">
                        {item.type === "video" ? (
                          <Video size={11} className="text-orange-400" />
                        ) : (
                          <ImageIcon size={11} className="text-blue-300" />
                        )}
                        <span>{item.category}</span>
                      </p>
                    </div>
                    <span className="text-[9.5px] font-bold text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20 shrink-0 uppercase tracking-wider">
                      {item.tag || item.category}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* ================= LIGHTBOX OVERLAY MODAL ================= */}
      {currentMediaItem && (
        <div
          className="fixed inset-0 z-50 bg-[#12131e]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Floating Control Toolbar */}
          <div
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 text-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {currentMediaItem.type === "photo" && (
              <>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  title="Zoom In"
                  className="w-8 h-8 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  title="Zoom Out"
                  className="w-8 h-8 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleRotate}
                  title="Rotate"
                  className="w-8 h-8 rounded-xl hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <RotateCw size={15} />
                </button>
                <div className="w-px h-5 bg-white/20 mx-0.5" />
              </>
            )}

            <button
              type="button"
              onClick={closeLightbox}
              title="Close (Esc)"
              className="w-8 h-8 rounded-xl hover:bg-red-500/80 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevMedia}
            aria-label="Previous (Left Arrow)"
            title="Previous (Left Arrow Key)"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-300 border border-white/15 z-50 shadow-lg hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextMedia}
            aria-label="Next (Right Arrow)"
            title="Next (Right Arrow Key)"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-300 border border-white/15 z-50 shadow-lg hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>

          {/* Modal Centered Media Container */}
          <div
            className="relative w-full max-w-[577px] max-h-[75vh] sm:max-h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {currentMediaItem.type === "photo" ? (
              <img
                src={currentMediaItem.media}
                alt={currentMediaItem.title}
                className="w-auto h-auto max-w-full max-h-[75vh] sm:max-h-[85vh] object-contain object-center rounded-2xl shadow-2xl transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                }}
              />
            ) : (
              <video
                src={currentMediaItem.media}
                controls
                autoPlay
                className="w-auto h-auto max-w-full max-h-[75vh] sm:max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              />
            )}
          </div>
        </div>
      )}

      {/* Minimal CTA Banner */}
      <ScrollReveal variant="fade-up" delay={200} className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#103F7C] to-blue-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Visit Our Clinic in Alambagh</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">
              Equipped with modern laser technology &amp; patient-focused medical care.
            </p>
          </div>
          <NavLink
            to="/#book-appointment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold shadow-md transition-transform hover:scale-105 active:scale-95 shrink-0"
          >
            <Calendar size={16} />
            <span>Book Appointment</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </ScrollReveal>
    </section>
  );
}
