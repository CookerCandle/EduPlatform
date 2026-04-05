import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Trash2, Copy, Check } from 'lucide-react';
import AISuggestions from '../components/AISuggestions';

export default function AIPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "Hi! 👋 I'm your AI learning assistant. Ask me anything about your courses, schedule, or any topic you'd like to learn about!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('http://localhost:8000/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          content: data.reply || "Sorry, I couldn't process that.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          content: '⚠️ Could not connect to the server. Make sure the backend is running.',
        },
      ]);
    } finally {
      setIsTyping(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (prompt, keyword) => {
    setInput('');
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: prompt,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    fetch('http://localhost:8000/ai/ai_helper', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: keyword }),
    })
        .then((res) => res.json())
        .then((data) => {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              role: 'assistant',
              content: data.reply || "Sorry, I couldn't process that.",
            },
          ]);
        })
        .catch(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              role: 'assistant',
              content: '⚠️ Could not connect to the server. Make sure the backend is running.',
            },
          ]);
        })
        .finally(() => {
          setIsTyping(false);
          inputRef.current?.focus();
        });
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        role: 'assistant',
        content: "Chat cleared! How can I help you? 😊",
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 mb-2">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="p-2.5 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20"
          >
            <Sparkles size={22} className="text-white" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold text-journal-text dark:text-white">
              AI Assistant
            </h1>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Powered by EduPlatform
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={clearChat}
          className="p-2.5 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          title="Clear chat"
        >
          <Trash2 size={18} />
        </motion.button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 space-y-4 hide-scrollbar">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {/* Avatar */}
              <div
                className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center shadow-sm ${
                  msg.role === 'assistant'
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                    : 'bg-journal-accent dark:bg-night-neon-blue text-white dark:text-night-bg'
                }`}
              >
                {msg.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
              </div>

              {/* Bubble */}
              <div
                className={`group relative max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-journal-text dark:bg-night-neon-blue text-white dark:text-night-bg rounded-tr-md'
                    : 'bg-white dark:bg-night-surface text-journal-text dark:text-gray-200 border border-gray-100 dark:border-white/5 rounded-tl-md shadow-sm'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>

                {/* Copy button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className={`absolute -bottom-3 ${
                    msg.role === 'user' ? 'left-2' : 'right-2'
                  } opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-lg bg-white dark:bg-night-surface border border-gray-100 dark:border-white/10 shadow-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300`}
                  onClick={() => handleCopy(msg.content, msg.id)}
                  title="Copy"
                >
                  {copiedId === msg.id ? <Check size={12} /> : <Copy size={12} />}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Suggestions */}
        {messages.length <= 1 && !isTyping && (
          <AISuggestions onSelect={handleSuggestion} />
        )}

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-sm">
                <Bot size={16} />
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-white dark:bg-night-surface border border-gray-100 dark:border-white/5 shadow-sm">
                <div className="flex gap-1.5 items-center h-5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-500"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="px-4 py-3 mt-2">
        <div className="flex items-end gap-2 p-2 rounded-2xl bg-white dark:bg-night-surface border-2 border-gray-100 dark:border-white/10 focus-within:border-purple-400 dark:focus-within:border-night-neon-blue transition-colors shadow-sm">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            rows={1}
            className="flex-1 resize-none bg-transparent outline-none text-sm text-journal-text dark:text-white placeholder:text-gray-400 px-2 py-2 max-h-32"
            style={{ minHeight: '40px' }}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = Math.min(e.target.scrollHeight, 128) + 'px';
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`p-2.5 rounded-xl transition-all ${
              input.trim() && !isTyping
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20'
                : 'bg-gray-100 dark:bg-white/5 text-gray-300 dark:text-gray-600 cursor-not-allowed'
            }`}
          >
            <Send size={18} />
          </motion.button>
        </div>
        <p className="text-center text-[11px] text-gray-400 dark:text-gray-600 mt-2">
          AI can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
}