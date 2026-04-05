import { motion } from 'framer-motion';
import { DoodleIcon } from './DoodleIcon';
import { TypeWriterText } from './TypeWriterText';

import { getUserData } from '../utils/userStorage';

export function Hero() {
  const User = JSON.parse(getUserData());

  return (
    <section className="relative w-full py-12 px-4 md:px-8 mb-12 overflow-hidden rounded-3xl 
      bg-journal-lavender/30 dark:bg-night-surface/30 
      border-2 border-dashed border-journal-lavender dark:border-white/10">
      
        <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
          <DoodleIcon type="star" className="absolute top-10 left-10 w-8 h-8 text-cat-yellow" delay={0.5} />
          <DoodleIcon type="heart" className="absolute bottom-10 right-20 w-6 h-6 text-cat-coral" delay={0.7} />
          <DoodleIcon type="scribble" className="absolute top-16 right-12 w-12 h-12 text-cat-blue" delay={0.9} />
          <DoodleIcon type="sparkle" className="absolute bottom-20 left-16 w-10 h-10 text-cat-green" delay={1.1} />
          <DoodleIcon type="moon" className="absolute top-5 right-5 w-8 h-8 text-cat-purple" delay={1.3} />
          <DoodleIcon type="cloud" className="absolute bottom-15 left-15 w-10 h-10 text-cat-gray" delay={1.5} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            {/* Приветственный бейдж */}
          <span className="inline-block px-4 py-1.5 rounded-full 
            bg-white dark:bg-night-surface 
            text-sm font-bold text-journal-accent dark:text-night-neon-pink 
            shadow-soft mb-6 border border-journal-accent/20">
            Welcome back, {User.userName}! 👋
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-journal-text dark:text-white mb-6 leading-tight">
            Ready to learn something <br />
            <span className="relative inline-block">
              new today?
              {/* Желтое подчеркивание под текстом */}
              <div className="absolute -bottom-2 left-0 w-full h-4 text-cat-yellow dark:text-night-neon-lime -z-10">
                <DoodleIcon type="underline" className="w-full h-full" delay={0.8} />
              </div>
            </span>
          </h1>
          <TypeWriterText 
            text="Your daily goals are set. You have 3 lessons pending in Design and 2 in Development." 
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto" 
            delay={1}
          />
        </motion.div>
      </div>
    </section>
  );
}