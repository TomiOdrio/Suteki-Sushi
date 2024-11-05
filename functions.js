document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('rotate-180');
    });
});

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
      // Hacer la solicitud a la API en Vercel en lugar del Worker directamente
      const response = await fetch("/api/worker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: userMessage })
      });

      const data = await response.json();
      displayMessage(data.response, "bot");
    } catch (error) {
      console.error("Error en el chatbot:", error);
      displayMessage("Error al contactar el chatbot. Intenta nuevamente más tarde.", "bot");
    }
  };

  // Mostrar mensajes en la ventana de chat
  const displayMessage = (message, sender) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  // Enviar mensaje al hacer clic en el botón o presionar Enter
  sendMessageButton.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});
