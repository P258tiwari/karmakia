const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];

export function getTrackingParameters() {
  const params = new URLSearchParams(window.location.search);
  return trackingKeys.reduce((values, key) => {
    if (params.get(key)) values[key] = params.get(key);
    return values;
  }, {});
}

export async function submitLead(formData) {
  const payload = { ...formData, tracking: getTrackingParameters(), submittedAt: new Date().toISOString() };
  console.info('[Karma KIA lead]', payload);
  return { ok: true, payload };
}
