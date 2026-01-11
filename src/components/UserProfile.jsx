import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiUser, HiOutlinePencilSquare } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import { getUserData } from '../utils/userStorage';

import { useNavigate } from 'react-router-dom';

export function UserProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState({ userName: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const dataString = getUserData();
        if (dataString) {
            try {
                const parsedData = JSON.parse(dataString);
                setUser(parsedData);
            } catch (e) {
                console.error("Ошибка парсинга данных пользователя", e);
            }
        }
    }, []);

    const handleClose = () => setIsOpen(false);
    const handleDelete = () => {
        localStorage.removeItem('userData');
        handleClose();
        navigate('/');
    }
    return (
        <div className="relative z-50">
            {/* Кнопка-триггер (Ваш код) */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`
          w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
          bg-journal-mint dark:bg-night-surface 
          border-2 transition-colors duration-300
          ${isOpen
                        ? 'border-journal-accent dark:border-night-neon-blue' 
                        : 'border-white dark:border-night-neon-blue/30'
                    }
          text-journal-accent dark:text-night-neon-blue
          shadow-soft dark:shadow-neon
        `}
            >
                <HiUser size={18} className="md:text-[20px]" />
            </motion.button>

            {/* Всплывающее окно */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Прозрачная подложка на весь экран для закрытия при клике снаружи */}
                        <div
                            className="fixed inset-0 z-40 cursor-default"
                            onClick={handleClose}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 top-full mt-4 w-72 bg-white dark:bg-night-surface rounded-3xl shadow-xl border-2 border-gray-100 dark:border-white/10 z-50 overflow-hidden"
                        >
                            {/* Декоративный элемент (скотч) */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-journal-mint/50 dark:bg-white/10 rotate-2 backdrop-blur-sm rounded-sm" />

                            {/* Шапка профиля */}
                            <div className="p-6 text-center border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
                                <div className="w-16 h-16 mx-auto bg-journal-accent dark:bg-night-neon-blue text-white dark:text-night-bg rounded-full flex items-center justify-center text-2xl font-black mb-3 shadow-md">
                                    {user.userName ? user.userName.charAt(0).toUpperCase() : 'U'}
                                </div>
                                <h3 className="font-bold text-lg text-journal-text dark:text-white truncate">
                                    {user.userName}
                                </h3>
                                <p className="text-sm text-gray-400 dark:text-gray-500 truncate">
                                    {user.email}
                                </p>
                            </div>

                            {/* Меню действий */}
                            <div className="p-2">
                                <button
                                    onClick={() => {
                                        handleClose();
                                    }}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition-colors text-sm font-medium"
                                >
                                    <HiOutlinePencilSquare size={20} />
                                    Edit Profile
                                </button>

                                <button
                                    onClick={handleDelete}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-colors text-sm font-medium"
                                >
                                    <HiTrash size={20} />
                                    Delete

                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}