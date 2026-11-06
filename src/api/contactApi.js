// Contact Enquiry API service for submitting website inquiries to backend
const getApiUrls = () => {
  const urls = [];
  if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
    urls.push(`http://${window.location.hostname}:5000/api`);
  }
  if (import.meta.env.VITE_API_BASE_URL) {
    urls.push(import.meta.env.VITE_API_BASE_URL);
  }
  if (!urls.length) {
    urls.push("https://api.urosurgeondrvinish.com/api");
  }
  return Array.from(new Set(urls));
};

export const submitContactEnquiry = async (formData) => {
  const apiUrls = getApiUrls();
  let lastError = null;

  for (const baseUrl of apiUrls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(`${baseUrl}/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: formData.service || "General Inquiry",
          subject: formData.service || "General Inquiry",
          message: formData.message || "",
        }),
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json().catch(() => ({}));
        return { success: true, data: json };
      }
      lastError = new Error(`Server returned ${res.status}`);
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error("Failed to submit contact enquiry to server.");
};

