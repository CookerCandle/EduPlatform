import { HiMagnifyingGlass, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { HandDrawnDivider } from './HandDrawnDivider';

import { categories, prices } from '../data/filterData';

export function FilterSidebar({
  activeCategory,
  activePrice,
  onCategoryChange,
  onPriceChange,
  onSearchChange,
  className = ''
}) {
  return (
    <div className={`bg-white dark:bg-night-surface rounded-3xl p-6 shadow-soft dark:shadow-none border-2 border-transparent dark:border-white/5 ${className}`}>
      
      {/* Заголовок */}
      <div className="flex items-center gap-2 mb-6 text-journal-text dark:text-white font-bold text-lg">
        <HiOutlineAdjustmentsHorizontal size={22} className="text-journal-accent dark:text-night-neon-blue" />
        <h2>Filters</h2>
      </div>

      {/* Поиск */}
      <div className="relative mb-8">
        <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search courses..." 
          onChange={e => onSearchChange(e.target.value)} 
          className="w-full pl-10 pr-4 py-2 rounded-xl 
            bg-gray-50 dark:bg-white/5 
            border-2 border-gray-100 dark:border-white/10 
            focus:border-cat-blue dark:focus:border-night-neon-blue 
            focus:outline-none transition-colors text-sm text-journal-text dark:text-white" 
        />
      </div>

      <HandDrawnDivider type="wavy" className="text-gray-200 dark:text-white/10 mb-6" />

      {/* Категории */}
      <div className="mb-8">
        <h3 className="font-bold text-journal-text dark:text-white mb-4 flex items-center gap-2">
          Category
        </h3>
        <div className="space-y-1">
          {categories.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => onCategoryChange(cat.id)} 
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm
                ${activeCategory === cat.id 
                  ? 'bg-journal-mint/50 dark:bg-white/10 font-bold text-journal-text dark:text-white shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
            >
            <span 
                className="w-3 h-3 rounded-full shadow-inner" 
                style={{ backgroundColor: `var(--color-${cat.color})` }}        
            />
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <HandDrawnDivider type="dashed" className="text-gray-200 dark:text-white/10 mb-6" />

      {/* Цена */}
      <div>
        <h3 className="font-bold text-journal-text dark:text-white mb-4">
          Price Range
        </h3>
        <div className="space-y-1">
          {prices.map(price => (
            <label 
              key={price.id} 
              className="flex items-center gap-3 px-3 py-2 cursor-pointer group rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="relative flex items-center">
                <input 
                  type="radio" 
                  name="price" 
                  checked={activePrice === price.id} 
                  onChange={() => onPriceChange(price.id)} 
                  className="peer appearance-none w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full 
                    checked:border-cat-blue dark:checked:border-night-neon-blue transition-all" 
                />
                <div className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full 
                  bg-cat-blue dark:bg-night-neon-blue scale-0 
                  peer-checked:scale-100 transition-transform duration-200" 
                />
              </div>
              <span className={`text-sm transition-colors ${
                activePrice === price.id 
                  ? 'font-bold text-journal-text dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'
              }`}>
                {price.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}