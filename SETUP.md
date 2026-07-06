# Guía de Setup y Personalización - Portfolio Marko Pamich

## ✅ Estado Actual del Proyecto

Tu portfolio está **completamente desarrollado** con todas las funcionalidades implementadas:

### Implementado:
- ✅ Sistema de diseño Matrix (negro/verde neón)
- ✅ Header responsive con navegación
- ✅ Hero Section con efecto typing
- ✅ About Section (enfoque combinado)
- ✅ Skills Section con animaciones
- ✅ Projects Section (Auca y Mateicos)
- ✅ Services Section
- ✅ **Terminal Interactivo IA** (elemento distintivo)
- ✅ Contact Section con formulario funcional
- ✅ Footer completo
- ✅ SEO optimizado
- ✅ Completamente responsive

## 📋 Pasos Pendientes para Lanzamiento

### 1. Agregar tu Foto Profesional

**Ubicación:** `/public/images/profile.jpg`

La sección About tiene un placeholder para tu foto. Para agregarlo:

```bash
# Coloca tu foto profesional en esta ubicación:
public/images/profile.jpg
```

Luego edita `src/components/sections/About.astro` líneas 23-41 y reemplaza el div placeholder con:

```astro
<img
  src="/images/profile.jpg"
  alt="Marko Pamich"
  class="w-full h-full object-cover rounded-lg"
/>
```

**Requisitos de la foto:**
- Formato: JPG o WebP
- Tamaño recomendado: 800x800px
- Peso: < 200KB (optimizar si es necesario)
- Estilo: Fondo profesional, buena iluminación

### 2. Agregar Imágenes de Proyectos

**Ubicación:** `/public/images/projects/`

Necesitas agregar las capturas de pantalla de tus proyectos:

```bash
# Estructura:
public/images/projects/
├── auca.webp
└── mateicos.webp
```

**Cómo crear las imágenes:**
1. Abre cada proyecto en el navegador
2. Toma una screenshot de la página principal
3. Optimiza con https://squoosh.app/ (convertir a WebP)
4. Tamaño recomendado: 1200x800px
5. Peso: < 150KB

**Alternativa temporal:**
Si no tienes las capturas aún, el diseño tiene emojis de fallback que se ven profesionales.

### 3. Crear Imagen OG para Redes Sociales (Opcional)

**Ubicación:** `/public/og-image.png`

Esta imagen se muestra cuando compartes tu portfolio en redes sociales.

**Especificaciones:**
- Tamaño: 1200x630px
- Formato: PNG o JPG
- Contenido sugerido:
  - Tu nombre "MARKO PAMICH"
  - Subtítulo: "Desarrollador Full Stack & IA"
  - Fondo con estética Matrix
  - Tu foto (opcional)

**Herramientas recomendadas:**
- Canva (templates de OG image)
- Figma
- Photoshop

### 4. Personalizar Contenido (Opcional)

Si quieres ajustar textos, todos los contenidos editables están en:

**Biografía:** `src/components/sections/About.astro` (líneas 56-75)

**Servicios:** `src/components/sections/Services.astro` (líneas 3-45)

**Proyectos:** `src/data/projects.json`

**Skills:** `src/data/skills.json`

### 5. Configurar Formulario de Contacto

El formulario usa FormSubmit.co (gratuito, sin configuración de servidor).

**IMPORTANTE:** El primer mensaje enviado requerirá confirmación:
1. Ve a la sección de contacto en tu portfolio
2. Envía un mensaje de prueba
3. Revisa tu email (markodevcode@gmail.com)
4. Haz click en el link de confirmación de FormSubmit
5. A partir de ahí, todos los mensajes llegarán directamente

**Para cambiar el email:** Edita `src/components/ui/ContactForm.tsx` línea 23.

### 6. Testing Local

Antes de hacer deploy, prueba localmente:

```bash
# Asegúrate de tener espacio en disco suficiente
# Luego ejecuta:
npm run dev
```

Abre `http://localhost:4321/` y prueba:
- ✅ Navegación entre secciones
- ✅ Terminal interactivo (escribe "help" y prueba comandos)
- ✅ Modo chat del terminal (escribe "chat")
- ✅ Formulario de contacto
- ✅ Links a proyectos y redes sociales
- ✅ Responsive en móvil (DevTools > Toggle device toolbar)

### 7. Deploy a Vercel

**Opción A: Deploy desde GitHub (Recomendado)**

1. Crea un repositorio en GitHub
2. Haz commit y push de todo el código:

