const getApiUrls = () => {
  const urls = [];
  if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
    urls.push(`http://${window.location.hostname}:5000/api`);
  }
  if (import.meta.env.VITE_API_BASE_URL) {
    urls.push(import.meta.env.VITE_API_BASE_URL);
  }
  urls.push("https://dr-vinish-backend.onrender.com/api");
  return Array.from(new Set(urls));
};

const failedUrlsCooldown = new Map();

export const fetchPublicClinics = async () => {
  const now = Date.now();
  const errors = [];

  for (const baseUrl of getApiUrls()) {
    const fullUrl = `${baseUrl}/clinics`;
    const lastFailed = failedUrlsCooldown.get(fullUrl);
    if (lastFailed && now - lastFailed < 300000) {
      errors.push(`${fullUrl} is temporarily unavailable`);
      continue;
    }

    try {
      const res = await fetch(fullUrl);
      if (!res.ok) {
        failedUrlsCooldown.set(fullUrl, now);
        errors.push(`${fullUrl} returned ${res.status}`);
        continue;
      }

      const json = await res.json();
      if (json?.success && Array.isArray(json.data)) {
        failedUrlsCooldown.delete(fullUrl);
        return json.data;
      }

      failedUrlsCooldown.set(fullUrl, now);
      errors.push(`${fullUrl} returned an invalid clinic response`);
    } catch (error) {
      failedUrlsCooldown.set(fullUrl, now);
      errors.push(`${fullUrl}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  throw new Error(`Unable to load clinics. ${errors.join("; ")}`);
};
