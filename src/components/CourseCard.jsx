import { motion } from 'framer-motion';
import { HiPlay, HiOutlineClock, HiStar } from 'react-icons/hi2';

export function CourseCard({
  title,
  instructor,
  category,
  progress,
  color,
  lessons,
  rating,
  index
}) {
  const categoryColor = `var(--color-${color})`;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ delay: index * 0.1, duration: 0.5 }} 
      whileHover={{
        y: -8,
        transition: {
          type: 'spring',
          stiffness: 300
        }
      }} 
      className="group relative flex flex-col h-full"
    >
      {/* Tape effect at top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/30 dark:bg-white/10 backdrop-blur-sm rotate-[-2deg] z-10 shadow-sm rounded-sm" />

      <div className={`
        flex-1 rounded-2xl overflow-hidden bg-white dark:bg-night-surface 
        shadow-soft dark:shadow-none border-2 border-transparent
        transition-all duration-300 group-hover:shadow-lift
      `}>
        {/* Color Header */}
        <div className="h-3 w-full" style={{ backgroundColor: categoryColor }} />

        <div className="p-6 flex flex-col h-full">
          {/* Category Badge */}
          <div className="flex justify-between items-start mb-4">
            <span 
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" 
              style={{
                backgroundColor: `${categoryColor}30`,
                color: categoryColor
              }}
            >
              {category}
            </span>
            <div className="flex items-center text-yellow-400">
              {/* Используем HiStar из react-icons */}
              <HiStar size={16} />
              <span className="ml-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                {rating}
              </span>
            </div>
          </div>

          {/* Title & Instructor */}
          <h3 className="text-xl font-bold text-journal-text dark:text-white mb-2 line-clamp-2 group-hover:text-journal-accent dark:group-hover:text-night-neonBlue transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            by {instructor}
          </p>

          {/* Progress Section */}
          <div className="mt-auto">
            <div className="flex justify-between text-xs mb-2 font-medium text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                {/* Используем HiOutlineClock из react-icons */}
                <HiOutlineClock size={16} /> {lessons} lessons
              </span>
              <span>{progress}% complete</span>
            </div>

            <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full rounded-full" 
                style={{ backgroundColor: `${categoryColor}` }} 
                initial={{ width: 0 }} 
                whileInView={{ width: `${progress}%` }} 
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 1,
                  ease: 'easeOut'
                }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hover Action */}
      <motion.button 
        className="absolute bottom-6 right-6 p-3 rounded-full bg-journal-text dark:bg-white text-white dark:text-night-bg shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center" 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }} 
        aria-label="Start course"
      >
        {/* Используем HiPlay из react-icons */}
        <HiPlay size={24} />
      </motion.button>
    </motion.div>
  );
}