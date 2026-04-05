import { Hero } from "../components/Hero"
import { HandDrawnDivider } from "../components/HandDrawnDivider"
import { motion } from 'framer-motion';
import { CourseCard } from "../components/CourseCard"
import { coursesData } from "../data/coursesData";
import { coursesProgress } from "../data/coursesProgress";

const HomePage = () => {
    const inProgressCourses = coursesProgress.map(progressItem => {
        const courseBaseInfo = coursesData.find(c => c.id === progressItem.id)
        return {
            ...courseBaseInfo,
            progress: progressItem.progress
        }
    }).filter(course => course.title);

    const courseCount = inProgressCourses.length;

    return (
        <>
            <Hero />
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-journal-text dark:text-white flex items-center gap-2">
                        In Progress
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 bg-white dark:bg-night-surface px-2 py-1 rounded-lg ml-2 shadow-sm">
                            {courseCount} {courseCount === 1 ? 'Course' : 'Courses'}
                        </span>
                    </h2>
                    <button className="text-journal-accent dark:text-night-neonBlue font-medium hover:underline decoration-wavy underline-offset-4">
                        View All
                    </button>
                </div>

                <HandDrawnDivider type="wavy" className="text-journal-cat-blue/20 mb-8" />

                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" layout>
                    {inProgressCourses.map((course, index) => (
                        <CourseCard key={course.id} index={index} {...course} />
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default HomePage