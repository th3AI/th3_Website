import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Chatbot() {
  const [visible, setVisible] = useState(true); // Open by default
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Preload iframe on component mount
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = "https://synthia-chatbot.onrender.com";
    iframe.style.display = "";
    iframe.onload = () => {
      setIframeLoaded(true);
      setIsLoading(false);
    };
    document.body.appendChild(iframe);

    // Cleanup function
    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  const toggleChatbot = () => {
    setVisible(!visible);
  };

  return (
    <>
      {/* Chat Icon Button - Only show if chatbot is closed */}
      {!visible && (
        <button
          onClick={toggleChatbot}
          className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Open Chatbot"
        >
          💬
        </button>
      )}

      {/* Chatbot Panel */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-20 right-4 w-[360px] h-[520px] bg-white rounded-2xl shadow-2xl overflow-hidden z-40"
          >
            {isLoading && (
              <div className="absolute inset-0 bg-white flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <iframe
              src="https://synthia-chatbot.onrender.com"
              className={`w-full h-full ${isLoading ? 'invisible' : 'visible'}`}
              onLoad={() => {
                setIframeLoaded(true);
                setIsLoading(false);
              }}
              title="Synthia AI Chatbot"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              allow="microphone"
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}