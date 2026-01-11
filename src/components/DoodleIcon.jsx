import { motion } from 'framer-motion';
import { FaStar, FaHeart } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2'; 
import { BsVectorPen } from 'react-icons/bs';

export function DoodleIcon({ type, className, delay = 0 }) {
  const icons = {
    star: <FaStar />,
    heart: <FaHeart />,
    sparkle: <HiSparkles />,
    scribble: <BsVectorPen size={24} />, 
    underline: (
      <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <motion.path
          d="M5 15C50 5 150 5 195 15"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay }}
        />
      </svg>
    )
  };

  const iconToRender = icons[type] || null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {iconToRender}
    </motion.div>
  );
}