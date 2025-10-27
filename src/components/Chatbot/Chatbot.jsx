import { useState, useRef, useEffect, useCallback } from "react";
import { ChatbotContainer } from "./ChatbotStyles";
import callChatAPI from "../../utils/api-conecction";
import "animate.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { leapfrog } from "ldrs";

leapfrog.register();

const botResponseSound = new Audio("/sounds/bot-response.mp3");
const userSendSound = new Audio("/sounds/send.mp3");
const typingSound = new Audio("/sounds/typing.mp3");

export default function Chatbot({ context = "" }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", type: "text", content: "👋 ¡Hola! Soy el asistente de Astral Vision. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    "💼 Quiero un presupuesto",
    "🌐 Ver proyectos",
    "📞 Contacto rápido",
    "📲 Redes sociales",
  ];

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(scrollToBottom, [messages, scrollToBottom]);

useEffect(() => {
    if (chatOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [chatOpen]);
  
   

  const toggleChat = () => setChatOpen(!chatOpen);

  const handleQuickReply = (text) => send(text);

  const send = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { from: "user", type: "text", content: text }]);
    setHistory((prev) => [...prev, { role: "user", content: text }]);

    userSendSound.currentTime = 0;
    userSendSound.play().catch(() => {});

    setLoading(true);

    let reply;

    switch (text.toLowerCase()) {
      case "💼 quiero un presupuesto":
        reply = {
          from: "bot",
          type: "action",
          content: "Podés contactarme por WhatsApp o completar el formulario:",
          actions: [
            { label: "💬 WhatsApp", url: "https://wa.me/541122684234" },
            { label: "📋 Formulario", url: "/contacto" },
          ],
        };
        break;

      case "🌐 ver proyectos":
        reply = {
          from: "bot",
          type: "linklist",
          content: "Estos son algunos de nuestros proyectos recientes:",
          links: [
            { name: "Goa Academia", url: "https://goacademia.com.ar" },
            { name: "Sanitarios Lugano", url: "https://sanitarioslugano.com.ar" },
            { name: "Rokotovich Estudio Jurídico", url: "https://rokotovichestudio.com" },
          ],
        };
        break;

      case "📞 contacto rápido":
        reply = {
          from: "bot",
          type: "text",
          content: "Podés comunicarte conmigo directamente: 📧 jonnhyortega@gmail.com o 📲 +54 11 2268-4234",
        };
        break;

      case "📲 redes sociales":
        reply = {
          from: "bot",
          type: "linklist",
          content: "Seguinos y descubrí más de nuestro trabajo:",
          links: [
            { name: "Instagram", url: "https://instagram.com/astralvisionco" },
            { name: "LinkedIn", url: "https://linkedin.com/in/jonathan-ortega-a00970191" },
            { name: "Facebook", url: "https://facebook.com/profile.php?id=61573859531556" },
          ],
        };
        break;

      default:
        try {
          typingSound.loop = true;
          typingSound.volume = 0.3;
          typingSound.play().catch(() => {});
          const aiResponse = await callChatAPI(text, history, context);
          reply = { from: "bot", type: "text", content: aiResponse };
        } catch {
          reply = {
            from: "bot",
            type: "text",
            content: "❌ Ocurrió un error. Intenta nuevamente o contactá con soporte.",
          };
        }
    }

    typingSound.pause();
    setMessages((prev) => [...prev, reply]);
    setHistory((prev) => [...prev, { role: "assistant", content: reply.content }]);

    botResponseSound.currentTime = 0;
    botResponseSound.play().catch(() => {});
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(input);
    setInput("");
  };

  return (
    <ChatbotContainer>
      {!chatOpen ? (
        <button className="chat-icon" onClick={toggleChat}>
          <img src="https://img.icons8.com/ios-glyphs/30/chat.png" alt="bot" />
          {/* <span>Asistente Virtual</span> */}
        </button>
      ) : (
        <div className="overlay" onClick={toggleChat}>
          <div
            className="chat-window animate__animated animate__fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="chat-header">
              <div className="title">
                <img
                  width="40"
                  src="https://img.icons8.com/avantgarde/50/message-bot.png"
                  alt="bot"
                />
                <h4>Astral Vision Assistant</h4>
              </div>
              <button className="close-btn" onClick={toggleChat}>
                ×
              </button>
            </header>

            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.from}`}>
                  {msg.type === "text" && <p>{msg.content}</p>}

                  {msg.type === "linklist" && (
                    <div>
                      <p>{msg.content}</p>
                      <ul>
                        {msg.links.map((l, index) => (
                          <li key={index}>
                            <a href={l.url} target="_blank" rel="noreferrer">
                              {l.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {msg.type === "action" && (
                    <div>
                      <p>{msg.content}</p>
                      <div className="actions">
                        {msg.actions.map((a, index) => (
                          <a key={index} href={a.url} target="_blank" rel="noreferrer">
                            {a.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {loading && <l-leapfrog size="40" speed="2.5" />}
              <div ref={messagesEndRef} />
            </div>

            <div className="quick-replies">
              {quickReplies.map((q, i) => (
                <button key={i} onClick={() => handleQuickReply(q)}>
                  {q}
                </button>
              ))}
            </div>

            <form className="chat-input-area" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Escribí tu mensaje..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">
                <ArrowUpwardIcon />
              </button>
            </form>
          </div>
        </div>
      )}
    </ChatbotContainer>
  );
}
