// Dynamic API service for fetching blogs from Admin Panel / Backend database

const getApiBaseUrls = () => {
  const urls = [];
  const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  if (isLocal) {
    urls.push('http://localhost:5000/api');
  }

  if (import.meta.env.VITE_API_BASE_URL) {
    urls.push(import.meta.env.VITE_API_BASE_URL);
  }

  urls.push('https://dr-vinish-backend.onrender.com/api');

  return Array.from(new Set(urls));
};

const API_URLS = getApiBaseUrls();

const parseDate = (dateStr) => {
  if (!dateStr) return 0;
  const timestamp = Date.parse(dateStr);
  if (!isNaN(timestamp)) return timestamp;
  return 0;
};

export const sortBlogsByDateDesc = (blogsList) => {
  return [...blogsList].sort((a, b) => {
    const timeA = parseDate(a.date || a.publishDate);
    const timeB = parseDate(b.date || b.publishDate);
    return timeB - timeA;
  });
};

// Normalize API blog fields to match Frontend component expectations
export function mapBlogFields(blog) {
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

// Fast helper to fetch with AbortController timeout
const fetchWithTimeout = async (url, timeoutMs = 2500) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    return response;
  } catch (error) {
    clearTimeout(timer);
    throw error;
  }
};

const processBackendBlogs = (backendBlogs) =>
  sortBlogsByDateDesc(backendBlogs.map(mapBlogFields));

export const fetchPublicBlogs = async () => {
  const errors = [];
  for (const baseUrl of API_URLS) {
    try {
      const timeout = baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1') ? 1500 : 3000;
      const res = await fetchWithTimeout(`${baseUrl}/blogs/public`, timeout);
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && Array.isArray(json.data)) {
          return processBackendBlogs(json.data);
        }
        errors.push(`${baseUrl} returned an invalid blog response`);
      } else {
        errors.push(`${baseUrl} returned ${res.status}`);
      }
    } catch (error) {
      errors.push(`${baseUrl}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  throw new Error(`Unable to load blogs. ${errors.join("; ")}`);
};

export const fetchBlogBySlug = async (slug) => {
  const errors = [];
  for (const baseUrl of API_URLS) {
    try {
      const timeout = baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1') ? 1500 : 3000;
      const res = await fetchWithTimeout(`${baseUrl}/blogs/detail/${encodeURIComponent(slug)}`, timeout);
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.data) {
          return mapBlogFields(json.data);
        }
        errors.push(`${baseUrl} returned an invalid blog response`);
      } else if (res.status !== 404) {
        errors.push(`${baseUrl} returned ${res.status}`);
      }
    } catch (error) {
      errors.push(`${baseUrl}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  if (errors.length === API_URLS.length) {
    throw new Error(`Unable to load blog article. ${errors.join("; ")}`);
  }
  return null;
};
