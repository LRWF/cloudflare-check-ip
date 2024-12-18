addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const ip = request.headers.get('CF-Connecting-IP') || '0.0.0.0';

  const jsonResponse = {
    ip: ip
  };

  return new Response(JSON.stringify(jsonResponse), {
    headers: { 
      'Content-Type': 'application/json' 
    },
  });
}
