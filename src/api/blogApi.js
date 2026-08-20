import { blogsData } from '../data/blogsData';

const getApiBaseUrls = () => {
  const urls = [];
  if (import.meta.env.VITE_API_BASE_URL) {
    urls.push(import.meta.env.VITE_API_BASE_URL);
  }
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    urls.push('http://localhost:5000/api');
  }
  urls.push('https://dr-vinish-backend.onrender.com/api');
  return urls;
};

const API_URLS = getApiBaseUrls();

// Normalize API blog fields to match Frontend component expectations
function mapBlogFields(blog) {
  let parsedContent = [];
  if (Array.isArray(blog.content)) {
    parsedContent = blog.content;
  } else if (typeof blog.content === 'string' && blog.content.trim()) {
    const paragraphs = blog.content.split(/\n\s*\n/);
    parsedContent = paragraphs.map((p, idx) => ({
      heading: idx === 0 ? 'Medical Overview' : `Clinical Insights (${idx + 1})`,
      paragraph: p.trim()
    }));
  } else {
    parsedContent = [
      {
        heading: 'Medical Overview',
        paragraph: blog.shortDescription || blog.summary || blog.excerpt || 'No detailed content available.'
      }
    ];
  }

  return {
    id: blog._id || blog.id || blog.slug,
    _id: blog._id || blog.id,
    slug: blog.slug,
    category: blog.category || 'GENERAL UROLOGY',
    title: blog.title,
    date: blog.publishDate || blog.date || 'Recent',
    readTime: blog.readTime || '5 min read',
    excerpt: blog.shortDescription || blog.excerpt || blog.summary || (typeof blog.content === 'string' ? blog.content.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...' : ''),
    summary: blog.shortDescription || blog.summary || blog.excerpt || '',
    image: blog.image || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    author: blog.author || 'Dr. Vinish Kumar Singh',
    authorRole: blog.authorRole || 'Senior Consultant Urologist & Laser Surgeon',
    status: blog.status || 'Published',
    featured: Boolean(blog.featured),
    rawContent: typeof blog.content === 'string' ? blog.content : null,
    content: parsedContent,
    faqs: blog.faqs || []
  };
}

// Fetch all published blogs from API with fallback to static blogsData
export const fetchPublicBlogs = async () => {
  for (const baseUrl of API_URLS) {
    try {
      const res = await fetch(`${baseUrl}/blogs/public`);
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && Array.isArray(json.data) && json.data.length > 0) {
          return json.data.map(mapBlogFields);
        }
      }
    } catch (err) {
      // Try next endpoint
    }
  }
  return blogsData.map(mapBlogFields);
};

// Fetch single blog detail by slug or ID with fallback
export const fetchBlogBySlug = async (slug) => {
  for (const baseUrl of API_URLS) {
    try {
      const res = await fetch(`${baseUrl}/blogs/detail/${slug}`);
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.data) {
          return mapBlogFields(json.data);
        }
      }
    } catch (err) {
      // Try next endpoint
    }
  }
  const fallback = blogsData.find((b) => b.slug === slug || b.id === slug);
  return fallback ? mapBlogFields(fallback) : null;
};
