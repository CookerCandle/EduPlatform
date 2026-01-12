import { ScheduleEvent } from './ScheduleEvent';
import { DoodleIcon } from './DoodleIcon';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const HOURS = Array.from({ length: 13 }, (_, i) => i + 8); 

export function WeekView({ events, currentDate }) {
  
  const getDayNumber = (dayIndex) => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay(); 
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); 
    
    const monday = new Date(startOfWeek);
    monday.setDate(diff); 
    
    const currentDay = new Date(monday);
    currentDay.setDate(monday.getDate() + dayIndex);
    return currentDay.getDate();
  };

  const isToday = (dayIndex) => {
    const today = new Date();
    const currentDayNum = getDayNumber(dayIndex);
    
    return today.getDate() === currentDayNum && 
           today.getMonth() === currentDate.getMonth(); 
  };

  const getTopPosition = (time) => {
    if (!time || typeof time !== 'string') return 0;

    const [hours, minutes] = time.split(':').map(Number);
    const startHour = 8;
    const pixelsPerHour = 90;
    return (hours - startHour + minutes / 60) * pixelsPerHour;
  };

  return (
    <div className="bg-white dark:bg-night-surface rounded-3xl shadow-soft dark:shadow-neon border-2 border-transparent dark:border-white/5 overflow-hidden flex flex-col h-[calc(100vh-200px)] min-h-[600px] transition-colors duration-500">
      
      {/* Шапка дней недели */}
      <div className="grid grid-cols-8 border-b border-journal-text/5 dark:border-white/5 bg-journal-mint/20 dark:bg-white/5">
        <div className="p-4 border-r border-journal-text/5 dark:border-white/5"></div>
        {DAYS.map((day, index) => (
          <div
            key={day}
            className={`
              p-4 text-center border-r border-journal-text/5 dark:border-white/5 last:border-r-0 relative transition-colors duration-300
              ${isToday(index) 
                ? 'bg-cat-yellow/10 dark:bg-night-neon-lime/10'
                : ''}
            `}
          >
            <span className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
              {day}
            </span>
            <span
              className={`
              inline-flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold transition-all duration-300
              ${isToday(index) 
                ? ' text-journal-text shadow-sm scale-110'
                : 'text-journal-text dark:text-night-text'}
            `}
            >
              {getDayNumber(index)}
            </span>
            {isToday(index) && (
              <DoodleIcon
                type="underline"
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-4 text-cat-yellow dark:text-night-neon-lime"
                delay={0.5}
              />
            )}
          </div>
        ))}
      </div>

      {/* Сетка расписания */}
      <div className="flex-1 overflow-y-auto relative custom-scrollbar">
        <div className="grid grid-cols-8 min-w-[800px]">
          
          {/* Колонка времени */}
          <div className="border-r border-journal-text/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
            {HOURS.map((hour) => (
              <div
                key={hour}
                className="h-[90px] border-b border-journal-text/5 dark:border-white/5 p-2 text-right relative"
              >
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500 absolute -top-2 right-2 bg-white dark:bg-night-surface px-1 rounded">
                  {hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`}
                </span>
              </div>
            ))}
          </div>

          {/* Колонки дней */}
          {DAYS.map((_, dayIndex) => (
            <div
              key={dayIndex}
              className={`
                relative border-r border-journal-text/5 dark:border-white/5 last:border-r-0 transition-colors duration-300
                ${isToday(dayIndex) 
                  ? 'bg-cat-yellow/5 dark:bg-night-neon-lime/5'
                  : ''}
              `}
            >
              {/* Линии сетки */}
              {HOURS.map((hour) => (
                <div
                  key={hour}
                  className="h-[90px] border-b border-journal-text/5 dark:border-white/5 border-dashed"
                />
              ))}

              {/* Рендеринг событий */}
              {events
                .filter((event) => event.dayIndex === dayIndex)
                .map((event) => (
                  <div
                    key={event.id}
                    className="absolute w-full px-1 z-10"
                    style={{
                      top: `${getTopPosition(event.startTime)}px`,
                    }}
                  >
                    <ScheduleEvent {...event} startTime={event.startTime} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}