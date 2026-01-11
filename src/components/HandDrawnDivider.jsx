import { motion } from 'framer-motion';

export function HandDrawnDivider({
  type = 'wavy',
  className = '',
  color = 'currentColor'
}) {
  const getPath = () => {
    switch (type) {
      case 'wavy':
        return 'M0,10 Q20,20 40,10 T80,10 T120,10 T160,10 T200,10 T240,10 T280,10 T320,10 T360,10 T400,10';
      case 'zigzag':
        return 'M0,10 L10,0 L20,10 L30,0 L40,10 L50,0 L60,10 L70,0 L80,10 L90,0 L100,10';
      case 'dashed':
        return 'M0,10 L400,10';
      default:
        return 'M0,10 Q20,20 40,10 T80,10';
    }
  };

  return (
    <div className={`w-full overflow-hidden h-6 ${className}`}>
      <motion.svg 
        viewBox="0 0 400 20" 
        preserveAspectRatio="none" 
        className="w-full h-full"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <motion.path
          d={getPath()}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={type === 'dashed' ? '10,10' : 'none'}
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}