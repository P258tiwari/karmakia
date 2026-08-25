const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];

export function getTrackingParameters() {
  const params = new URLSearchParams(window.location.search);
  return trackingKeys.reduce((values, key) => {
    if (params.get(key)) values[key] = params.get(key);
    return values;
  }, {});
}

export async function submitLead(formData) {
  const endpoint = import.meta.env.VITE_LEAD_API_URL || '/api/enquiry.php';

  const payload = {
    ...formData,
    tracking: getTrackingParameters(),
    submittedAt: new Date().toISOString(),
    pageUrl: `${window.location.origin}${window.location.pathname}`,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok) return { ok: false, error: result.message || 'We could not send your enquiry. Please try again.' };
    return { ok: true };
  } catch {
    return { ok: false, error: 'We could not connect to the enquiry service. Please try again.' };
  }
}
