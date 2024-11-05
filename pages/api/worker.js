// Archivo: pages/api/worker.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    try {
      // Hacer la solicitud al Worker de Cloudflare
      const response = await fetch("https://suteki-sushi-worker.todriozola.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error en la API de Vercel:", error);
      res.status(500).json({ error: "Error al contactar el Worker" });
    }
  }
  