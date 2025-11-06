import { useState, useEffect, useRef } from 'react';
import './Terminal.css';

interface Command {
  input: string;
  output: string | string[];
}

const commands: Record<string, string | string[]> = {
  help: [
    'Comandos disponibles:',
    '  aboutme     - Información sobre mí',
    '  skills      - Mis habilidades técnicas',
    '  experience  - Experiencia laboral',
    '  projects    - Proyectos destacados',
    '  contact     - Información de contacto',
    '  clear       - Limpiar terminal',
  ],
  aboutme: [
    'MARKO PAMICH - Full Stack Developer & IA Automation Specialist',
    '',
    'Soy un desarrollador apasionado por crear soluciones digitales',
    'innovadoras que transforman ideas en productos reales.',
    '',
    'Me especializo en:',
    '  - Desarrollo web moderno con React, Next.js y Astro',
    '  - Automatizaciones inteligentes con IA',
    '  - Chatbots y bots de WhatsApp para empresas',
    '  - Optimización SEO y rendimiento web',
    '',
    'Mi enfoque: Código limpio, mejores prácticas y',
    'tecnologías de vanguardia para entregar productos',
    'que no solo funcionan, sino que superan expectativas.',
    '',
    'Ubicación: Neuquén, Argentina',
  ],
  skills: [
    'Frontend:  React, Next.js, Astro, TypeScript, Tailwind CSS',
    'Backend:   Node.js, Python, MySQL, PostgreSQL',
    'IA & Auto: OpenAI API, , Chatbots, WhatsApp Bots',
    'DevOps:    Git, , Vercel, AWS, CI/CD',
  ],
  experience: [
    '🚀 Full Stack Developer (2021 - Presente)',
    '   Desarrollo de aplicaciones web y automatizaciones con IA',
    '',
    '🤖 IA Automation Specialist (2022 - Presente)',
    '   Chatbots inteligentes y bots de WhatsApp para empresas',
    '',
    '📈 Freelancer (2020 - Presente)',
    '   50+ proyectos completados con 98% de satisfacción',
  ],
  projects: [
    '1. Sistema de Chat IA para Clínica',
    '   Automatización de atención al paciente 24/7',
    '',
    '2. E-commerce con Recomendaciones ML',
    '   Sistema de recomendaciones personalizado',
    '',
    '3. Dashboard Analytics Real-Time',
    '   Visualización de datos en tiempo real',
    '',
    'Ver más en la sección de proyectos ↓',
  ],
  contact: [
    '📧 Email:    markodevcode@gmail.com',
    '💼 LinkedIn: linkedin.com/in/marko-pamich-a31b492a8',
    '🐙 GitHub:   github.com/Markopamichh',
    '🐦 Twitter:  @Markodevcode',
    '',
    '¡Hablemos sobre tu próximo proyecto!',
  ],
};

export default function Terminal() {
  const [history, setHistory] = useState<Command[]>([
    {
      input: 'welcome',
      output: [
        '¡Bienvenido a mi portfolio interactivo!',
        '',
        'Escribe "help" para ver los comandos disponibles.',
        'O explora navegando por el sitio.',
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (!trimmedCmd) return;

    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const output = commands[trimmedCmd] || `Comando no reconocido: "${cmd}". Escribe "help" para ver comandos disponibles.`;

    setHistory((prev) => [
      ...prev,
      {
        input: cmd,
        output,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      if (newIndex >= 0) {
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button terminal-button-close"></span>
          <span className="terminal-button terminal-button-minimize"></span>
          <span className="terminal-button terminal-button-maximize"></span>
        </div>
        <div className="terminal-title">Markodevcode@terminal:~</div>
        <div></div>
      </div>

      <div className="terminal-body" ref={terminalRef}>
        {history.map((item, index) => (
          <div key={index} className="terminal-block">
            {item.input !== 'welcome' && (
              <div className="terminal-input-line">
                <span className="terminal-prompt">➜</span>
                <span className="terminal-prompt-location">~</span>
                <span className="terminal-command">{item.input}</span>
              </div>
            )}
            <div className="terminal-output">
              {Array.isArray(item.output) ? (
                item.output.map((line, i) => (
                  <div key={i} className="terminal-output-line">
                    {line}
                  </div>
                ))
              ) : (
                <div className="terminal-output-line">{item.output}</div>
              )}
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="terminal-input-form">
          <div className="terminal-input-line">
            <span className="terminal-prompt">➜</span>
            <span className="terminal-prompt-location">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
