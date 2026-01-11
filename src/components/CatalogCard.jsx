import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineClock, HiOutlineCheck, HiStar } from 'react-icons/hi2';
import { FiShoppingCart } from 'react-icons/fi';

export function CatalogCard({
  id,
  title,
  instructor,
  category,
  price,
  color,
  lessons,
  rating,
  isNew,
  isBestSeller,
  onAddToCart,
  index
}) {
  const [isAdded, setIsAdded] = useState(false);
  const categoryColor = `var(--color-${color})`;

  const handleAddToCart = () => {
    setIsAdded(true);
    if (onAddToCart) onAddToCart(id);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ delay: index * 0.05, duration: 0.5 }} 
      whileHover={{ y: -8 }} 
      className="group relative flex flex-col h-full"
    >
      {/* Tape effect (Эффект скотча для стиля блокнота) */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 dark:bg-white/10 backdrop-blur-sm rotate-[-2deg] z-10 shadow-sm rounded-sm" />

      {/* Badges (Новинка / Бестселлер) */}
      <div className="absolute -top-2 -right-2 z-20 flex flex-col gap-1 items-end">
        {isNew && (
          <span className="px-3 py-1 bg-journal-mint text-journal-text text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm rotate-3 border border-journal-text/10">
            New
          </span>
        )}
        {isBestSeller && (
          <span className="px-3 py-1 bg-journal-accent text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm -rotate-2">
            Best Seller
          </span>
        )}
      </div>

      <div className="flex-1 rounded-3xl overflow-hidden bg-white dark:bg-night-surface shadow-soft dark:shadow-none border-2 border-transparent transition-all duration-300 group-hover:shadow-lift flex flex-col">
        
        {/* Цветная полоска сверху */}
        <div className="h-2 w-full" style={{ backgroundColor: categoryColor }} />

        <div className="p-6 flex flex-col h-full">
          {/* Category & Rating */}
          <div className="flex justify-between items-start mb-4">
            <span 
              className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest" 
              style={{ 
                backgroundColor: `color-mix(in srgb, ${categoryColor}, transparent 80%)`, 
                color: categoryColor 
            }}
            >
              {category}
            </span>
            <div className="flex items-center text-yellow-400 gap-1">
              <HiStar size={16} fill="currentColor" />
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                {rating}
              </span>
            </div>
          </div>

          {/* Title & Instructor */}
          <h3 className="text-lg font-bold text-journal-text dark:text-white mb-2 line-clamp-2 group-hover:text-journal-accent dark:group-hover:text-night-neon-blue transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-4 italic">
            by {instructor}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-6">
            <HiOutlineClock size={16} className="text-journal-accent dark:text-night-neon-blue" />
            <span className="font-medium">{lessons} lessons</span>
          </div>

          {/* Footer: Price & Action */}
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
            <div className="text-2xl font-black text-journal-text dark:text-white">
              {price === 0 ? 'Free' : `$${price}`}
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }} 
              onClick={handleAddToCart} 
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-md
                ${isAdded 
                  ? 'bg-journal-mint text-journal-text' 
                  : 'bg-journal-text dark:bg-night-neon-blue text-white dark:text-night-bg hover:opacity-90'
                }
              `}
            >
              {isAdded ? (
                <>
                  <HiOutlineCheck size={18} strokeWidth={3} />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <FiShoppingCart size={16} />
                  <span>Add</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}