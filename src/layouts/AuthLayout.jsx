import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DoodleIcon } from '../components/DoodleIcon';
import { DarkModeToggle } from '../components/DarkModeToggle';

export default function AuthLayout({
  children,
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLinkTo
}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center 
      bg-journal-mint/30 dark:bg-night-bg transition-colors duration-500 
      p-4 relative overflow-hidden font-sans">
      
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-20">
          <DoodleIcon type="scribble" className="absolute top-20 left-20 w-32 h-32 text-cat-blue rotate-12" delay={0.2} />
          <DoodleIcon type="star" className="absolute bottom-20 right-20 w-24 h-24 text-cat-yellow -rotate-12" delay={0.4} />
          <DoodleIcon type="arrow" className="absolute top-40 right-40 w-20 h-20 text-cat-coral rotate-45" delay={0.6} />
          <DoodleIcon type="sparkle" className="absolute bottom-40 left-40 w-16 h-16 text-cat-purple" delay={0.8} />
          <DoodleIcon type="heart" className="absolute top-10 right-10 w-12 h-12 text-cat-pink -rotate-6" delay={1.0} />
          <DoodleIcon type="underline" className="absolute bottom-10 left-10 w-48 h-12 text-cat-green rotate-6" delay={1.2} />
          <DoodleIcon type="circle" className="absolute top-1/2 left-1/2 w-20 h-20 text-cat-orange -translate-x-1/2 -translate-y-1/2" delay={1.4} />
          <DoodleIcon type="star" className="absolute bottom-20 right-20 w-24 h-24 text-cat-yellow -rotate-12" delay={0.4} />
          <DoodleIcon type="arrow" className="absolute top-40 right-40 w-20 h-20 text-cat-coral rotate-45" delay={0.6} />
          <DoodleIcon type="sparkle" className="absolute bottom-40 left-40 w-16 h-16 text-cat-purple" delay={0.8} />
          <DoodleIcon type="heart" className="absolute top-10 right-10 w-12 h-12 text-cat-pink -rotate-6" delay={1.0} />
          <DoodleIcon type="underline" className="absolute bottom-10 left-10 w-48 h-12 text-cat-green rotate-6" delay={1.2} />
          <DoodleIcon type="circle" className="absolute top-1/2 left-1/2 w-20 h-20 text-cat-orange -translate-x-1/2 -translate-y-1/2" delay={1.4} />
          <DoodleIcon type="scribble" className="absolute top-1/3 right-1/4 w-28 h-28 text-cat-blue -rotate-6" delay={1.6} />
          <DoodleIcon type="star" className="absolute top-1/4 left-1/3 w-20 h-20 text-cat-yellow rotate-12" delay={1.8} />
          <DoodleIcon type="heart" className="absolute bottom-1/3 right-1/3 w-16 h-16 text-cat-pink rotate-45" delay={2.0} />
          <DoodleIcon type="sparkle" className="absolute top-2/3 right-1/4 w-12 h-12 text-cat-purple -rotate-12" delay={2.2} />
          <DoodleIcon type="arrow" className="absolute bottom-1/4 left-1/4 w-24 h-24 text-cat-coral rotate-6" delay={2.4} />
        </div>

        {/* Верхняя панель управления */}
      <div className="absolute top-6 right-6 z-10">
        <DarkModeToggle />
      </div>

      <div className="absolute top-6 left-6 z-10">
        <Link to="#" className="text-2xl font-bold text-journal-text dark:text-white flex items-center gap-2 hover:scale-105 transition-transform">
          ✨ EduPlatform
        </Link>
      </div>

      {/* Главная карточка (форма) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        className="w-full max-w-md bg-white dark:bg-night-surface rounded-3xl 
          shadow-lift dark:shadow-neon/20 p-8 md:p-10 relative z-0 
          border-2 border-transparent dark:border-white/5"
      >
        {/* Эффект колец блокнота (Binding) */}
        <div className="absolute left-4 top-0 bottom-0 w-8 flex flex-col justify-evenly py-8 pointer-events-none opacity-50 md:opacity-100">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-inner border border-gray-300/20" />
          ))}
        </div>

        <div className="pl-6 md:pl-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-journal-text dark:text-white mb-2 relative inline-block">
              {title}
              {/* Подчеркивание под заголовком */}
              <div className="absolute -bottom-2 left-0 w-full h-4 text-cat-yellow/60 dark:text-night-neon-lime/60">
                <DoodleIcon type="underline" className="w-full h-full" delay={0.5} />
              </div>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-4">{subtitle}</p>
          </div>

          {/* Сюда вставляются инпуты логина/регистрации */}
          {children}

          {/* Нижняя часть (переход между страницами) */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {footerText}{' '}
              <Link to={footerLinkTo} className="font-bold text-journal-accent dark:text-night-neon-pink hover:underline decoration-wavy underline-offset-4">
                {footerLinkText}
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}