export default function AboutSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-center text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200 animate-fade-in">
          Ready to Build Smarter with AI?
        </h2>
        <p className="mb-10 text-white/80 max-w-2xl mx-auto text-lg animate-fade-in delay-100">
          Let's create <span className="font-medium text-cyan-200">cutting-edge solutions</span> that propel your business forward.
        </p>
        
        <div className="mb-12 flex flex-wrap justify-center gap-4 animate-fade-in delay-200">
          <button className="bg-white hover:bg-cyan-100 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/20">
            Book a Discovery Call
          </button>
          <button className="border-2 border-cyan-400 hover:border-white text-cyan-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View Our Work
          </button>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 animate-fade-in delay-300">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            About th3
          </h3>
          <p className="text-white/80 mb-6 text-lg leading-relaxed">
            th3 is a <span className="font-medium text-cyan-300">leader in AI-driven IT solutions</span>, specializing in creating intelligent systems that transform businesses and enhance user experiences.
          </p>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-left">Our Expertise:</h4>
            <ul className="text-left text-white/90 grid sm:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                <span className="hover:text-cyan-300 transition-colors">Full-stack web development</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="hover:text-purple-300 transition-colors">Automation solutions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                <span className="hover:text-cyan-300 transition-colors">LLM-Based Software</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="hover:text-purple-300 transition-colors">Artificial Intelligence</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                <span className="hover:text-cyan-300 transition-colors">App Development</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="hover:text-purple-300 transition-colors">Cloud Solutions</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-white/70 italic">
              "We don't just build software - we craft intelligent experiences that adapt and grow with your business."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}