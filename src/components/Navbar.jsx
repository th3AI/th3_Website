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
    { label: "Products", id: "langchain-chatbot" },
    { label: "Contact", id: "contacts" },
  ];

  const handleScroll = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Content */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#0a0a0a] border-l border-white/10 z-50 p-6 overflow-y-auto md:hidden"
      >
        <div className="flex justify-between items-center mb-8">
          <img src={logo} className="h-10 w-auto" alt="th3 logo" />
          <button 
            onClick={() => setMenuOpen(false)}
            className="text-white/80 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>
        
        <ul className="space-y-4">
          {sections.map(({ label, id }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll(id)}
              className="text-white/80 hover:text-white text-xl font-medium py-3 border-b border-white/10"
            >
              {label}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-lg border border-white/20 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between w-full max-w-6xl shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => handleScroll('home')}
        >
          <img src={logo} className="h-8 sm:h-10 w-auto" alt="th3 logo" />
        </motion.div>

        {/* Desktop Navigation */}
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
              className={`px-4 py-2 rounded-full text-sm font-bold cursor-pointer transition-all duration-200 ${
                id === 'contact' 
                  ? 'text-cyan-300 hover:text-cyan-200' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {label}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
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
    </>
  );
}