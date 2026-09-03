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

const STATIC_BLOG_IDS = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'];

// Synchronous instant helper to get cached backend blogs immediately (0ms delay)
export const getInitialBlogs = () => {
  try {
    const cached = localStorage.getItem('dr_vinish_cached_blogs');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Filter out legacy static blogs if present in cache
        const dynamicOnly = parsed.filter((b) => !STATIC_BLOG_IDS.includes(b.id) && !STATIC_BLOG_IDS.includes(b._id));
        return sortBlogsByDateDesc(dynamicOnly.map(mapBlogFields));
      }
    }
  } catch (e) {
    // Ignore parse errors
  }
  return [];
};

// Fast helper to fetch with AbortController timeout
const fetchWithTimeout = async (url, timeoutMs = 3500) => {
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

// Process dynamic backend blogs, cache in localStorage, and return sorted array
const processBackendBlogs = (backendBlogs = []) => {
  const mappedBackend = backendBlogs.map(mapBlogFields);
  const sorted = sortBlogsByDateDesc(mappedBackend);

  try {
    localStorage.setItem('dr_vinish_cached_blogs', JSON.stringify(sorted));
  } catch (e) {}

  return sorted;
};

// Fetch all published blogs from API in parallel with fast timeouts & instant fallback
export const fetchPublicBlogs = async () => {
  const fetchPromises = API_URLS.map(async (baseUrl) => {
    try {
      const res = await fetchWithTimeout(`${baseUrl}/blogs/public`, 3500);
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && Array.isArray(json.data)) {
          return json.data;
        }
      }
    } catch (err) {
      // Endpoint timed out or failed
    }
    return null;
  });

  try {
    const results = await Promise.allSettled(fetchPromises);
    for (const result of results) {
      if (result.status === 'fulfilled' && result.value !== null) {
        return processBackendBlogs(result.value);
      }
    }
  } catch (err) {}

  return getInitialBlogs();
};

// Fetch single blog detail by slug or ID from API
export const fetchBlogBySlug = async (slug) => {
  const initialList = getInitialBlogs();
  const localMatch = initialList.find(
    (b) => b.slug === slug || b.id === slug || (b._id && b._id === slug)
  );

  const fetchPromises = API_URLS.map(async (baseUrl) => {
    try {
      const res = await fetchWithTimeout(`${baseUrl}/blogs/detail/${slug}`, 3500);
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.data) {
          return mapBlogFields(json.data);
        }
      }
    } catch (err) {}
    return null;
  });

  try {
    const results = await Promise.allSettled(fetchPromises);
    for (const result of results) {
      if (result.status === 'fulfilled' && result.value) {
        return result.value;
      }
    }
  } catch (err) {}

  return localMatch || null;
};
