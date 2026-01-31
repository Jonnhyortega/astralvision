import { useState, useRef, useEffect, useCallback } from "react";
import { ChatbotContainer } from "./ChatbotStyles";
import callChatAPI from "../../utils/api-conecction";
import "animate.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { leapfrog } from "ldrs";

leapfrog.register();

const botResponseSound = new Audio("/sounds/bot-response.mp3");
const userSendSound = new Audio("/sounds/send.mp3");
const typingSound = new Audio("/sounds/typing.mp3");

const chatbotContext = `
Sos el asistente virtual de Astral Vision, una agencia digital creativa especializada en desarrollo web, branding y marketing digital. 
Tu función es EXCLUSIVAMENTE responder consultas relacionadas con los servicios, proyectos y filosofía de Astral Vision.

⛔ REGLAS ESTRICTAS DE INTERACCIÓN:
1. SI EL USUARIO PREGUNTA SOBRE ALGO NO RELACIONADO A ASTRAL VISION (ej. clima, noticias, recetas, cultura general, códigos de programación ajenos, chistes, etc.):
   - Respondé educadamente: "Disculpa, solo puedo asesorarte sobre los servicios digitales de Astral Vision." y ofrece volver al menú de servicios.
   - NO intentes responder la pregunta fuera de contexto.
   - NO inventes información.

2. SOBRE ASTRAL VISION:
   - Ofrecé información sobre: Diseño Web, E-commerce, Marketing Digital, Branding, Redes Sociales.
   - Si piden presupuesto: "Cada proyecto es único. Para darte un valor exacto, necesito que me cuentes más o nos contactes por WhatsApp."
   - Si mencionan Rokotovich Estudio o HC Gestión Comercial: "Son parte de nuestro grupo empresarial y aliados estratégicos."

3. TONO DE VOZ:
   - Profesional pero cercano, moderno y tecnológico.
   - Usá emojis moderadamente (🚀, 💡, 🌐).
   - Sé conciso.
`;

export default function Chatbot({ context = "" }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", type: "text", content: "👋 ¡Hola! Soy el asistente de Astral Vision. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [canSend, setCanSend] = useState(true);


  const quickReplies = [
    "💼 Quiero un presupuesto",
    "🌐 Ver proyectos",
    "📞 Contacto rápido",
    "📲 Redes sociales",
  ];

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
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

  // ✅ Evita que el usuario mande muchos mensajes seguidos

  const startCooldown = (duration = 2000) => {
    setCanSend(false);
    setTimeout(() => setCanSend(true), duration);
  };


  const send = async (text) => {
    if (!text.trim() || !canSend || loading) return;
    // 🔒 Bloqueo temporal de envíos
    startCooldown(2000);
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
            { label: "💬 WhatsApp", url: "https://wa.me/541176513862" },
            // { label: "📋 Formulario", url: "/contacto" },
          ],
        };
        break;

      case "🌐 ver proyectos":
        reply = {
          from: "bot",
          type: "linklist",
          content: "Estos son algunos de nuestros proyectos recientes:",
          links: [
            { name: "Creatina Sticks", url: "https://creatinasticks.mitiendanube.com/" },
            { name: "Sanitarios Lugano", url: "https://sanitarioslugano.com" },
            { name: "Gestion comercial de habilitaciones", url: "https://gestioncomercialhc.com" },
          ],
        };
        break;

      case "📞 contacto rápido":
        reply = {
          from: "bot",
          type: "text",
          content: "Podés comunicarte conmigo directamente: 📧 jonnhyortega@gmail.com o 📲 +54 11 7651-3862",
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
          const aiResponse = await callChatAPI(text, history, chatbotContext);
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
          <SmartToyIcon sx={{ fontSize: 28 }} />
        </button>
      ) : (
        <div className="overlay" onClick={toggleChat}>
          <div
            className="chat-window animate__animated animate__fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="chat-header">
              <h4>Astral Vision Assistant</h4>
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
                      <ul className="link-list">
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
              <button type="submit" disabled={!canSend || loading}>
                <ArrowUpwardIcon />
              </button>
            </form>
          </div>
        </div>
      )}
    </ChatbotContainer>
  );
}
