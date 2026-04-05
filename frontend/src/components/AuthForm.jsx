import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, Github } from "lucide-react";
import { useNavigate, Link } from 'react-router-dom';

import {  getUserData, updateUserData } from '../utils/userStorage';

export default function AuthForm({ type, onSubmit }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const existingData = JSON.parse(getUserData());

      if (type === 'login') {
        if (!existingData || existingData.email !== formData.email || existingData.password !== formData.password) {
          setErrorMessage('Invalid email or password.');
          setIsLoading(false);
          return;
        }
      }

      const newData = {
        userName: type === 'signup' ? formData.name : (existingData?.userName || 'Jamoliddin'),
        email: formData.email,
        password: formData.password
      }
      updateUserData(newData);
      setIsLoading(false);

      if (typeof onSubmit === 'function') {
        onSubmit(formData);
      }

      navigate('/home');
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Ошибки */}
      {errorMessage && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 text-sm text-red-500 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl text-center font-medium"
        >
          {errorMessage}
        </motion.div>
      )}
      {/* Поле Имени (только для регистрации) */}
      {type === 'signup' && (
        <div className="space-y-1">
          <label className="text-sm font-bold text-journal-text dark:text-white ml-1">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              name="name" 
              placeholder="Jane Doe" 
              required 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full pl-12 pr-4 py-3 rounded-xl 
                bg-gray-50 dark:bg-white/5 
                border-2 border-gray-100 dark:border-white/10 
                focus:border-cat-blue dark:focus:border-night-neon-blue 
                focus:outline-none focus:ring-4 focus:ring-cat-blue/10 dark:focus:ring-night-neon-blue/10 
                transition-all text-journal-text dark:text-white placeholder:text-gray-400" 
            />
          </div>
        </div>
      )}

      {/* Поле Email */}
      <div className="space-y-1">
        <label className="text-sm font-bold text-journal-text dark:text-white ml-1">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="email" 
            name="email" 
            placeholder="you@example.com" 
            required 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full pl-12 pr-4 py-3 rounded-xl 
              bg-gray-50 dark:bg-white/5 
              border-2 border-gray-100 dark:border-white/10 
              focus:border-cat-blue dark:focus:border-night-neon-blue 
              focus:outline-none focus:ring-4 focus:ring-cat-blue/10 dark:focus:ring-night-neon-blue/10 
              transition-all text-journal-text dark:text-white placeholder:text-gray-400" 
          />
        </div>
      </div>

      {/* Поле Пароля */}
      <div className="space-y-1">
        <div className="flex justify-between items-center ml-1">
          <label className="text-sm font-bold text-journal-text dark:text-white">
            Password
          </label>
          {type === 'login' && (
            <Link to="/home" className="text-xs text-journal-accent dark:text-night-neon-pink hover:underline">
              Forgot?
            </Link>
          )}
        </div>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type={showPassword ? 'text' : 'password'} 
            name="password" 
            placeholder="••••••••" 
            required 
            value={formData.password} 
            onChange={handleChange} 
            className="w-full pl-12 pr-12 py-3 rounded-xl 
              bg-gray-50 dark:bg-white/5 
              border-2 border-gray-100 dark:border-white/10 
              focus:border-cat-blue dark:focus:border-night-neon-blue 
              focus:outline-none focus:ring-4 focus:ring-cat-blue/10 dark:focus:ring-night-neon-blue/10 
              transition-all text-journal-text dark:text-white placeholder:text-gray-400" 
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Кнопка отправки */}
      <motion.button 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }} 
        type="submit" 
        disabled={isLoading} 
        className="w-full py-3.5 rounded-xl 
          bg-journal-text dark:bg-night-neon-blue 
          text-white dark:text-night-bg font-bold 
          shadow-lg shadow-journal-text/20 dark:shadow-night-neon-blue/30 
          hover:shadow-xl transition-all flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          type === 'login' ? 'Sign In' : 'Create Account'
        )}
      </motion.button>

      {/* Разделитель "Or continue with" */}
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white dark:bg-night-surface text-gray-500 dark:text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      {/* Социальные кнопки */}
      <div className="grid grid-cols-2 gap-4">
        <motion.button 
          whileHover={{ y: -2 }} 
          whileTap={{ scale: 0.98 }} 
          type="button" 
          className="flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 
            border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 
            transition-colors text-journal-text dark:text-white font-medium"
        >
          <svg className="text-red-500" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
          <span>Google</span>
        </motion.button>
        <motion.button 
          whileHover={{ y: -2 }} 
          whileTap={{ scale: 0.98 }} 
          type="button" 
          className="flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 
            border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 
            transition-colors text-journal-text dark:text-white font-medium"
        >
          <Github size={20} />
          <span>GitHub</span>
        </motion.button>
      </div>
    </form>
  );
}