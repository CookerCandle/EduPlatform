import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';

import { DarkModeToggle } from "../components/DarkModeToggle";
import Sidebar from "../components/Sidebar";
import { UserProfile } from '../components/UserProfile';

export default function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex h-screen w-full bg-white dark:bg-night-bg transition-colors duration-500 overflow-hidden font-sans relative">
      
      {/* --- DESKTOP SIDEBAR --- */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* --- MOBILE SIDEBAR (Drawer) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop (затемнение) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Drawer Container */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-72 lg:hidden"
            >
              <Sidebar onNavigate={closeMenu} />
              
              {/* Кнопка закрытия внутри Drawer */}
              <button 
                onClick={closeMenu}
                className="absolute top-6 right-[-50px] p-2 bg-journal-accent text-white rounded-full lg:hidden shadow-lg"
              >
                <FaXmark size={20} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto custom-scrollbar">
        
        <header className="flex justify-between items-center p-4 md:p-6 w-full sticky top-0 bg-white/80 dark:bg-night-bg/80 backdrop-blur-md z-50">
          
          {/* Бургер-кнопка (только на мобильных) */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-3 rounded-2xl bg-journal-mint dark:bg-night-surface text-journal-accent dark:text-night-neon-blue shadow-soft"
          >
            <FaBarsStaggered size={20} />
          </motion.button>

          <div className="flex items-center gap-3 md:gap-4 ml-auto">
            <DarkModeToggle />

            {/* Кнопка профиля */}
            <UserProfile />
          </div>
        </header>

        {/* Контент под кнопками */}
        <main className="p-4  pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}