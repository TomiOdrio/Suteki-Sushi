export default function ChatbotComponent() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async () => {
        if (!message) return;

        // Agrega el mensaje del usuario al historial
        const userMessage = { role: 'user', content: message };
        setChatHistory([...chatHistory, userMessage]);
        setLoading(true);

        // Llamada a CloudFlare para obtener la respuesta del bot
        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message }),
            });
            const data = await response.json();
            const botResponse = { role: 'assistant', content: data.response };

            // Actualiza el historial del chat con la respuesta del bot
            setChatHistory([...chatHistory, userMessage, botResponse]);
            setMessage(''); // Limpiar el input
        } catch (error) {
            console.error('Error al contactar con el bot:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-history">
                {chatHistory.map((entry, index) => (
                    <div key={index} className={`chat-bubble ${entry.role}`}>
                        {entry.content}
                    </div>
                ))}
                {loading && <p>El bot está escribiendo...</p>}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    className="input-field"
                />
                <button onClick={handleSendMessage} className="send-button">
                    Enviar
                </button>
            </div>
        </div>
    );
}