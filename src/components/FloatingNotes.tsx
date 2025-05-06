import React from 'react';
import { motion } from 'framer-motion';

const FloatingNotes: React.FC = () => {
  // Create evenly distributed starting positions
  const positions = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    note: ['♪', '♫', '♩', '♬'][i % 4],
    delay: i * 0.5,
    duration: 7 + Math.random() * 3,
    x: `${(i * 100) / 12}%` // Evenly distribute across 100% width
  }));

  return (
    <div className="floating-notes">
      {positions.map(({ id, note, delay, duration, x }) => (
        <motion.div
          key={id}
          className="floating-note"
          initial={{ 
            opacity: 0,
            y: -100,
            rotate: 0
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: '100vh',
            rotate: [0, 360]
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.9, 1]
          }}
          style={{
            position: 'absolute',
            left: x,
            top: 0
          }}
        >
          {note}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingNotes; 