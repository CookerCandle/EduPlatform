import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AlignLeft, X, Home, BookOpen, Calendar, Bot, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { DarkModeToggle } from '../components/DarkModeToggle';

const navItems = [
  { icon: Home, label: 'Journal', path: '/home' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: Calendar, label: 'Schedule', path: '/schedule' },
];

export default function SecondLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full bg-white dark:bg-night-bg transition-colors duration-500 overflow-hidden font-sans">

      {/* --- DESKTOP SIDEBAR (compact) --- */}
      <nav className="hidden lg:flex flex-col w-20 h-screen sticky top-0 py-6 items-center
        bg-journal-mint/30 dark:bg-night-bg
        backdrop-blur-xl border-r border-gray-200/50 dark:border-white/5
        transition-all duration-500 shadow-xl z-30">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-3 mb-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg shadow-purple-500/20 cursor-pointer"
          onClick={() => navigate('/ai')}
        >
          <Bot size={22} className="text-white" />
        </motion.div>

        {/* Nav icons */}
        <div className="flex-1 flex flex-col items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(item.path)}
                className="p-3 rounded-xl text-gray-400 dark:text-gray-500 hover:text-journal-text dark:hover:text-white hover:bg-white/60 dark:hover:bg-night-surface/60 transition-all"
                title={item.label}
              >
                <Icon size={20} />
              </motion.button>
            );
          })}
        </div>

        {/* Bottom actions */}
        <div className="mt-auto flex flex-col items-center gap-3 pt-4 border-t border-gray-200/50 dark:border-white/10">
          <DarkModeToggle />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="p-3 rounded-xl text-gray-400 hover:text-red-500 transition-colors"
            title="Log Out"
          >
            <LogOut size={20} />
          </motion.button>
        </div>
      </nav>

      {/* --- MOBILE DRAWER --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-night-bg border-r border-gray-200/50 dark:border-white/5 p-6 lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg shadow-purple-500/20">
                  <Bot size={20} className="text-white" />
                </div>
                <span className="text-lg font-bold text-journal-text dark:text-white">AI Chat</span>
              </div>

              {/* Nav links */}
              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.path}
                      onClick={() => { navigate(item.path); setIsMobileMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-night-surface/50 transition-colors text-sm font-medium"
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Bottom */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div className="flex items-center justify-between">
                  <DarkModeToggle />
                </div>
                <button
                  onClick={() => navigate('/')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:text-red-500 transition-colors text-sm font-medium"
                >
                  <LogOut size={18} />
                  Log Out
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-[-50px] p-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full shadow-lg"
              >
                <X size={20} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Minimal header */}
        <header className="flex justify-between items-center px-4 py-3 lg:px-6 sticky top-0 bg-white/80 dark:bg-night-bg/80 backdrop-blur-md z-20">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-3 rounded-2xl bg-journal-mint dark:bg-night-surface text-journal-accent dark:text-night-neon-blue shadow-soft"
          >
            <AlignLeft size={20} />
          </motion.button>

          {/* Desktop: just dark mode toggle since sidebar has nav */}
          <div className="hidden lg:block" />

          <div className="flex items-center gap-3 ml-auto lg:hidden">
            <DarkModeToggle />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
