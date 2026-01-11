import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HiOutlineHome, HiOutlineArrowLeft } from 'react-icons/hi2';
import { HandDrawnDivider } from '../components/HandDrawnDivider';
import { DoodleIcon } from '../components/DoodleIcon';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-journal-mint/10 dark:bg-night-bg flex flex-col items-center justify-center p-6 text-center">
        
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

      {/* Анимированная цифра 404 */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h1 className="text-[120px] font-black text-journal-text dark:text-white leading-none tracking-tighter">
          4<span className="text-journal-accent dark:text-night-neon-blue">0</span>4
        </h1>
      </motion.div>

      {/* Декоративный разделитель */}
      <div className="w-64 my-4">
        <HandDrawnDivider type="wavy" color="#82B1FF" />
      </div>

      {/* Текст сообщения */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-md"
      >
        <h2 className="text-2xl font-bold text-journal-text dark:text-white mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          It seems you've wandered into an uncharted chapter. 
          The page you are looking for doesn't exist or has been moved.
        </p>
      </motion.div>

      {/* Кнопки действий */}
      <div className="flex flex-col sm:flex-row gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border-2 border-gray-200 dark:border-white/10 text-journal-text dark:text-white font-bold hover:bg-white/50 dark:hover:bg-white/5 transition-all"
        >
          <HiOutlineArrowLeft size={20} />
          Go Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/home')}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-journal-text dark:bg-night-neon-blue text-white dark:text-night-bg font-bold shadow-lg shadow-journal-text/20 dark:shadow-night-neon-blue/30 transition-all"
        >
          <HiOutlineHome size={20} />
          Back to Journal
        </motion.button>
      </div>

    </div>
  );
}