document.addEventListener("DOMContentLoaded", () => {
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const closeChatButton = document.getElementById("close-chat");
  const messagesContainer = document.getElementById("chatbot-messages");
  const chatInput = document.getElementById("chatbot-input");
  const sendMessageButton = document.getElementById("send-message");

  // Toggle del chatbot
  chatbotToggle.addEventListener("click", () => {
    chatbotWindow.classList.toggle("hidden");
  });

  // Cerrar el chatbot
  closeChatButton.addEventListener("click", () => {
    chatbotWindow.classList.add("hidden");
  });

  // Enviar mensaje
  const sendMessage = async () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;
  
    displayMessage(userMessage, "user");
    chatInput.value = "";
  
    try {
      const response = await fetch("/api/worker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: userMessage })
      });
  
      // Verifica si la respuesta es JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
  
        // Accede al primer elemento del array y luego a la propiedad response
        if (data.length > 0 && data[0].response) {
          displayMessage(data[0].response.response, "bot");
        } else {
          throw new Error("Respuesta no válida del servidor");
        }
      } else {
        throw new Error("Respuesta no válida del servidor");
      }
    } catch (error) {
      console.error("Error en el chatbot:", error);
      displayMessage("Error al contactar el chatbot. Intenta nuevamente más tarde.", "bot");
    }
  };
  

  // Mostrar mensajes en la ventana de chat
  // const displayMessage = (message, sender) => {
  //   const messageElement = document.createElement("div");
  //   messageElement.classList.add("chat-message", sender);
  //   messageElement.textContent = message;
  //   messagesContainer.appendChild(messageElement);
  //   messagesContainer.scrollTop = messagesContainer.scrollHeight;
  // };
  const displayMessage = (message, sender) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "bot" ? "bot-message" : "user-message");
    messageElement.textContent = message;
    document.getElementById("chatbot-messages").appendChild(messageElement);
    document.getElementById("chatbot-messages").scrollTop = document.getElementById("chatbot-messages").scrollHeight;
  };

  // Enviar mensaje al hacer clic en el botón o presionar Enter
  sendMessageButton.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});
