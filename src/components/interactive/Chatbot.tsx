import { useState, useEffect, useRef } from 'react';
import { Send, X, Bot } from 'lucide-react';
import './Chatbot.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickResponses = [
  '¿Qué servicios ofreces?',
  '¿Cuál es tu experiencia?',
  'Quiero agendar una reunión',
  'Ver proyectos destacados'
];

const generateBotResponse = (userInput: string): string => {
  const input = userInput.toLowerCase();

  if (input.includes('servicio') || input.includes('ofreces')) {
    return 'Ofrezco desarrollo web full stack, automatización con IA, chatbots personalizados, y bots de WhatsApp. ¿Te gustaría saber más sobre algún servicio en particular?';
  }

  if (input.includes('experiencia')) {
    return 'Tengo experiencia desarrollando aplicaciones web modernas con React, Next.js, Node.js, y Python. He implementado soluciones de IA para clínicas y pequeños negocios. ¿Quieres ver algunos casos de éxito?';
  }

  if (input.includes('reunión') || input.includes('agendar') || input.includes('contacto')) {
    return 'Perfecto! Puedes contactarme directamente en la sección de contacto o enviarme un email. ¿Prefieres una videollamada o una llamada telefónica?';
  }

  if (input.includes('proyecto')) {
    return 'He trabajado en proyectos como sistemas de chat IA para clínicas, e-commerce con recomendaciones ML, y dashboards analytics. ¿Qué tipo de proyecto te interesa?';
  }

  if (input.includes('precio') || input.includes('costo') || input.includes('cuanto')) {
    return 'Los precios varían según el alcance del proyecto. Podemos agendar una reunión para discutir tus necesidades específicas y darte un presupuesto personalizado.';
  }

  if (input.includes('hola') || input.includes('hey') || input.includes('hi')) {
    return '¡Hola! 👋 ¿En qué puedo ayudarte hoy? Puedo contarte sobre mis servicios, experiencia, o ayudarte a agendar una reunión.';
  }

  return 'Gracias por tu mensaje. ¿Podrías darme más detalles sobre lo que necesitas? También puedes elegir una de las opciones rápidas arriba.';
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickResponse = (response: string) => {
    setInput(response);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-avatar">
          <Bot size={24} />
        </div>
        <div className="chatbot-info">
          <h4>Asistente IA</h4>
          <span className="chatbot-status">
            <span className="status-dot"></span>
            Online
          </span>
        </div>
      </div>

      <div className="chatbot-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'}`}
          >
            <div className="message-bubble">
              {message.text}
            </div>
            <span className="message-time">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="message message-bot">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-quick-responses">
        {quickResponses.map((response, index) => (
          <button
            key={index}
            onClick={() => handleQuickResponse(response)}
            className="quick-response-btn"
          >
            {response}
          </button>
        ))}
      </div>

      <div className="chatbot-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escribe tu mensaje..."
          className="chatbot-input"
        />
        <button onClick={handleSend} className="chatbot-send-btn">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
