addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return Response.redirect("https://www.notion.so/Alexandra-Meshi-1a3b759e8bdb80199f57d9d1c69b2957", 301);
}
