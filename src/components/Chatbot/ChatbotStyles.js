import styled from "styled-components";

export const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  font-family: var(--inter);
  z-index: 10000;

  // icono flotante

  .chat-icon {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background: #00b4d8;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .chat-icon:hover {
    background: #00b4d8;
    color: #000;
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 180, 216, 0.6);
  }

  /* ---------- Ventana principal ---------- */
  .chat-window {
    width: 380px;
    height: 520px;
    margin-bottom: 20px;
    
    /* Fondo oscuro sólido para mejor contraste */
    background: #0b0c15; 
    border: 1px solid #00b4d8;
    border-radius: 16px;
    
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
    box-shadow: 0 0 25px rgba(0, 180, 216, 0.3);
    color: #edf2f4;
  }

  /* ---------- Header ---------- */
  .chat-header {
    background: rgba(0, 180, 216, 0.1);
    border-bottom: 1px solid rgba(0, 180, 216, 0.3);
    color: #00b4d8;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .close-btn {
    background: transparent;
    border: 1px solid rgba(0, 180, 216, 0.5); /* Borde sutil */
    color: #00b4d8;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .close-btn:hover {
    background: #00b4d8;
    color: #000;
    transform: rotate(90deg); /* Pequeña animación */
    box-shadow: 0 0 10px rgba(0, 180, 216, 0.6);
  }

  /* ---------- Mensajes ---------- */
  .chat-messages {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background: transparent;
    gap: 12px;
  }

  .message {
    padding: 12px 16px;
    border-radius: 12px;
    max-width: 85%;
    line-height: 1.5;
    font-size: 0.95rem;
    position: relative;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }

  .message.user {
    align-self: flex-end;
    background: #00b4d8; /* Color sólido para el usuario */
    color: #000; /* Texto negro para contraste */
    border-radius: 12px 12px 0 12px;
    font-weight: 500;
  }

  .message.bot {
    align-self: flex-start;
    background: #1a1b26;
    border: 1px solid #2d2f40;
    color: #e0e0e0;
    border-radius: 12px 12px 12px 0;
  }

  /* ---------- Quick Replies ---------- */
  .quick-replies {
    padding: 15px;
    background: rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(0, 180, 216, 0.1);
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .quick-replies button {
    border: 1px solid #00b4d8;
    border-radius: 8px;
    background: rgba(0, 180, 216, 0.1);
    padding: 8px 14px;
    font-size: 0.8rem;
    color: #00b4d8;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .quick-replies button:hover {
    background: #00b4d8;
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(0, 180, 216, 0.4);
  }

  /* ---------- Input ---------- */
  .chat-input-area {
    background: #1a1b26;
    border-top: 1px solid #2d2f40;
    padding: 15px;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .chat-input-area input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1rem;
    font-family: var(--inter);
  }

  .chat-input-area input::placeholder {
    color: #6c757d;
  }

  .chat-input-area button {
    background: #00b4d8;
    color: #000;
    border: none;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chat-input-area button:hover {
    background: #48cae4;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .chat-window {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      height: 100dvh; 
      margin: 0;
      border-radius: 0;
      border: none;
      display: flex;
      flex-direction: column;
    }
    
    .chat-messages {
      /* No extra padding needed if input is in flow */
      flex: 1;
    }

    .chat-input-area {
      /* Keep in flow */
      position: static;
      width: 100%;
      padding-bottom: max(15px, env(safe-area-inset-bottom));
    }
  }
`;
