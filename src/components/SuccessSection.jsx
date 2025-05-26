import { motion } from "framer-motion";

export default function SuccessSection() {
  const stats = [
    { 
      title: "Time Saved", 
      value: "90%", 
      desc: "In content creation across client campaigns",
      icon: "⏱️",
      color: "from-[#6A1E55] to-[#A64D79]",
      delay: 0.1
    },
    { 
      title: "Timeline", 
      value: "2024", 
      desc: "Launch of AI-Powered Post Engine",
      icon: "🚀",
      color: "from-[#3B1C32] to-[#6A1E55]",
      delay: 0.2
    },
    { 
      title: "Client Feedback", 
      value: "Game Changer", 
      desc: "“With our platform, we went from idea to post in seconds.”",
      icon: "💬",
      color: "from-[#8D3173] to-[#C47AAE]",
      delay: 0.3
    },
  ];

  const results = [
    {
      text: "Average 87% reduction in content production time",
      color: "text-[#A64D79]"
    },
    {
      text: "28% higher engagement on AI-optimized posts",
      color: "text-[#6A1E55]"
    },
    {
      text: "92% client retention rate",
      color: "text-[#D89CC1]"
    },
    {
      text: "5x faster campaign iteration cycles",
      color: "text-[#A64D79]"
    }
  ];

  return (
    <motion.section 
      id="success"
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
          Proven Success Metrics
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-xl text-[#EEEEEE] mb-12"
        >
          Our <span className="text-[#A64D79] font-medium">AI solutions</span> consistently deliver <span className="text-[#6A1E55] font-medium">measurable results</span> that <span className="text-[#D89CC1] font-medium">transform businesses</span>
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.delay }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 20px rgba(166, 77, 121, 0.3)"
              }}
              className="bg-[#0a0a0a]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#3B1C32] hover:border-[#A64D79] transition-all duration-300"
            >
              <div className={`text-5xl mb-6 w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-gradient-to-br ${stat.color} shadow-[0_0_15px_rgba(166,77,121,0.3)]`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{stat.title}</h3>
              <p className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#D89CC1] to-[#A64D79]">
                {stat.value}
              </p>
              <p className="text-[#EEEEEE]/80">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-[#1A1A1D]/70 backdrop-blur-sm p-8 rounded-2xl border border-[#6A1E55]/30 max-w-4xl mx-auto text-left shadow-[0_0_20px_rgba(106,30,85,0.2)]"
        >
          <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#A64D79] to-[#D89CC1]">Quantifiable Impact</h3>
          <p className="text-[#EEEEEE]/80 mb-4">
            Our clients experience <span className="font-medium text-[#A64D79]">significant improvements</span> across all key performance indicators with our AI solutions.
          </p>
          <ul className="text-[#EEEEEE]/80 space-y-2">
            {results.map((result, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <span className={`${result.color} mr-2 font-bold`}>•</span>
                <span>{result.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}