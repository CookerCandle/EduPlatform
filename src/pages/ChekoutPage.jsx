import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    HiOutlineArrowLeft,
    HiOutlineCreditCard,
    HiOutlineLockClosed,
    HiCheckCircle,
    HiOutlineShieldCheck
} from 'react-icons/hi2';

import { DarkModeToggle } from '../components/DarkModeToggle';
import { DoodleIcon } from '../components/DoodleIcon';
import { HandDrawnDivider } from '../components/HandDrawnDivider';

const CheckoutPage = () => {
    const [step, setStep] = useState('form'); 
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const cartItems = location.state?.items || [];

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal; 
    useEffect(() => {
        if (cartItems.length === 0 && step !== 'success') {
            navigate('/courses');
        }
    }, [cartItems, navigate, step]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep('success');
        }, 2000);
    };

    {/* Success */}
    if (step === 'success') {
        return (
            <div className="min-h-screen bg-journal-mint/30 dark:bg-night-bg flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white dark:bg-night-surface p-8 md:p-12 rounded-3xl shadow-lift max-w-md w-full text-center relative overflow-hidden"
                >
                    <DoodleIcon type="sparkle" className="absolute top-10 left-10 w-12 h-12 text-journal-cat-yellow" delay={0.2} />
                    <DoodleIcon type="heart" className="absolute bottom-10 right-10 w-10 h-10 text-journal-cat-coral" delay={0.4} />

                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                        <HiCheckCircle size={40} />
                    </div>

                    <h1 className="text-3xl font-bold text-journal-text dark:text-white mb-4">
                        Order Confirmed!
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">
                        Thank you for your purchase. You can now access your courses in your dashboard.
                    </p>

                    <Link to="/home" className="block w-full py-3 rounded-xl bg-journal-text dark:bg-white text-white dark:text-journal-text font-bold hover:scale-105 transition-transform shadow-lg">
                        Go to Dashboard
                    </Link>
                </motion.div>
            </div>
        );
    }

    {/* Если товаров нет */} 
    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-journal-mint/30 dark:bg-night-bg flex flex-col items-center justify-center p-4">
                <DoodleIcon type="scribble" className="w-32 h-32 text-gray-300 dark:text-gray-600 mb-4" />
                <h2 className="text-2xl font-bold text-journal-text dark:text-white mb-2">Your cart is empty</h2>
                <Link to="/courses" className="text-journal-accent font-bold hover:underline">Return to Catalog</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-journal-mint/30 dark:bg-night-bg transition-colors duration-300">
            <header className="p-6 flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/courses" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-journal-text dark:hover:text-white transition-colors font-medium">
                    <HiOutlineArrowLeft size={20} />
                    Back to Catalog
                </Link>
                <div className="font-bold text-xl text-journal-text dark:text-white">
                    ✨ EduPlatform Checkout
                </div>
                <DarkModeToggle />
            </header>

            <main className="max-w-6xl mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Left: Payment Form */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="bg-white dark:bg-night-surface p-8 rounded-3xl shadow-soft dark:shadow-none border-2 border-transparent dark:border-white/5"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-journal-lavender dark:bg-white/10 rounded-xl text-journal-text dark:text-white">
                                <HiOutlineCreditCard size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-journal-text dark:text-white">
                                Payment Details
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-journal-text dark:text-white mb-2 ml-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full p-3 rounded-xl bg-gray-50 dark:bg-white/5 border-2 border-gray-100 dark:border-white/10 focus:border-journal-cat-blue dark:focus:border-night-neon-blue outline-none transition-colors dark:text-white"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-journal-text dark:text-white mb-2 ml-1">
                                        Card Information
                                    </label>
                                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border-2 border-gray-100 dark:border-white/10 flex items-center gap-3 focus-within:border-journal-cat-blue dark:focus-within:border-night-neon-blue transition-colors">
                                        <HiOutlineCreditCard size={20} className="text-gray-400" />
                                        <input
                                            type="text"
                                            required
                                            className="bg-transparent outline-none flex-1 dark:text-white"
                                            placeholder="0000 0000 0000 0000"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <input
                                            type="text"
                                            required
                                            className="w-full p-3 rounded-xl bg-gray-50 dark:bg-white/5 border-2 border-gray-100 dark:border-white/10 focus:border-journal-cat-blue dark:focus:border-night-neon-blue outline-none transition-colors dark:text-white"
                                            placeholder="MM / YY"
                                        />
                                        <input
                                            type="text"
                                            required
                                            className="w-full p-3 rounded-xl bg-gray-50 dark:bg-white/5 border-2 border-gray-100 dark:border-white/10 focus:border-journal-cat-blue dark:focus:border-night-neon-blue outline-none transition-colors dark:text-white"
                                            placeholder="CVC"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-journal-text dark:text-white mb-2 ml-1">
                                        Name on Card
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full p-3 rounded-xl bg-gray-50 dark:bg-white/5 border-2 border-gray-100 dark:border-white/10 focus:border-journal-cat-blue dark:focus:border-night-neon-blue outline-none transition-colors dark:text-white"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                            </div>

                            <HandDrawnDivider type="dashed" className="text-gray-200 dark:text-white/10" />

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 rounded-xl bg-journal-text dark:bg-white text-white dark:text-journal-text font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <HiOutlineLockClosed size={18} />
                                        <span>Pay ${total.toFixed(2)}</span>
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                                <HiOutlineShieldCheck size={14} />
                                Payments are secure and encrypted
                            </p>
                        </form>
                    </motion.div>

                    {/* Right: Order Summary */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-night-surface p-8 rounded-3xl shadow-soft dark:shadow-none border-2 border-dashed border-gray-200 dark:border-white/10 relative"
                    >
                        {/* Notebook holes effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-evenly py-4 pointer-events-none">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-4 h-4 rounded-r-full bg-journal-mint/30 dark:bg-night-bg" />
                            ))}
                        </div>

                        <div className="pl-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-journal-text dark:text-white">
                                    Order Summary
                                </h2>
                                <span className="text-sm text-gray-500 font-medium">{cartItems.length} items</span>
                            </div>

                            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {cartItems.map((item, i) => (
                                    <div key={item.id + i} className="flex justify-between items-start gap-4">
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-10 h-10 rounded-lg mt-1 flex-shrink-0 border border-black/5"
                                                style={{ backgroundColor: `var(--color-${item.color})` }}
                                            />
                                            <div>
                                                <p className="font-bold text-journal-text dark:text-white text-sm line-clamp-2">
                                                    {item.title}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    Lifetime Access
                                                </p>
                                            </div>
                                        </div>
                                        <span className="font-bold text-journal-text dark:text-white">
                                            ${item.price}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <HandDrawnDivider type="zigzag" className="text-gray-200 dark:text-white/10 mb-6" />

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                                    <span>Tax (Estimated)</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-journal-text dark:text-white mt-4 pt-4 border-t border-gray-100 dark:border-white/5">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

export default CheckoutPage;