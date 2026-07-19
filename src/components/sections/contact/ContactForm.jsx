import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InputField from '../../ui/InputField';
import TextArea from '../../ui/TextArea';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="bg-bg-dark border border-border-dark rounded-2xl p-8">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-8"
          >
            <div className="text-6xl mb-4">✅</div>
            <h3 className="font-heading font-bold text-2xl text-white m-0 mb-2">
              Message Sent!
            </h3>
            <p className="font-body text-sm text-text-muted-dark m-0">
              Thanks for reaching out. I'll reply within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <InputField label="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            <TextArea label="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />

            <button
              type="submit"
              disabled={sending}
              className="w-full mt-2 bg-accent-secondary hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-accent transition-all duration-200 text-white border-none rounded-[10px] p-3.5 text-[15px] font-medium font-heading cursor-pointer disabled:cursor-default disabled:opacity-70 disabled:hover:scale-100"
            >
              {sending ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
