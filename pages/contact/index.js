import { useState } from 'react';
import { useRouter } from 'next/router';
import { HiArrowRight } from 'react-icons/hi2';

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mdorvwvj', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Envio bem-sucedido, redireciona para a página inicial
        router.push('/');
      } else {
        // Alguma coisa deu errado no envio, pode tratar de acordo
        console.error('Erro no envio do formulário');
      }
    } catch (error) {
      console.error('Erro no envio do formulário', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">Let&apos;s <span className="text-accent">connect</span></h2>
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="e-mail"
                className="input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              className="input"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="message"
              className="textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:border-accent group"
              disabled={isSubmitting}
            >
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let&apos;s talk</span>
              <HiArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
