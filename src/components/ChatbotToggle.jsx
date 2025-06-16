import React from 'react';
import { motion } from 'framer-motion';

export default function ChatbotToggle({ showChatbot, setShowChatbot }) {
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  // Animation variants
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.button
      onClick={toggleChatbot}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={showChatbot ? "Close chatbot" : "Open chatbot"}
      initial={false}
      animate={{
        scale: [1, 1.1, 1],
        transition: { duration: 0.3 }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        key={showChatbot ? "close" : "open"}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={iconVariants}
        transition={{ duration: 0.2 }}
        className="h-6 w-6"
      >
        {showChatbot ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}