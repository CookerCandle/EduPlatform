import { useState, useMemo } from 'react';
import { WeekView } from '../components/WeekView';
import { DoodleIcon } from '../components/DoodleIcon';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

import { mockEvents } from '../data/mockEvents';
import { coursesData } from '../data/coursesData';

export default function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const mergedEvents = useMemo(() => {
    return mockEvents.map(event => {
      const course = coursesData.find(c => c.id === event.courseId);
      
      const formattedEvent = {
        ...event,
        startTime: event.start,
      };

      if (!course) {
         return formattedEvent;
      }

      return {
        ...formattedEvent,
        courseTitle: course.title,
        color: course.color,
      };
    });
  }, []);

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const getWeekRange = () => {
    const start = new Date(currentDate);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(start.setDate(diff));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    
    const options = { month: 'short', day: 'numeric' };
    return `${monday.toLocaleDateString('en-US', options)} - ${sunday.toLocaleDateString('en-US', options)}`;
  };

  return (
    <div className="flex min-h-screen bg-journal-mint/30 dark:bg-night-bg transition-colors duration-300">
      
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center mb-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="md:hidden font-bold text-2xl text-journal-text dark:text-white">
              ✨ EduPlatform
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-journal-text dark:text-white flex items-center gap-2">
                My Schedule
                <DoodleIcon
                  type="scribble"
                  className="w-8 h-8 text-cat-yellow rotate-12"
                  delay={0.5}
                />
              </h1>
            </div>
          </div>
        </header>

        {/* Calendar Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 flex-shrink-0">
          <div className="flex items-center gap-4 bg-white dark:bg-night-surface p-1.5 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
            <button
              onClick={handlePrevWeek}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors text-gray-500 dark:text-gray-400"
            >
              <HiChevronLeft size={20} />
            </button>
            <span className="font-bold text-journal-text dark:text-white min-w-[140px] text-center">
              {getWeekRange()}
            </span>
            <button
              onClick={handleNextWeek}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors text-gray-500 dark:text-gray-400"
            >
              <HiChevronRight size={20} />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleToday}
              className="px-4 py-2 bg-white dark:bg-night-surface text-journal-text dark:text-white font-bold rounded-xl shadow-sm border border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm"
            >
              Today
            </button>
            </div>
        </div>

        {/* Calendar Grid */}
        <WeekView events={mergedEvents} currentDate={currentDate} />
      </main>
    </div>
  );
}