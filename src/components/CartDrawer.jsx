import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineXMark, HiOutlineShoppingBag, HiOutlineTrash, HiOutlineArrowRight } from "react-icons/hi2";
import { DoodleIcon } from './DoodleIcon';

export function CartDrawer({
  isOpen,
  onClose,
  items = [],
  onRemoveItem
}) {
  // Вычисляем общую сумму
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Затемнение фона) */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm z-40" 
          />

          {/* Drawer (Боковая панель) */}
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={{ type: 'spring', damping: 25, stiffness: 200 }} 
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-night-surface shadow-2xl z-50 flex flex-col border-l-2 border-gray-100 dark:border-white/5"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3">
                <HiOutlineShoppingBag size={24} className="text-journal-text dark:text-white" />
                <h2 className="text-xl font-bold text-journal-text dark:text-white">
                  Your Cart
                </h2>
                <span className="bg-journal-accent dark:bg-night-neon-blue text-white text-xs font-black px-2.5 py-0.5 rounded-full shadow-sm">
                  {items.length}
                </span>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-all"
              >
                <HiOutlineXMark size={24} className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                  <DoodleIcon type="scribble" className="w-24 h-24 text-gray-300 dark:text-gray-600" />
                  <p className="text-gray-500 dark:text-gray-400 font-bold">
                    Your cart is empty
                  </p>
                  <button 
                    onClick={onClose} 
                    className="text-journal-accent dark:text-night-neon-blue font-black hover:underline underline-offset-4"
                  >
                    Browse Courses
                  </button>
                </div>
              ) : (
                items.map(item => (
                  <motion.div 
                    layout 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, x: -20 }} 
                    key={item.id} 
                    className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 group"
                  >
                    {/* Course Color Placeholder */}
                    <div 
                      className="w-16 h-16 rounded-xl flex-shrink-0 shadow-inner" 
                      style={{
                        backgroundColor: `color-mix(in srgb, var(--color-${item.color}), transparent 70%)`,
                        border: `2px solid var(--color-${item.color})`
                      }}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-journal-text dark:text-white text-sm line-clamp-2 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-journal-accent dark:text-night-neon-blue font-black mt-2">
                        ${item.price}
                      </p>
                    </div>

                    <button 
                      onClick={() => onRemoveItem(item.id)} 
                      className="text-gray-300 hover:text-red-500 transition-colors p-1 self-start"
                    >
                      <HiOutlineTrash size={20} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50/30 dark:bg-night-bg/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">
                    Subtotal
                  </span>
                  <span className="text-3xl font-black text-journal-text dark:text-white">
                    ${total.toFixed(2)}
                  </span>
                </div>
                
                <Link 
                  to="/checkout" 
                  state={{ items: items }}
                  onClick={onClose} 
                  className="w-full py-4 rounded-2xl bg-journal-text dark:bg-night-neon-blue text-white dark:text-night-bg font-bold flex items-center justify-center gap-3 shadow-lg shadow-black/10 dark:shadow-night-neon-blue/20 transition-all active:scale-95"
                >
                  <span className="tracking-wide">Proceed to Checkout</span>
                  <HiOutlineArrowRight size={20} />
                </Link>
                
                <p className="text-center text-[10px] text-gray-400 mt-4 italic">
                  Free updates and lifetime access included
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}