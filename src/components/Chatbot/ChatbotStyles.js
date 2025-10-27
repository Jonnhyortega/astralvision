import styled from "styled-components";

export const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  font-family: var(--inter);
  z-index: 10000;

  /* ---------- Botón flotante ---------- */
  .chat-icon {
    background: linear-gradient(135deg, var(--third), var(--secondary));
    border: none;
    border-radius: 40px;
    padding: 12px 18px;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.25);
    transition: all 0.3s ease;
  }

  .chat-icon:hover {
    transform: scale(1.06);
    background: linear-gradient(135deg, #2b77a6, var(--secondary));
  }

  /* ---------- Fondo borroso ---------- */
  .overlay {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    background-color: rgba(0,0,0,0.45);
  }

  /* ---------- Ventana principal ---------- */
  .chat-window {
    width: 380px;
    height: 520px;
    margin-bottom: 20px;
    background: rgba(51, 54, 99, 0.35);
    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    color: #fff;
  }

  /* ---------- Header ---------- */
  .chat-header {
    background: linear-gradient(135deg, var(--secondary), var(--third));
    color: #fff;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    letter-spacing: 0.4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.4);
  }

  .chat-header .title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .chat-header h4 {
    font-family: var(--titilium);
    font-size: 1rem;
    font-weight: 600;
  }

  .close-btn {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    transition: 0.2s ease;
  }

  .close-btn:hover {
    transform: scale(1.2);
    color: var(--primary);
  }

  /* ---------- Mensajes ---------- */
  .chat-messages {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background: rgba(255,255,255,0.05);
  }

  .message {
    margin-bottom: 14px;
    padding: 10px 14px;
    border-radius: 14px;
    max-width: 80%;
    word-wrap: break-word;
    line-height: 1.4;
    font-size: 0.92rem;
    transition: all 0.3s ease;
    font-family: var(--inter);
  }

  .message.user {
    align-self: flex-end;
    background: var(--primary);
    color: var(--secondary);
    font-weight: 500;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  }

  .message.bot {
    align-self: flex-start;
    background: linear-gradient(135deg, var(--third), var(--secondary));
    color: #fff;
    box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  }

  .message a {
    color: #fff;
    font-weight: 500;
    text-decoration: underline;
  }

  /* ---------- Acciones (links y botones en mensajes) ---------- */
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
  }

  .actions a {
    background: rgba(255,255,255,0.9);
    color: var(--secondary);
    padding: 6px 12px;
    border-radius: 10px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    transition: 0.3s;
  }

  .actions a:hover {
    background: var(--third);
    color: #fff;
  }

  /* ---------- Quick Replies ---------- */
  .quick-replies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px 16px;
    background: rgba(255,255,255,0.15);
    border-top: 1px solid rgba(255,255,255,0.08);
  }

  .quick-replies button {
    border: none;
    border-radius: 22px;
    background: rgba(255,255,255,0.85);
    padding: 7px 14px;
    font-size: 0.84rem;
    color: var(--secondary);
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .quick-replies button:hover {
    background: var(--third);
    color: #fff;
    transform: translateY(-2px);
  }

  /* ---------- Input ---------- */
  .chat-input-area {
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 10px 14px;
    background: rgba(255,255,255,0.08);
  }

  .chat-input-area input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 0.9rem;
    font-family: var(--inter);
  }

  .chat-input-area input::placeholder {
    color: rgba(255,255,255,0.6);
  }

  .chat-input-area button {
    background: var(--third);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    cursor: pointer;
    transition: 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chat-input-area button:hover {
    background: var(--secondary);
  }
`;
