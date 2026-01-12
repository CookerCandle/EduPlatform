import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiHome,
  HiBookOpen,
  HiCalendar,
  HiPencilAlt,
  HiCog,
  HiLogout
} from 'react-icons/hi';

import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { id: 'home', icon: HiHome, label: 'Journal', color: '#FF8A80', path: '/home' },
  { id: 'courses', icon: HiBookOpen, label: 'Courses', color: '#82B1FF', path: '/courses' },
  { id: 'schedule', icon: HiCalendar, label: 'Schedule', color: '#FFD54F', path: '/schedule' },
];

export default function Sidebar({ onNavigate }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (path) => {
    navigate(path);
    
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <nav className="flex flex-col w-72 h-screen sticky top-0 p-6 
      bg-journal-mint/30 dark:bg-night-bg 
      backdrop-blur-xl border-r border-gray-200/50 dark:border-white/5 
      transition-all duration-500 shadow-xl z-30">

      {/* Логотип */}
      <div className="mb-12 px-4 py-2">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tight text-journal-text dark:text-night-text flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="p-2 bg-journal-accent dark:bg-night-neon-blue rounded-lg shadow-lg">
            <span className="text-white dark:text-night-bg text-xl"></span>
          </div>
          <span className="font-sans">EduPlatform</span>
        </motion.h1>
      </div>

      {/* Навигация */}
      <div className="flex-1 space-y-1.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`
                relative w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left 
                transition-all duration-300 group
                ${isActive
                  ? 'text-journal-text dark:text-night-neon-blue font-bold shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-night-surface/50'
                }
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabHighlight"
                  className="absolute inset-0 rounded-2xl bg-white dark:bg-night-surface border border-gray-100 dark:border-white/10"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                />
              )}

              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 w-1.5 h-6 rounded-r-full"
                  style={{ backgroundColor: item.color }}
                />
              )}

              <span className="relative z-10 flex items-center gap-4 w-full">
                <Icon
                  size={22}
                  className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-journal-accent dark:text-night-neon-blue' : ''
                    }`}
                />
                <span className="font-medium tracking-wide">{item.label}</span>

                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="mt-auto pt-6 border-t border-gray-200/50 dark:border-white/10 space-y-2">
        <button
          className="group w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:text-red-500 transition-all"
          onClick={() => {
            navigate('/');
          }}
        >
          <HiLogout size={22} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </nav>
  );
}