import { motion } from "framer-motion";

export default function WhyTh3Section() {
  const features = [
    {
      title: "AI Pioneers",
      description: "Creators of breakthrough social media automation",
      icon: "🚀",
      color: "from-[#6A1E55] to-[#A64D79]"
    },
    {
      title: "LLM Specialists",
      description: "Deep expertise in large language models",
      icon: "🧠",
      color: "from-[#3B1C32] to-[#6A1E55]"
    },
    {
      title: "Business Alignment",
      description: "Solutions designed to meet your goals",
      icon: "🎯",
      color: "from-[#A64D79] to-[#D89CC1]"
    },
    {
      title: "Scalable Systems",
      description: "Architected for growth and performance",
      icon: "⚡",
      color: "from-[#8D3173] to-[#C47AAE]"
    }
  ];

  const approachItems = [
    {
      text: "Proven track record in AI automation",
      color: "text-[#A64D79]"
    },
    {
      text: "Cutting-edge LLM implementations",
      color: "text-[#6A1E55]"
    },
    {
      text: "Focus on measurable business impact",
      color: "text-[#D89CC1]"
    },
    {
      text: "Scalable, secure architectures",
      color: "text-[#8D3173]"
    }
  ];

  return (
    <motion.section 
      id="why"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-6 text-center bg-gradient-to-br from-white via-gray-50 to-white relative"
    >
      {/* Subtle glowing blobs for depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#A64D79]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#6A1E55]/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ce76ac] to-[#A64D79]">
            Why Consider th3?
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-700">
            We engineer <span className="text-[#A64D79] font-medium">intelligent AI solutions</span> that deliver measurable impact. From advanced chatbots to LLM-powered automation, our systems are designed to scale and align with your business goals. Our breakthrough in building a fully automated social media post generation and publishing software positioned us as pioneers in the AI space—trusted by innovators, built for results.
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
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="bg-white shadow-md p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className={`text-4xl mb-4 w-16 h-16 rounded-xl flex items-center justify-center mx-auto bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl border border-gray-200 max-w-4xl mx-auto text-left shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#A64D79] to-[#D89CC1]">Our Differentiators</h3>
          <p className="text-gray-700 mb-6">
            We combine <span className="font-medium text-[#A64D79]">technical expertise</span> with <span className="font-medium text-[#6A1E55]">business acumen</span> to deliver AI solutions that drive real impact:
          </p>
          <ul className="text-gray-700 space-y-3">
            {approachItems.map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <span className={`${item.color} mr-2 font-bold`}>•</span>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}