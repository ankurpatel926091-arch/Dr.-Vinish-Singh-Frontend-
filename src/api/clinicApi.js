const DEFAULT_CLINICS_DATA = [
  {
    id: 'morning',
    clinicId: 'morning',
    tag: 'Morning OPD',
    badgeLabel: 'MORNING CONSULTATION CENTRE',
    name: 'Rudraksh IVF & Urology Centre',
    title: 'Rudraksh IVF & Urology Centre',
    subtitle: 'Sharda Nagar, Lucknow',
    locality: 'Sharda Nagar, Lucknow',
    timing: '10:00 AM – 03:00 PM',
    phone: '+91 89600 68307',
    tel: '8960068307',
    address: '1/795, Ratan Khand, Sharda Nagar, Lucknow',
    mapUrl: 'https://www.google.com/maps?q=Rudraksh+IVF+And+Urology+Centre+Lucknow',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.428!2d80.9242723!3d26.7803631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff149cec4b2d%3A0xe680ad74dd601b3b!2sDr.%20Vinish%20Singh%20%7C%20Rudraksh%20IVF%20%26%20Urology%20Centre!5e0!3m2!1sen!2sin',
    mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.428!2d80.9242723!3d26.7803631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff149cec4b2d%3A0xe680ad74dd601b3b!2sDr.%20Vinish%20Singh%20%7C%20Rudraksh%20IVF%20%26%20Urology%20Centre!5e0!3m2!1sen!2sin',
    active: true
  },
  {
    id: 'evening',
    clinicId: 'evening',
    tag: 'Evening OPD',
    badgeLabel: 'EVENING CONSULTATION CENTRE',
    name: 'Dr. Shilpi Maternity & Urology Centre',
    title: 'Dr. Shilpi Maternity & Urology Centre',
    subtitle: 'Pakkabag, Ring Rd',
    locality: 'Pakkabag, Ring Road, Lucknow',
    timing: '03:00 PM – 07:00 PM',
    phone: '+91 86048 91955',
    tel: '8604891955',
    address: '596Pb/1114/03, Ring Rd, Pakkabag, Lucknow',
    mapUrl: 'https://maps.app.goo.gl/w9mqio5fe4Hj8KLm9',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.200!2d80.8609337!3d26.8566859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff2d7be105cf%3A0x87c6db827648df8!2sDr.%20Shilpi%20Maternity%20%26%20Urology%20Centre!5e0!3m2!1sen!2sin',
    mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.200!2d80.8609337!3d26.8566859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff2d7be105cf%3A0x87c6db827648df8!2sDr.%20Shilpi%20Maternity%20%26%20Urology%20Centre!5e0!3m2!1sen!2sin',
    active: true
  }
];

const sanitizeClinics = (list) => {
  if (!Array.isArray(list)) return list;
  return list.map(c => {
    if ((c.name && c.name.toLowerCase().includes('rudraksh')) || c.clinicId === 'morning' || c.id === 'morning') {
      return {
        ...c,
        mapUrl: 'https://www.google.com/maps?q=Rudraksh+IVF+And+Urology+Centre+Lucknow'
      };
    }
    return c;
  });
};

const getApiUrls = () => {
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

const failedUrlsCooldown = new Map();

// Fetch public clinics from Backend API or localStorage
export const fetchPublicClinics = async () => {
  // 1. Try Backend API first for live updates from Admin Panel
  const now = Date.now();
  const apiUrls = getApiUrls();
  for (const baseUrl of apiUrls) {
    const fullUrl = `${baseUrl}/clinics`;
    const lastFailed = failedUrlsCooldown.get(fullUrl);
    if (lastFailed && now - lastFailed < 300000) { // 5 min cooldown for unreachable URLs
      continue;
    }

    try {
      const res = await fetch(fullUrl);
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && Array.isArray(json.data) && json.data.length > 0) {
          const sanitized = sanitizeClinics(json.data);
          try {
            localStorage.setItem('dr_vinish_clinics', JSON.stringify(sanitized));
          } catch (e) {}
          return sanitized;
        }
      } else {
        failedUrlsCooldown.set(fullUrl, now);
      }
    } catch (err) {
      failedUrlsCooldown.set(fullUrl, now);
    }
  }

  // 2. Fallback to local saved clinics if Backend API is offline
  try {
    const saved = localStorage.getItem('dr_vinish_clinics');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return sanitizeClinics(parsed);
      }
    }
  } catch (err) {}

  return sanitizeClinics(DEFAULT_CLINICS_DATA);
};
