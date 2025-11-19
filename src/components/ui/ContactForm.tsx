import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Using FormSubmit.co (free form submission service)
      const response = await fetch('https://formsubmit.co/ajax/markodevcode@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje de ${formData.name} desde Portfolio`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Hubo un error al enviar el mensaje. Por favor, intenta contactarme directamente por email.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-mono text-sm text-matrix mb-2">
          Nombre Completo:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black border-2 border-border-light text-gray-300 font-mono text-sm rounded focus:border-matrix focus:outline-none transition-colors"
          placeholder="Tu nombre"
          disabled={status === 'loading'}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-mono text-sm text-matrix mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black border-2 border-border-light text-gray-300 font-mono text-sm rounded focus:border-matrix focus:outline-none transition-colors"
          placeholder="tu@email.com"
          disabled={status === 'loading'}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-mono text-sm text-matrix mb-2">
          Mensaje:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-black border-2 border-border-light text-gray-300 font-mono text-sm rounded focus:border-matrix focus:outline-none transition-colors resize-none"
          placeholder="Cuéntame sobre tu proyecto..."
          disabled={status === 'loading'}
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-matrix/10 border-l-4 border-matrix rounded">
          <p className="text-matrix font-mono text-sm">
            ✓ Mensaje enviado con éxito! Te responderé pronto.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border-l-4 border-red-500 rounded">
          <p className="text-red-400 font-mono text-sm">
            ✗ {errorMessage}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`
          w-full px-6 py-4 font-mono font-semibold text-lg rounded
          transition-all duration-300
          ${
            status === 'loading'
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-transparent border-2 border-matrix text-matrix hover:bg-matrix hover:text-black hover:shadow-glow-matrix'
          }
        `}
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-3">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </span>
        ) : (
          '$ enviar_mensaje'
        )}
      </button>

      {/* Alternative Contact */}
      <p className="text-center text-sm text-gray-500 font-mono mt-4">
        O envíame un email directo a{' '}
        <a href="mailto:markodevcode@gmail.com" className="text-matrix hover:underline">
          markodevcode@gmail.com
        </a>
      </p>
    </form>
  );
}
