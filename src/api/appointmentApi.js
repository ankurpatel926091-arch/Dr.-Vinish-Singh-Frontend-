// Online Appointment API service for fetching slots and submitting appointments
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

export const fetchConfirmedSlots = async () => {
  const apiUrls = getApiUrls();
  const errors = [];

  for (const baseUrl of apiUrls) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    try {
      const res = await fetch(`${baseUrl}/appointments/public/confirmed-slots`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          return json.data;
        }
        errors.push(`${baseUrl} returned an invalid confirmed-slots response`);
      } else {
        errors.push(`${baseUrl} returned ${res.status}`);
      }
    } catch (error) {
      clearTimeout(timeoutId);
      errors.push(`${baseUrl}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  throw new Error(`Unable to load confirmed slots: ${errors.join("; ")}`);
};

export const bookOnlineAppointment = async (appointmentPayload) => {
  const apiUrls = getApiUrls();
  let lastError = null;

  for (const baseUrl of apiUrls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const res = await fetch(`${baseUrl}/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify(appointmentPayload),
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json().catch(() => ({}));
        return { success: true, data: json };
      }
      lastError = new Error(`Server returned status ${res.status}`);
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error("Server is unreachable right now. Please try again later.");
};

