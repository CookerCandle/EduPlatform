import { motion } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  Lightbulb,
  Code,
  GraduationCap,
  HelpCircle,
} from 'lucide-react';

const suggestions = [
  {
    icon: BookOpen,
    label: 'My progress',
    prompt: 'Show me a summary of my learning progress and areas I need to improve',
    keyword: 'explain',
    color: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Calendar,
    label: 'My study schedule',
    prompt: 'Show me my study schedule for this week',
    keyword: 'schedule',
    color: 'from-green-500 to-emerald-400',
    bg: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: Code,
    label: 'Code example',
    prompt: 'Show me a practical example of using async/await in Python',
    keyword: 'code',
    color: 'from-purple-500 to-violet-400',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: Lightbulb,
    label: 'Project ideas',
    prompt: 'Suggest 5 beginner-friendly project ideas for a web developer portfolio',
    keyword: 'projects',
    color: 'from-amber-500 to-yellow-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: GraduationCap,
    label: 'Course advice',
    prompt: 'What courses should I take to become a full-stack developer?',
    keyword: 'courses',
    color: 'from-pink-500 to-rose-400',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
  },
  {
    icon: HelpCircle,
    label: 'Quiz me',
    prompt: 'Give me 5 quiz questions about HTML and CSS fundamentals',
    keyword: 'quiz',
    color: 'from-teal-500 to-cyan-400',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function AISuggestions({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm text-gray-400 dark:text-gray-500 mb-5 font-medium"
      >
        Try one of these to get started
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg"
      >
        {suggestions.map((s) => (
          <motion.button
            key={s.label}
            variants={item}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(s.prompt, s.keyword)}
            className={`${s.bg} group relative flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-gray-100 dark:border-white/5 hover:shadow-lg transition-shadow cursor-pointer text-center`}
          >
            <div
              className={`p-2 rounded-xl bg-gradient-to-br ${s.color} text-white shadow-sm`}
            >
              <s.icon size={18} />
            </div>
            <span className="text-xs font-semibold text-journal-text dark:text-gray-200 leading-tight">
              {s.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
