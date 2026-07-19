import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import InputField from '../../ui/InputField';
import TextArea from '../../ui/TextArea';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const getWhatsappUrl = () => {
    const timeString = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const formattedText =
      `💼 *NEW PORTFOLIO INQUIRY*\n` +
      `──────────────────────────\n\n` +
      `📌 *Subject*: ${subject}\n\n` +
      `👤 *Client / Sender*: ${name}\n` +
      `📧 *Email*: ${email}\n` +
      `🕒 *Timestamp*: ${timeString}\n\n` +
      `💬 *Message Detail*:\n` +
      `"${message}"\n\n` +
      `──────────────────────────\n` +
      `_Sent via Mirshad Hussain Portfolio_`;

    return `https://wa.me/94776559959?text=${encodeURIComponent(formattedText)}`;
  };

  const handleSubmit = () => {
    setSending(true);

    const whatsappUrl = getWhatsappUrl();

    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSent(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="bg-bg-card border border-border rounded-none p-8">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-8 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center text-accent text-3xl mb-4">
              <FaWhatsapp />
            </div>
            <h3 className="font-heading font-black text-2xl text-white m-0 mb-3">
              Redirecting to WhatsApp!
            </h3>
            <p className="font-mono text-xs text-text-muted m-0 mb-6 max-w-sm leading-relaxed">
              Your message has been formatted into a structured WhatsApp message and opened in a new tab.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white font-mono text-xs font-bold tracking-wider px-5 py-3 no-underline hover:bg-accent-hover transition-colors"
              >
                <FaWhatsapp /> Re-open WhatsApp
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="bg-bg-surface border border-border text-text-muted hover:text-white font-mono text-xs tracking-wider px-5 py-3 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <InputField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <InputField
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <TextArea
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full mt-2 bg-accent text-white hover:bg-accent-hover active:scale-[0.99] focus:ring-2 focus:ring-accent transition-all duration-200 border-none rounded-none p-4 text-xs font-mono font-bold tracking-widest uppercase cursor-pointer disabled:cursor-default disabled:opacity-70 flex items-center justify-center gap-2.5"
            >
              <FaWhatsapp className="text-base" />
              {sending ? 'Formatting Message...' : 'Send via WhatsApp →'}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
