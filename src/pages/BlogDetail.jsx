import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Share2,
  PhoneCall,
  HelpCircle,
  Sparkles,
  Award,
  Hospital,
  ShieldCheck,
  Zap,
  Check,
} from "lucide-react";
import { fetchBlogBySlug, fetchPublicBlogs } from "../api/blogApi";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import doctorThumb from "../assets/images/img12.png";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [article, setArticle] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    let isMounted = true;

    setLoading(true);

    Promise.all([fetchBlogBySlug(slug), fetchPublicBlogs()]).then(([blogData, publicBlogs]) => {
      if (isMounted) {
        setArticle(blogData);
        setAllBlogs(publicBlogs || []);
        setLoading(false);

        if (blogData?.title) {
          document.title = `${blogData.title} | Dr. Vinish Kumar Singh`;
        }
      }
    });

    return () => { isMounted = false; };
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article?.title,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Filter 3 related articles excluding current
  const relatedArticles = useMemo(
    () => allBlogs.filter((b) => (b.slug !== article?.slug && b.id !== article?.id)).slice(0, 3),
    [allBlogs, article]
  );

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-slate-50 font-sans text-slate-500">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-sm font-bold tracking-wider uppercase text-slate-600">Loading Medical Article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-slate-50 font-sans">
        <BookOpen className="w-16 h-16 text-orange-500 mb-4 animate-bounce" />
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Article Not Found
        </h1>
        <p className="text-slate-600 mb-6 max-w-md">
          The requested medical article or insight page could not be located.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#103F7C] text-white font-bold hover:bg-blue-900 transition-colors shadow-md"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/70 min-h-screen py-6 sm:py-10 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ================= BREADCRUMBS & BACK NAV ================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link to="/" className="hover:text-[#103F7C] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-orange-600 font-bold">{article.category}</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-700 font-bold truncate max-w-[180px] sm:max-w-[320px]">
              {article.title}
            </span>
          </nav>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#103F7C] hover:text-blue-900 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs transition-all hover:shadow-sm hover:-translate-x-0.5"
          >
            <ArrowLeft size={16} />
            <span>Back to Insights</span>
          </Link>
        </div>

        {/* ================= PREMIUM ARTICLE HERO HEADER ================= */}
        <ScrollReveal variant="fade-up" className="bg-gradient-to-br from-[#103F7C] via-blue-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-8 relative overflow-hidden border border-blue-800/50">
          {/* Subtle Decorative Background Element */}
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-1/4 -bottom-20 w-60 h-60 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-xs">
              <Sparkles size={13} className="text-orange-400" />
              <span>{article.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6 max-w-4xl">
              {article.title}
            </h1>

            {/* Author & Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/15 text-xs sm:text-sm">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 p-0.5 shrink-0 overflow-hidden shadow-sm">
                  <img
                    src={doctorThumb}
                    alt="Dr. Vinish Kumar Singh"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <p className="font-extrabold text-white text-sm sm:text-base leading-tight">
                    {article.author}
                  </p>
                  <p className="text-xs text-blue-200 font-medium mt-0.5">
                    {article.authorRole || "Senior Consultant Urologist"}
                  </p>
                </div>
              </div>

              {/* Meta Tags & Share Button */}
              <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                <div className="flex items-center gap-4 text-blue-100 font-medium">
                  <span className="flex items-center gap-1.5 text-orange-300 font-bold">
                    <Calendar size={15} />
                    <span>{article.date}</span>
                  </span>
                  <span className="text-blue-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20 active:scale-95 cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                  <span>{copied ? "Link Copied!" : "Share"}</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ================= FEATURED IMAGE SHOWCASE ================= */}
        <ScrollReveal variant="scale-up" className="mb-10">
          <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200/90 bg-gradient-to-br from-slate-100 via-blue-50/30 to-slate-100 p-3 sm:p-4 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
            <img
              src={article.image}
              alt={article.title}
              className="max-h-[520px] w-auto max-w-full object-contain rounded-2xl shadow-xs transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        </ScrollReveal>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          
          {/* Main Article Content (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Key Summary Callout Quote */}
            {article.summary && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-orange-50/90 via-amber-50/60 to-white border-l-4 border-orange-500 text-slate-800 font-medium text-base sm:text-lg leading-relaxed shadow-2xs relative overflow-hidden">
                <div className="flex items-start gap-3">
                  <Sparkles size={24} className="text-orange-500 shrink-0 mt-1" />
                  <p className="font-semibold text-slate-900 leading-relaxed">
                    "{article.summary}"
                  </p>
                </div>
              </div>
            )}

            {/* Dynamic Content Sections */}
            {article.rawContent && (article.rawContent.includes('<p>') || article.rawContent.includes('<h') || article.rawContent.includes('<table>') || article.rawContent.includes('<ul>')) ? (
              <div
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-extrabold [&_h2]:text-slate-900 [&_h2]:mt-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-slate-800 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_blockquote]:border-l-4 [&_blockquote]:border-orange-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_table]:w-full [&_table]:border-collapse [&_table]:my-4 [&_th]:border [&_th]:border-slate-300 [&_th]:p-2 [&_th]:bg-slate-100 [&_td]:border [&_td]:border-slate-300 [&_td]:p-2"
                dangerouslySetInnerHTML={{ __html: article.rawContent }}
              />
            ) : (
              article.content &&
              article.content.map((sec, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-orange-500 shrink-0" />
                    <span>{sec.heading}</span>
                  </h2>

                  {sec.paragraph && (
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      {sec.paragraph}
                    </p>
                  )}

                  {sec.list && (
                    <ul className="space-y-3 pt-2">
                      {sec.list.map((item, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
                          <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-0.5" />
                          <span className="font-medium text-slate-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            )}

            {/* FAQs Section */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
                <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-xl sm:text-2xl pb-3 border-b border-slate-100">
                  <HelpCircle className="text-orange-500" size={24} />
                  <h3>Frequently Asked Questions</h3>
                </div>

                <div className="space-y-4">
                  {article.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-2">
                      <h4 className="font-bold text-slate-900 text-base flex items-start gap-2">
                        <span className="text-orange-600 font-black">Q.</span>
                        <span>{faq.q}</span>
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm pl-6 font-normal leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Column (1 Col) */}
          <div className="space-y-6">
            
            {/* Doctor Profile & OPD Booking Widget */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-5 sticky top-24">
              <div className="flex items-center gap-4">
                <img
                  src={doctorThumb}
                  alt="Dr. Vinish Kumar Singh"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-500/30 shadow-xs"
                />
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight">
                    Dr. Vinish Kumar Singh
                  </h3>
                  <p className="text-xs font-bold text-orange-600 mt-0.5">
                    Senior Consultant Urologist
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    M.B.B.S., M.S., M.Ch. (Urology)
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs space-y-1.5">
                <div className="flex items-center gap-2 font-extrabold text-[#103F7C]">
                  <Hospital size={14} />
                  <span>Dual OPD Consultations</span>
                </div>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  Morning OPD at Rudraksh IVF (Sharda Nagar) &amp; Evening OPD at Dr. Shilpi Centre (Ring Road).
                </p>
              </div>

              <div className="pt-2 space-y-2.5">
                <a
                  href="tel:8960068307"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98"
                >
                  <PhoneCall size={16} />
                  <span>Call OPD Helpline</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all"
                >
                  <span>Book Online Appointment</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Key Clinical Takeaways Card */}
            <div className="bg-gradient-to-br from-[#103F7C] to-blue-900 rounded-3xl p-6 text-white shadow-md space-y-4">
              <div className="flex items-center gap-2 font-extrabold text-sm text-orange-400">
                <Zap size={18} />
                <span>Patient Takeaways</span>
              </div>
              <ul className="space-y-2.5 text-xs text-blue-100">
                <li className="flex items-start gap-2">
                  <ShieldCheck size={15} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>Evidence-based clinical guidelines &amp; laser care.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={15} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>Same-day &amp; 24-hour discharge protocols.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={15} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>Direct consultation with 15+ yrs experienced urologist.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ================= RELATED ARTICLES ================= */}
        {relatedArticles.length > 0 && (
          <div className="pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Related Medical Insights
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Explore more expert articles from Dr. Vinish Kumar Singh
                </p>
              </div>
              <Link
                to="/"
                className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
              >
                <span>View All Articles</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <article
                  key={rel.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] font-extrabold text-orange-600 uppercase tracking-wider">
                        {rel.category}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm mt-1 line-clamp-2 group-hover:text-[#103F7C] transition-colors leading-snug">
                        {rel.title}
                      </h4>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <Link
                      to={`/blog/${rel.slug}`}
                      className="text-xs font-extrabold text-orange-500 hover:text-orange-600 flex items-center gap-1"
                    >
                      <span>Read Article</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
