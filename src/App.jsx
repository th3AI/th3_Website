import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyTh3Section from "./components/WhyTh3Section";
import OfferingsSection from "./components/OfferingsSection";
import SuccessSection from "./components/SuccessSection";
import LangChainSection from "./components/LangChainSection";
import AboutSection from "./components/AboutSection";
import ChatbotToggle from "./components/ChatbotToggle";
import Chatbot from "./components/Chatbot";
import ContactForm from "./components/Contactform";
import Footer from "./components/Footer";
// import SplashCursor from "./components/SplashCursor";

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Redefining AI for the Real World";
  const [menuOpen, setMenuOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(typingInterval);
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  // Smooth scroll to section with offset for navbar
  const scrollToSection = useCallback((id) => {
    setIsScrolling(true);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Reset scrolling state after animation completes
      setTimeout(() => setIsScrolling(false), 1000);
      setMenuOpen(false);
    }
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar-content')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Keyboard accessibility for mobile menu
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (menuOpen && event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <Navbar 
        scrollToSection={scrollToSection} 
        setMenuOpen={setMenuOpen} 
        menuOpen={menuOpen} 
      />

      <main>
        <section id="home" className="scroll-mt-20" aria-label="Hero section">
          <HeroSection typedText={typedText} scrollToSection={scrollToSection} />
        </section>

        <section id="why" className="scroll-mt-20" aria-label="Why choose th3">
          <WhyTh3Section />
        </section>

        <section id="solutions" className="scroll-mt-20" aria-label="Our solutions">
          <OfferingsSection />
        </section>

        <section id="success" className="scroll-mt-20" aria-label="Success stories">
          <SuccessSection />
        </section>

        <section id="about" className="scroll-mt-20" aria-label="About us">
          <AboutSection />
        </section>

        <section id="langchain-chatbot" className="scroll-mt-20" aria-label="LangChain chatbot">
          <LangChainSection />
        </section>

        <section id="contacts" className="scroll-mt-20" aria-label="Contact us">
          <ContactForm />
        </section>
      </main>

      {/* Chatbot container with responsive sizing */}
      {showChatbot && (
        <div 
          className={`
            fixed bottom-24 right-6 
            w-full max-w-md h-[70vh] max-h-[600px] 
            bg-gray-900 rounded-lg shadow-xl z-40 
            overflow-hidden transition-all duration-300
            border border-white/10
          `}
          aria-live="polite"
          aria-atomic="true"
        >
          <Chatbot />
        </div>
      )}

      <ChatbotToggle 
        showChatbot={showChatbot} 
        setShowChatbot={setShowChatbot} 
        isScrolling={isScrolling}
      />
      
      <Footer />
      {/* <SplashCursor /> */}
    </div>
    
  );
}
