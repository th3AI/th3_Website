import { motion } from "framer-motion";

export default function LangChainSection() {
  const features = [
    {
      title: "Context-Aware",
      description: "Maintains conversation context for natural interactions",
      icon: "🧠",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Memory-Enabled",
      description: "Remembers user preferences and past interactions",
      icon: "🔍",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Multi-Source",
      description: "Integrates with documents, databases, and APIs",
      icon: "📚",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Secure",
      description: "Enterprise-grade data protection and privacy",
      icon: "🔒",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200"
        >
          AI Chatbots, Powered by LangChain
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-white/80 mb-12 max-w-3xl mx-auto"
        >
          Our <span className="text-cyan-300 font-medium">next-generation chatbots</span> leverage LangChain's advanced architecture for <span className="text-purple-300 font-medium">context-aware</span>, <span className="text-emerald-300 font-medium">memory-enabled</span> conversations.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20 max-w-4xl mx-auto text-left"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">LangChain Architecture</h3>
              <p className="text-white/80 mb-4">
                Our implementation leverages LangChain's modular components for:
              </p>
              <ul className="text-white/80 space-y-2">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Dynamic document retrieval</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Conversation memory management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Multi-LLM routing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Tool integration</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-white/10 p-6 rounded-xl border border-white/20">
              <h4 className="font-medium mb-3 text-white">Technical Highlights</h4>
              <ul className="text-sm text-white/80 space-y-2">
                <li>• Vector similarity search (FAISS)</li>
                <li>• ConversationBufferMemory</li>
                <li>• LLMChain + Agents</li>
                <li>• Custom tools integration</li>
                <li>• Streaming responses</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}