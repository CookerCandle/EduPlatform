import { motion } from 'framer-motion';

export function TypeWriterText({ text, className = "", delay = 0 }) {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`inline-flex items-center flex-wrap ${className}`}>
      <motion.h1
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}