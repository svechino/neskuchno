addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

const CNAME = "neskuchno.net";
const URL = "https://www.notion.so/Alexandra-Meshi-1a3b759e8bdb80199f57d9d1c69b2957";

async function handleRequest(req) {
  let url = new URL(req.url)
  url.hostname = URL.replace(/^https?:\/\//, "").split("/")[0]
  url.pathname = URL.replace(/^https?:\/\//, "").split("/").slice(1).join("/")
  return fetch("https://" + url.hostname + "/" + url.pathname)
}