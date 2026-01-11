import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FaGithub, FaGoogle } from "react-icons/fa6";
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
            <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
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
          <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
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
          <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
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
            {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
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
          <FaGoogle size={18} className="text-red-500" />
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
          <FaGithub size={20} />
          <span>GitHub</span>
        </motion.button>
      </div>
    </form>
  );
}