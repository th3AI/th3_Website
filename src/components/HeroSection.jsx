import { motion } from "framer-motion";

export default function HeroSection({ typedText, scrollToSection }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[linear-gradient(145deg,#000000_0%,#0a0a0a_50%,#000000_100%)] overflow-hidden relative pt-24 md:pt-32">
      {/* Mirror black background with enhanced reflections */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Reflective surface with improved pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-15"></div>
        
        {/* Enhanced 3D Geometric Shapes with depth */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-2 border-[#A64D79]/40 bg-[#A64D79]/15 backdrop-blur-md transform-style-preserve-3d rotate-x-60 rotate-y-30"
          animate={{
            rotateX: [60, 55, 60, 65, 60],
            rotateY: [30, 35, 30, 25, 30],
            translateY: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 rounded-full border border-white/20 transform translate-z-12 shadow-inner"></div>
          <div className="absolute inset-4 rounded-full border border-white/10 transform translate-z-6"></div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-[#6A1E55]/40 bg-[#6A1E55]/15 backdrop-blur-md transform-style-preserve-3d rotate-45 rotate-x-45 rotate-y-15"
          animate={{
            rotate: [45, 50, 45, 40, 45],
            rotateX: [45, 50, 45, 40, 45],
            translateY: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 border border-white/20 transform translate-z-10 shadow-inner"></div>
          <div className="absolute inset-3 border border-white/10 transform translate-z-5"></div>
        </motion.div>
        
        {/* Glow effects with improved animation */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(166,77,121,0.25)_0%,_rgba(166,77,121,0)_70%)] blur-xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(106,30,85,0.25)_0%,_rgba(106,30,85,0)_70%)] blur-xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 px-4"
        >
          <motion.h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-[#f5e9f1] to-[#f8eef5] bg-clip-text text-transparent leading-tight drop-shadow-[0_0_20px_rgba(166,77,121,0.7)]">
            {typedText}
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-3xl mb-12 max-w-3xl mx-auto text-[#f0f0f0] px-4 font-light"
        >
          th3 delivers <span className="text-[#d89cc1] font-medium drop-shadow-[0_0_10px_rgba(216,156,193,0.5)]">AI-driven solutions</span> and <span className="text-[#c47aae] font-medium drop-shadow-[0_0_10px_rgba(196,122,174,0.4)]">from chatbots to automation</span> redefining how brands create and publish content.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-6 px-4"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(166, 77, 121, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("solutions")}
            className="relative overflow-hidden bg-gradient-to-r from-[#6A1E55] to-[#A64D79] hover:from-[#7a2563] hover:to-[#b65a8d] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_0_25px_rgba(166,77,121,0.5)] hover:shadow-[0_0_35px_rgba(166,77,121,0.7)] backdrop-blur-sm"
          >
            <span className="relative z-10">Explore Solutions</span>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_70%)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              borderColor: "#d89cc1",
              textColor: "#d89cc1",
              boxShadow: "0 0 25px rgba(216, 156, 193, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contacts")}
            className="border-2 border-[#8d3173] hover:border-[#d89cc1] text-[#c47aae] hover:text-[#d89cc1] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-[#1a1a1d]/50 backdrop-blur-sm shadow-[0_0_20px_rgba(141,49,115,0.3)]"
          >
            Contact Us
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto text-[#c47aae] hover:text-[#d89cc1] cursor-pointer drop-shadow-[0_0_15px_rgba(196,122,174,0.5)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => scrollToSection("about")}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}