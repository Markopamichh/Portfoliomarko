import {
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiGit,
  SiGithub,
  SiVercel,
  SiWhatsapp,
} from 'react-icons/si';
import { FaRobot, FaBolt, FaMobileAlt, FaPlug, FaCode } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

interface TechIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, any> = {
  // Frontend
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Astro': SiAstro,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'HTML/CSS': SiHtml5,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,

  // Backend
  'Node.js': SiNodedotjs,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'REST APIs': FaPlug,

  // IA & Automatización
  'WhatsApp Bots': SiWhatsapp,
  'Chatbots': FaRobot,
  'OpenAI API': SiOpenai,
  'Automatizaciones': FaBolt,

  // Tools & DevOps
  'Git & GitHub': SiGithub,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Vercel': SiVercel,
  'VS Code': VscCode,
  'Responsive Design': FaMobileAlt,
};

export default function TechIcon({ name, className = '' }: TechIconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Fallback to emoji if icon not found
    return <span className={className}>⚙️</span>;
  }

  return <IconComponent className={className} />;
}
