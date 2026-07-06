import { useState, useEffect } from 'react';

const roles = [
  'Desarrollador Full Stack',
  'Especialista en Automatizaciones',
  'Creador de Chatbots IA',
  'Desarrollador WhatsApp Bots',
];

export default function TypingEffect() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentRole.substring(0, currentText.length - 1));
          setTypingSpeed(75);
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, currentRoleIndex]);

  return (
    <h2 className="text-2xl md:text-4xl font-mono">
      <span className="text-matrix">$ </span>
      <span className="text-gray-300">{currentText}</span>
      <span className="text-matrix animate-blink">_</span>
    </h2>
  );
}
