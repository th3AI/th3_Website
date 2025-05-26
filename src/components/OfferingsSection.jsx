import { motion } from "framer-motion";

export default function OfferingsSection() {
  const offerings = [
    {
      title: "AI Chatbots",
      description: "Conversational systems built on cutting-edge LLMs",
      icon: "💬",
      color: "from-[#6A1E55] to-[#A64D79]"
    },
    {
      title: "Process Automation", 
      description: "Streamline workflows with intelligent AI logic",
      icon: "⚙️",
      color: "from-[#3B1C32] to-[#6A1E55]"
    },
    {
      title: "Social Media Intelligence",
      description: "Generate, optimize, and schedule posts automatically",
      icon: "📱", 
      color: "from-[#8D3173] to-[#C47AAE]"
    },
    {
      title: "Custom AI Agents",
      description: "Tailored solutions for lead gen and content automation",
      icon: "🛠️",
      color: "from-[#A64D79] to-[#D89CC1]"
    }
  ];

  return (
    <motion.section 
      id="solutions"
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
          Our Core Offerings
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-xl text-[#EEEEEE] mb-12"
        >
          Specialized AI solutions designed to <span className="text-[#A64D79] font-medium">automate</span>, <span className="text-[#6A1E55] font-medium">optimize</span>, and <span className="text-[#D89CC1] font-medium">transform</span> your business operations
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 20px rgba(166, 77, 121, 0.3)"
              }}
              className="bg-[#0a0a0a]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#3B1C32] hover:border-[#A64D79] transition-all duration-300"
            >
              <div className={`text-5xl mb-6 w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-gradient-to-br ${item.color} shadow-[0_0_15px_rgba(166,77,121,0.3)]`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-[#EEEEEE]/80">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-[#1A1A1D]/70 backdrop-blur-sm p-8 rounded-2xl border border-[#6A1E55]/30 max-w-4xl mx-auto text-left shadow-[0_0_20px_rgba(106,30,85,0.2)]"
        >
          <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#A64D79] to-[#D89CC1]">Custom Solutions</h3>
          <p className="text-[#EEEEEE]/80 mb-4">
            We build <span className="font-medium text-[#A64D79]">bespoke AI systems</span> tailored to your specific business needs. Our solutions evolve with your requirements.
          </p>
          <ul className="text-[#EEEEEE]/80 space-y-2">
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-start"
            >
              <span className="text-[#A64D79] mr-2 font-bold">•</span>
              <span>End-to-end implementation</span>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-start"
            >
              <span className="text-[#6A1E55] mr-2 font-bold">•</span>
              <span>Continuous improvement cycles</span>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              className="flex items-start"
            >
              <span className="text-[#D89CC1] mr-2 font-bold">•</span>
              <span>Performance analytics dashboard</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}