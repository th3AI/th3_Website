import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section 
      id="contact"
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
          Let's Build Together
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-xl text-[#EEEEEE] mb-12"
        >
          Ready to <span className="text-[#A64D79] font-medium">transform your business</span> with AI? <span className="text-[#6A1E55] font-medium">Reach out</span> and let's create something <span className="text-[#D89CC1] font-medium">extraordinary</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto bg-[#0a0a0a]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#3B1C32] shadow-[0_0_30px_rgba(166,77,121,0.2)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl text-white border border-[#6A1E55]/30 bg-[#1A1A1D]/70 focus:outline-none focus:ring-2 focus:ring-[#A64D79] focus:border-transparent transition-all duration-300 placeholder-[#EEEEEE]/50"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl text-white border border-[#6A1E55]/30 bg-[#1A1A1D]/70 focus:outline-none focus:ring-2 focus:ring-[#8D3173] focus:border-transparent transition-all duration-300 placeholder-[#EEEEEE]/50"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl text-white border border-[#6A1E55]/30 bg-[#1A1A1D]/70 focus:outline-none focus:ring-2 focus:ring-[#A64D79] focus:border-transparent transition-all duration-300 placeholder-[#EEEEEE]/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="pt-4"
            >
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(166, 77, 121, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#A64D79] to-[#6A1E55] hover:from-[#C47AAE] hover:to-[#8D3173] text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[#A64D79]/40 w-full text-lg"
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 p-4 rounded-xl bg-[#6A1E55]/20 border border-[#A64D79]/30"
            >
              <p className="text-[#D89CC1] text-lg">
                Thank you! Your message has been sent. We'll get back to you soon.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row justify-center gap-8 text-[#EEEEEE]/80"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6A1E55]/30 flex items-center justify-center text-[#D89CC1]">
              ✉️
            </div>
            <span>th3ai.labs@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6A1E55]/30 flex items-center justify-center text-[#D89CC1]">
              📞
            </div>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6A1E55]/30 flex items-center justify-center text-[#D89CC1]">
              📍
            </div>
            <span>Lucknow, UP</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}