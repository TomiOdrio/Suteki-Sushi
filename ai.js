export default {
    async fetch(request, env) {
        let chat = {
        messages: [
            { role: 'system', content: 'Vos sos el asistente virtual de Suteki Sushi. Solo podés responder preguntas relacionadas al restaurante. Respondes en español.' },
            { role: 'user', content: 'Quién ganó el mundial de fútbol 2022?' }
            ]
        };
        let response = await env.AI.run('@cf/meta/llama-3-8b-instruct', chat);
      
        return new Response(JSON.stringify(response), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
};