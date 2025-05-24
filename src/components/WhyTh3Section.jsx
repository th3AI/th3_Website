import { motion } from "framer-motion";

export default function WhyTh3Section() {
  const features = [
    {
      title: "AI Expertise",
      description: "Deep specialization in LLMs and generative AI",
      icon: "🤖",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Full-Stack Capabilities",
      description: "End-to-end solution development",
      icon: "🛠️",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Measurable Impact",
      description: "Solutions tied to business outcomes",
      icon: "📈",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Cutting-Edge Tech",
      description: "Always using the latest technologies",
      icon: "⚡",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const approachItems = [
    {
      text: "Rapid prototyping with iterative improvement",
      color: "text-cyan-400"
    },
    {
      text: "Data-driven decision making",
      color: "text-purple-400"
    },
    {
      text: "Continuous performance optimization",
      color: "text-cyan-400"
    },
    {
      text: "Security-first implementation",
      color: "text-purple-400"
    }
  ];

  return (
    <motion.section 
      id="why"
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
            Why Choose th3?
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-white/80">
            We engineer <span className="text-cyan-300 font-medium">intelligent AI solutions</span> that deliver measurable impact and <span className="text-purple-300 font-medium">transformative business results</span>.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
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
              <div className={`text-4xl mb-4 w-16 h-16 rounded-xl flex items-center justify-center mx-auto bg-gradient-to-br ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70 text-sm md:text-base">{feature.description}</p>
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
          <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Our Approach</h3>
          <p className="text-white/80 mb-6">
            Unlike traditional development shops, we focus on <span className="font-medium">AI-first solutions</span> that learn and adapt. Our methodology combines:
          </p>
          <ul className="text-white/80 space-y-3">
            {approachItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className={`${item.color} mr-2`}>•</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}