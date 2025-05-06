import React from 'react';
import { motion } from 'framer-motion';
import FloatingNotes from './FloatingNotes';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="hero">
      <FloatingNotes />
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 id="hero-text" variants={itemVariants}>
          Welcome to Harmony Land
        </motion.h1>
        <motion.h2 variants={itemVariants}>
          Your Journey to Mastery Begins Here
        </motion.h2>
        <motion.h2 variants={itemVariants}>
          Professional Piano Lessons with Mohammad Erfanian
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default Hero; 