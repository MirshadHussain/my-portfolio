import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes, FaUser, FaMagic } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_INSTRUCTION, generateLocalFallbackResponse } from '../../utils/chatbotKnowledge';

const QUICK_SUGGESTIONS = [
  "🚀 What projects has Mirshad built?",
  "⚡ What are Mirshad's tech skills?",
  "📬 How do I contact Mirshad?",
  "🎓 Tell me about his education"
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi! 👋 I'm Mirshad AI. Ask me anything about Mirshad's projects, skills, background, or how to get in touch!"
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, loading]);

  const handleSend = async (textToSend) => {
    const query = textToSend || input.trim();
    if (!query || loading) return;

    const userMsg = { id: Date.now().toString(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (apiKey && apiKey !== 'YOUR_GEMINI_API_KEY_HERE') {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: 'gemini-1.5-flash',
          systemInstruction: SYSTEM_INSTRUCTION
        });

        // Convert recent message history for context
        const history = messages
          .filter((m) => m.id !== 'welcome')
          .slice(-6)
          .map((m) => `${m.sender === 'user' ? 'User' : 'Assistant'}: ${m.text}`)
          .join('\n');

        const prompt = `${history}\nUser: ${query}\nAssistant:`;
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), sender: 'bot', text: responseText }
        ]);
      } else {
        // Smart fallback engine
        setTimeout(() => {
          const fallbackText = generateLocalFallbackResponse(query);
          setMessages((prev) => [
            ...prev,
            { id: (Date.now() + 1).toString(), sender: 'bot', text: fallbackText }
          ]);
          setLoading(false);
        }, 500);
        return;
      }
    } catch (err) {
      console.warn('Gemini API request error, using fallback:', err);
      const fallbackText = generateLocalFallbackResponse(query);
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'bot', text: fallbackText }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper to render bold text or linebreaks nicely
  const formatText = (content) => {
    return content.split('\n').map((line, idx) => {
      // Basic bold formatting **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} className="text-accent font-semibold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      return (
        <span key={idx} className="block mb-1">
          {formattedLine}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle Mirshad AI Assistant Chat"
          className="relative flex items-center gap-2 bg-bg-surface/90 border border-accent/60 text-accent hover:border-accent hover:bg-bg-card px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_0_20px_rgba(0,255,170,0.15)] backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent transition-colors cursor-pointer group"
        >
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-accent"></span>
          </span>
          <FaRobot className="text-base sm:text-lg text-accent group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-mono text-[11px] sm:text-xs tracking-wider uppercase font-bold text-white">
            {isOpen ? 'Close AI' : 'AI Assistant'}
          </span>
        </motion.button>
      </div>

      {/* Chat Window Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-16 sm:bottom-24 left-3 right-3 sm:left-auto sm:right-6 sm:w-[400px] h-[480px] sm:h-[540px] max-h-[75vh] sm:max-h-[80vh] z-50 bg-bg-surface/95 backdrop-blur-md border border-border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-bg-card border-b border-border px-5 py-4 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none bg-accent/10 border border-accent/40 flex items-center justify-center text-accent">
                  <FaMagic className="text-sm animate-pulse" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-white tracking-wide m-0 flex items-center gap-2">
                    Mirshad AI Assistant
                  </h3>
                  <p className="font-mono text-[10px] text-accent uppercase tracking-widest m-0 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Online & Ready
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Assistant"
                className="text-text-muted hover:text-white bg-transparent border-none cursor-pointer p-1 text-sm transition-colors focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs text-text-secondary leading-relaxed bg-bg-primary/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-none bg-accent/20 border border-accent/40 text-accent flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      <FaRobot />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] p-3 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-accent/15 border border-accent/40 text-white self-end'
                        : 'bg-bg-surface border border-border text-text-primary self-start'
                    }`}
                  >
                    {formatText(msg.text)}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-none bg-border text-text-muted flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      <FaUser />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-6 h-6 rounded-none bg-accent/20 border border-accent/40 text-accent flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                    <FaRobot />
                  </div>
                  <div className="bg-bg-surface border border-border p-3 text-xs text-text-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    <span className="font-mono text-[10px] uppercase text-text-subtle ml-1">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips */}
            {messages.length < 3 && (
              <div className="px-3 py-2 bg-bg-surface border-t border-border/50 flex flex-wrap gap-1.5 shrink-0">
                {QUICK_SUGGESTIONS.map((sug, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(sug.replace(/^[^\s]+\s/, ''))}
                    className="font-mono text-[10px] text-text-muted hover:text-accent bg-bg-card border border-border hover:border-accent/50 px-2 py-1 transition-colors text-left truncate cursor-pointer"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <div className="p-3 bg-bg-surface border-t border-border shrink-0">
              <div className="flex items-center gap-2 bg-bg-primary border border-border focus-within:border-accent transition-colors p-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Mirshad AI anything..."
                  className="flex-1 bg-transparent border-none text-white font-mono text-xs px-2 py-1.5 focus:outline-none placeholder:text-text-subtle"
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                  className="bg-accent text-bg-primary hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed p-2 border-none transition-colors cursor-pointer flex items-center justify-center shrink-0"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
