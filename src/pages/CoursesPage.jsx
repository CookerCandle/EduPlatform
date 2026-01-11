import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";

import { FilterSidebar } from '../components/FilterSidebar';
import { CartDrawer } from '../components/CartDrawer';
import { CatalogCard } from '../components/CatalogCard';
import { coursesData } from '../data/coursesData';

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePrice, setActivePrice] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesPrice = true;
    if (activePrice === 'free') matchesPrice = course.price === 0;
    if (activePrice === 'under-50') matchesPrice = course.price < 50;
    if (activePrice === 'over-50') matchesPrice = course.price >= 50;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const handleAddToCart = (id) => {
    const course = coursesData.find(c => c.id === id);
    if (course && !cartItems.find(item => item.id === id)) {
      setCartItems([...cartItems, course]);
      setIsCartOpen(true);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-journal-mint/30 dark:bg-night-bg transition-colors duration-300">

      <main className="flex-1 p-4 md:p-8 overflow-x-hidden relative">
        {/* Header страницы */}
        <header className="flex justify-between items-center mb-8 sticky top-0 z-40 bg-journal-mint/95 dark:bg-night-bg/95 backdrop-blur-sm py-4 -mx-4 px-4 md:-mx-8 md:px-8 border-b border-gray-200/50 dark:border-white/5">
          <div className="flex items-center gap-4">
            <div className="md:hidden font-black text-2xl text-journal-text dark:text-white tracking-tighter">
              ✨ EduPlatform
            </div>
            <h1 className="hidden md:block text-2xl font-black text-journal-text dark:text-white">
              Course Catalog
            </h1>
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => setIsCartOpen(true)}
              className="p-3 rounded-2xl bg-white dark:bg-night-surface text-gray-600 dark:text-gray-300 hover:shadow-md transition-all relative border border-gray-100 dark:border-white/10"
            >
              <HiOutlineShoppingBag size={22} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-journal-accent dark:bg-night-neon-blue text-white dark:text-night-bg text-xs font-black flex items-center justify-center rounded-full border-2 border-white dark:border-night-bg">
                  {cartItems.length}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-3 rounded-2xl bg-white dark:bg-night-surface text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-white/10"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <HiBars3BottomRight size={22} />
            </button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Сайдбар с фильтрами */}
          <aside className={`
            lg:w-72 flex-shrink-0 
            ${showMobileFilters ? 'block' : 'hidden lg:block'}
          `}>
            <div className="lg:sticky lg:top-28">
              <FilterSidebar
                activeCategory={activeCategory}
                activePrice={activePrice}
                onCategoryChange={(cat) => {
                  setActiveCategory(cat);
                  setShowMobileFilters(false);
                }}
                onPriceChange={setActivePrice}
                onSearchChange={setSearchQuery}
              />
            </div>
          </aside>

          {/* Сетка курсов */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-500 dark:text-gray-400 font-medium italic">
                Showing {filteredCourses.length} courses
              </p>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <CatalogCard
                  key={course.id}
                  index={index}
                  {...course}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </motion.div>

            {/* Пустое состояние */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-24 bg-white/50 dark:bg-white/5 rounded-3xl border-2 border-dashed border-gray-200 dark:border-white/10">
                <p className="text-xl text-gray-400 dark:text-gray-500 font-bold">
                  No courses found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActivePrice('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-journal-accent dark:text-night-neon-blue font-black hover:underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Корзина (Drawer) */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemoveItem={handleRemoveFromCart}
        />
      </main>
    </div>
  );
}