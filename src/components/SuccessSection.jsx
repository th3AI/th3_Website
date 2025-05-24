import { motion } from "framer-motion";

export default function SuccessSection() {
  const stats = [
    { 
      title: "Time Saved", 
      value: "90%", 
      desc: "In content creation across client campaigns",
      icon: "⏱️",
      color: "from-cyan-400 to-blue-500",
      delay: 0.1
    },
    { 
      title: "Timeline", 
      value: "2024", 
      desc: "Launch of AI-Powered Post Engine",
      icon: "🚀",
      color: "from-purple-400 to-indigo-500",
      delay: 0.2
    },
    { 
      title: "Client Feedback", 
      value: "Game Changer", 
      desc: "“With th3's platform, we went from idea to post in seconds.”",
      icon: "💬",
      color: "from-amber-400 to-orange-500",
      delay: 0.3
    },
  ];

  const results = [
    {
      text: "Average 87% reduction in content production time",
      color: "text-cyan-400"
    },
    {
      text: "28% higher engagement on AI-optimized posts",
      color: "text-purple-400"
    },
    {
      text: "92% client retention rate",
      color: "text-amber-400"
    },
    {
      text: "5x faster campaign iteration cycles",
      color: "text-cyan-400"
    }
  ];

  return (
    <motion.section 
      id="success"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-6 text-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
            Setting Industry Benchmarks
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our <span className="text-cyan-300 font-medium">AI-powered platform</span> revolutionized how brands <span className="text-purple-300 font-medium">scale content creation</span> and <span className="text-amber-300 font-medium">engage audiences</span>.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3 max-w-6xl mx-auto mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: stat.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                borderColor: "rgba(34, 211, 238, 0.3)"
              }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 h-full"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto bg-gradient-to-br ${stat.color}`}>
                {stat.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{stat.title}</h3>
              <p className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                {stat.value}
              </p>
              <p className="text-white/70 text-sm md:text-base">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20 max-w-4xl mx-auto text-left"
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Proven Results</h3>
          <p className="text-white/80 mb-6">
            Our clients consistently report <span className="font-medium">3-5x improvement</span> in content velocity and engagement metrics.
          </p>
          <ul className="text-white/80 space-y-3">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className={`${result.color} mr-2`}>•</span>
                <span>{result.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}