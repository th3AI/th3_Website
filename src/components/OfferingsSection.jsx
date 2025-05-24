import { motion } from "framer-motion";

export default function OfferingsSection() {
  const offerings = [
    {
      title: "AI Chatbots",
      description: "Conversational systems built on cutting-edge LLMs",
      icon: "💬",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Process Automation", 
      description: "Streamline workflows with intelligent AI logic",
      icon: "⚙️",
      color: "from-purple-400 to-indigo-500"
    },
    {
      title: "Social Media Intelligence",
      description: "Generate, optimize, and schedule posts automatically",
      icon: "📱", 
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "Custom AI Agents",
      description: "Tailored solutions for lead gen and content automation",
      icon: "🛠️",
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <motion.section 
      id="solutions"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200"
        >
          Our Core Offerings
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-xl text-white/80 mb-12"
        >
          Specialized AI solutions designed to <span className="text-cyan-300 font-medium">automate</span>, <span className="text-purple-300 font-medium">optimize</span>, and <span className="text-amber-300 font-medium">transform</span> your business operations
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className={`text-5xl mb-6 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} mx-auto`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Custom Solutions</h3>
          <p className="text-white/80 mb-4">
            We build <span className="font-medium">bespoke AI systems</span> tailored to your specific business needs. Our solutions evolve with your requirements.
          </p>
          <ul className="text-white/80 space-y-2">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span>
              <span>End-to-end implementation</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Continuous improvement cycles</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">•</span>
              <span>Performance analytics dashboard</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}