```bash
git init
git add .
git commit -m "feat: Portfolio completo con terminal IA"
git remote add origin https://github.com/Markopamichh/portfolio-nuevo.git
git push -u origin main
```

3. Ve a [vercel.com](https://vercel.com)
4. Click en "Import Project"
5. Conecta tu repositorio de GitHub
6. Vercel detectará automáticamente que es un proyecto Astro
7. Click en "Deploy"
8. ¡Listo! En 2-3 minutos tendrás tu URL

**Opción B: Deploy directo con CLI**

```bash
# Instala Vercel CLI
npm install -g vercel

# Deploy
vercel

# Sigue las instrucciones en pantalla
```

**Tu URL será algo como:** `https://portfolio-marko-[random].vercel.app`

### 8. Configurar Dominio Personalizado (Opcional)

Si tienes un dominio (ej: `markopamich.com`):

1. En Vercel, ve a tu proyecto
2. Settings > Domains
3. Agrega tu dominio
4. Sigue las instrucciones para configurar DNS

## 🎨 Personalización Avanzada

### Cambiar Esquema de Colores

Si quieres cambiar del tema Matrix a otros colores:

**Archivo:** `src/styles/global.css` (líneas 8-24)

```css
/* Ejemplo: Tema Cyberpunk (Cyan/Magenta) */
--color-primary: #00ffff;        /* Cyan */
--color-primary-dark: #008b8b;
--color-primary-light: #7fffd4;
```

**Archivo:** `tailwind.config.mjs` (líneas 8-14)

### Agregar Más Proyectos

Edita `src/data/projects.json`:

```json
{
  "id": 3,
  "title": "Nuevo Proyecto",
  "description": "Descripción del proyecto...",
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "tech": ["React", "Node.js"],
  "image": "/images/projects/nuevo.webp",
  "liveUrl": "https://proyecto.com",
  "githubUrl": "https://github.com/user/proyecto",
  "featured": false
}
```

### Personalizar Respuestas del Terminal IA

Las respuestas están en `src/components/ui/Terminal.tsx` en la función `getAIResponse()` (línea 26+).

Puedes agregar más patrones de respuesta:

```typescript
// Ejemplo: Agregar respuesta para "hobbies"
if (q.includes('hobbies') || q.includes('pasatiempos')) {
  return 'Además de programar, me gusta [tus hobbies]. ¿Te interesa saber más sobre algún tema en particular?';
}
```

## 🐛 Solución de Problemas Comunes

### Error de espacio en disco
```
Error: There is not enough space on the disk
```
**Solución:** Libera espacio en disco (al menos 2GB) antes de correr `npm run dev`.

### Errores de TypeScript
Si ves errores de tipos, ejecuta:
```bash
npm install --save-dev @types/node
```

### Formulario no envía emails
1. Verifica que hayas confirmado el email en FormSubmit
2. Revisa la consola del navegador para errores
3. Asegúrate de que el email en `ContactForm.tsx` sea correcto

### Imágenes no se cargan
- Verifica que las rutas comiencen con `/` (ej: `/images/project.jpg`)
- Archivos deben estar en `/public/images/`
- Los archivos en `/public/` se sirven desde la raíz

## 📚 Recursos Útiles

- [Astro Docs](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [FormSubmit](https://formsubmit.co/)
- [Vercel Docs](https://vercel.com/docs)
- [Web.dev - Performance](https://web.dev/measure/)

## 🚀 Próximos Pasos Sugeridos

Una vez deployed:

1. ✅ Compartir el link en LinkedIn
2. ✅ Actualizar tu GitHub profile con el link
3. ✅ Poner el link en tu CV
4. ✅ Agregar Google Analytics (opcional)
5. ✅ Configurar dominio personalizado
6. ✅ Obtener feedback de otros developers
7. ✅ Iterar y mejorar basándote en métricas

## 💡 Tips Finales

- **Testing:** Prueba el terminal extensivamente, es tu elemento distintivo
- **Mobile:** Asegúrate que se vea perfecto en móvil (ahí entran el 70% de usuarios)
- **Performance:** Usa Lighthouse en DevTools para medir performance
- **SEO:** Una vez deployed, verifica con https://search.google.com/search-console
- **Contenido:** Mantén actualizado - agrega proyectos nuevos cada mes

---

**¿Necesitas ayuda?** Revisa el README.md para más información sobre la estructura del proyecto.

**¡Tu portfolio está listo para impresionar a reclutadores! 🚀**
