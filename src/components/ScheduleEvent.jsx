import { motion } from 'framer-motion';
import { 
  HiPlay, 
  HiVideoCamera, 
  HiFlag, 
  HiDocumentText, 
  HiOutlineClock 
} from 'react-icons/hi2';

const typeIcons = {
  'lesson': HiPlay,
  'live-session': HiVideoCamera,
  'deadline': HiFlag,
  'assignment': HiDocumentText,
};

export function ScheduleEvent({
  title,
  courseTitle,
  startTime,
  duration,
  color,
  type,
}) {
  const Icon = typeIcons[type] || HiPlay;
  
  const height = Math.max(duration * 1.5, 80);
  
  const colorVar = `var(--color-${color})`;
  console.log(colorVar);

  return (
    <motion.div
      whileHover={{ scale: 1.02, zIndex: 20 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute w-full p-1"
      style={{
        height: `${height}px`,
        top: 0,
      }}
    >
      <div
        className="h-full w-full rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow flex flex-col bg-white dark:bg-night-surface border-l-4 overflow-hidden"
        style={{
          borderLeftColor: colorVar,
          backgroundColor: type === 'live-session' 
            ? `color-mix(in srgb, ${colorVar}, transparent 90%)` 
            : undefined,
        }}
      >
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <HiOutlineClock size={12} />
            {startTime}
          </span>
          <div
            className="p-1.5 rounded-full"
            style={{
              backgroundColor: `color-mix(in srgb, ${colorVar}, transparent 85%)`,
              color: colorVar,
            }}
          >
            <Icon size={12} />
          </div>
        </div>

        <h4 className="font-bold text-sm text-journal-text dark:text-white leading-tight mb-1 line-clamp-2">
          {title || courseTitle}
        </h4>

        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-auto italic">
          {type === 'deadline' ? 'Deadline' : courseTitle}
        </p>
      </div>
    </motion.div>
  );
}