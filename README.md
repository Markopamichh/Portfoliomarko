# Portfolio Marko Pamich

Portfolio profesional de desarrollador Full Stack especializado en automatizaciones con IA.

## 🚀 Características

- **Diseño Matrix**: Tema oscuro con estética de terminal, colores verdes neón
- **Terminal Interactivo IA**: Elemento distintivo con comandos tradicionales y chat conversacional
- **Completamente Responsive**: Mobile-first design
- **Optimizado para SEO**: Meta tags, Open Graph, Schema.org
- **Performance**: Construido con Astro para carga ultra-rápida

## 🛠️ Stack Tecnológico

- **Framework**: Astro 5.0
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion + CSS animations
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── images/
│   │   └── projects/      # Imágenes de proyectos
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Hero, About, Skills, etc.
│   │   └── ui/            # Terminal, ContactForm, etc.
│   ├── data/              # projects.json, skills.json
│   ├── layouts/           # BaseLayout.astro
│   ├── pages/             # index.astro
│   └── styles/            # global.css
└── package.json
```

## 🚦 Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Personalización

### Colores
Edita las variables en `src/styles/global.css` o `tailwind.config.mjs`:
- Primary: `#00ff41` (verde matrix)
- Background: `#000000` (negro)
- Borders: `#003b00` (verde oscuro)

### Contenido
1. **Proyectos**: Edita `src/data/projects.json`
2. **Skills**: Edita `src/data/skills.json`
3. **Foto**: Coloca tu foto en `/public/images/profile.jpg`
4. **Imágenes de proyectos**: Coloca en `/public/images/projects/`

### Terminal IA
El terminal en `src/components/ui/Terminal.tsx` incluye:
- Comandos básicos: `help`, `about`, `skills`, `projects`, `services`, `contact`
- Modo chat: `chat` o `chat <pregunta>`
- Las respuestas se pueden personalizar en la función `getAIResponse()`

## 📧 Formulario de Contacto

El formulario usa [FormSubmit.co](https://formsubmit.co/) (gratuito).

Para configurarlo:
1. Abre `src/components/ui/ContactForm.tsx`
2. Reemplaza `markodevcode@gmail.com` con tu email
3. El primer envío requiere confirmación via email

## 🌐 Deploy a Vercel

1. Push tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Deploy automático!

O usa el CLI:
```bash
npm install -g vercel
vercel
```

## 📝 SEO

- Edita meta tags en `src/layouts/BaseLayout.astro`
- Sitemap automático en `/sitemap-index.xml`
- Crea `/public/og-image.png` (1200x630px) para redes sociales

## 🎯 Características del Terminal

- Comandos Unix-like (`ls`, `pwd`, `clear`, `help`)
- Chat conversacional con IA
- Historial de comandos (↑ ↓)
- Auto-complete (Tab)
- Respuestas contextuales inteligentes

## 📄 Licencia

MIT - Siéntete libre de usar este portfolio como base para el tuyo!

---

Hecho con ❤️ por Marko Pamich
