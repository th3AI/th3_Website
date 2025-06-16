import { motion } from "framer-motion";

export default function AboutSection() {
  const expertise = [
    { name: "Full-stack web development", color: "text-[#A64D79]" },
    { name: "Automation solutions", color: "text-[#6A1E55]" },
    { name: "LLM-Based Software", color: "text-[#D89CC1]" },
    { name: "Artificial Intelligence", color: "text-[#A64D79]" },
    { name: "App Development", color: "text-[#6A1E55]" },
    { name: "Cloud Solutions", color: "text-[#D89CC1]" }
  ];
   
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error(`Element with id ${sectionId} not found`);
    }
  };

  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 text-center bg-[linear-gradient(145deg,#000000_0%,#0a0a0a_50%,#000000_100%)] relative"
    >
      {/* Mirror black background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#6A1E55]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#A64D79]/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#D89CC1] to-[#A64D79]"
        >
          Ready to Build Smarter with AI?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-xl text-[#EEEEEE] mb-12"
        >
          Let's create <span className="text-[#A64D79] font-medium">cutting-edge solutions</span> that <span className="text-[#6A1E55] font-medium">propel your business</span> forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#A64D79] to-[#6A1E55] hover:from-[#C47AAE] hover:to-[#8D3173] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[#A64D79]/30"
          >
            Book a Discovery Call
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("langchain-chatbot")}
            className="border-2 border-[#A64D79] hover:border-[#D89CC1] text-[#D89CC1] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            View Our Work
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-4xl mx-auto bg-[#1A1A1D]/70 backdrop-blur-sm p-8 rounded-2xl border border-[#6A1E55]/30 shadow-[0_0_20px_rgba(106,30,85,0.2)]"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#A64D79] to-[#D89CC1]"
          >
            About th3
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[#EEEEEE]/80 mb-6 text-lg leading-relaxed"
          >
            th3 is a <span className="font-medium text-[#A64D79]">leader in AI-driven IT solutions</span>, specializing in creating intelligent systems that transform businesses and enhance user experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-6"
          >
            <h4 className="text-xl font-semibold mb-4 text-left text-[#D89CC1]">Our Expertise:</h4>
            <ul className="text-left text-[#EEEEEE]/90 grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <span className={`w-2 h-2 rounded-full mr-3 ${item.color.replace('text', 'bg')}`}></span>
                  <span className={`hover:${item.color} transition-colors`}>{item.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-8 pt-6 border-t border-[#6A1E55]/30"
          >
            <p className="text-[#EEEEEE]/70 italic">
              "We don't just build software - we craft intelligent experiences that adapt and grow with your business."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}