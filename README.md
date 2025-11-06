# Portfolio Innovador - Full Stack Developer & IA Automation Specialist

Portfolio profesional moderno construido con Astro, React, TypeScript y Tailwind CSS. Diseñado para destacar habilidades en desarrollo full stack y automatizaciones con inteligencia artificial.

## ✨ Características

- 🚀 **Ultra Rápido** - Construido con Astro para rendimiento óptimo
- 🎨 **Diseño Moderno** - UI/UX atractiva con animaciones fluidas
- 🤖 **IA Interactiva** - Chatbot funcional y terminal interactiva
- 📱 **Responsive** - Perfecto en todos los dispositivos
- 🌙 **Dark Mode** - Soporte para tema claro y oscuro
- ⚡ **SEO Optimizado** - Configurado para mejor posicionamiento

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321/`

### Build para Producción

```bash
npm run build
npm run preview
```

## 📂 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/        # Componentes Astro y React
│   │   ├── layout/       # Header, Footer, Navigation
│   │   ├── sections/     # Hero, About, Services, etc.
│   │   ├── ui/           # Componentes reutilizables
│   │   └── interactive/  # Terminal, Chatbot, ThemeToggle
│   ├── data/             # JSON con skills, services
│   ├── layouts/          # BaseLayout
│   ├── pages/            # Páginas del sitio
│   └── styles/           # CSS global y animaciones
├── public/               # Assets estáticos
└── package.json
```

## 🎨 Personalización

### Información Personal

1. **BaseLayout.astro** - Meta tags y SEO
2. **Footer.astro** - Links sociales
3. **Contact.astro** - Información de contacto
4. **data/skills.json** - Tus habilidades
5. **data/services.json** - Tus servicios

### Colores

Edita las variables CSS en `src/styles/global.css`:
- Primary: #6366f1 (Indigo)
- Secondary: #8b5cf6 (Purple)
- Accent: #14b8a6 (Teal)

## 🚀 Deployment

### Vercel (Recomendado)
1. Push a GitHub
2. Importa en Vercel
3. Deploy automático

### Netlify
1. Push a GitHub
2. Importa en Netlify
3. Build: `npm run build`
4. Publish: `dist`

## 📝 Secciones

- **Hero** - Título animado, terminal interactiva, partículas
- **About** - Skills con barras animadas
- **Services** - Cards 3D con glassmorphism
- **Projects** - Grid con overlay y filtros
- **AI Showcase** - Chatbot funcional
- **Testimonials** - Carousel de testimonios
- **Contact** - Formulario con validación

## 📧 Contacto

Actualiza tu información de contacto en los archivos correspondientes.

---

Hecho con ❤️ usando Astro & React
