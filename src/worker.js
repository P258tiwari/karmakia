export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const url = new URL(request.url);
    const isPageRequest = request.method === 'GET' && !url.pathname.split('/').pop()?.includes('.');

    if (response.status !== 404 || !isPageRequest) return response;

    const indexUrl = new URL('/index.html', url);
    return env.ASSETS.fetch(new Request(indexUrl, request));
  },
};
