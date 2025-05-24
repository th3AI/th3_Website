import { motion } from "framer-motion";
import React from "react";
import logo from "../assets/logo.png";

export default function Navbar({ scrollToSection, setMenuOpen, menuOpen }) {
  const sections = [
    { label: "Home", id: "home" },
    { label: "Why th3", id: "why" },
    { label: "Solutions", id: "solutions" },
    { label: "Success", id: "success" },
    { label: "About", id: "about" },
    { label: "Chatbot", id: "langchain-chatbot" },
    { label: "Contact", id: "contacts" },
  ];

  const handleScroll = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-6xl mx-4 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer"
        onClick={() => handleScroll('home')}
      >
        <img src={logo} className="h-10 w-auto" alt="th3 logo" />
      </motion.div>

      <ul className="hidden md:flex space-x-1">
        {sections.map(({ label, id }, index) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll(id)}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
              id === 'contact' 
                ? 'text-cyan-300 hover:text-cyan-200' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            {label}
          </motion.li>
        ))}
      </ul>

      <motion.div 
        className="md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="w-8 h-6 flex flex-col justify-between items-end focus:outline-none"
          aria-label="Toggle menu"
        >
          {[...Array(3)].map((_, i) => (
            <motion.span 
              key={i}
              animate={{
                width: menuOpen ? '100%' : i === 1 ? '80%' : '100%',
                backgroundColor: menuOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.8)'
              }}
              transition={{ duration: 0.3 }}
              className={`block h-[2px] ${i === 1 ? 'w-4/5' : 'w-full'} bg-white/80 rounded-full transition-all duration-300`}
            />
          ))}
        </button>
      </motion.div>
    </motion.nav>
  );
}